import React, { Component } from 'react';

export default function lazyLoad (componentfn) {
  class LazyloadComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      }
    }
    async componentWillMount () {
      const { default: component } = await componentfn();
      this.setState({ component })
    }
    render () {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return LazyloadComponent;
}

// 流程
// 1. 首先使用() => import('') 的异步引入写法, webpack会把LazyLoad.js单独放在一个文件中。 
//        使用了几次就有几个单独的文件, 即相当于每一个组件有一个单独的文件
//        注意这里把高阶组件导出， 但是路由没有访问到是不会执行高阶组件的
// 2. 访问对应的路由的时候就会执行这个 LazyLoad.js, 
    //  因为是对componentWillMount 写上async， 所以对render没影响
    //  所以一开始执行人的人的时候 componentWillMount 可能还没执行完
    // 此时返回的组件是null
    // 等到下载完这个文件, 就setState, 把动态引入的组件重新渲染