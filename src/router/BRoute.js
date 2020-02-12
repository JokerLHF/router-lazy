import lazyLoad from '../LazyLoad';

let BRoute = {
  path: '/B',
  component: lazyLoad(() => import('../B')),
  text: 'B',
  children: [{
    path: '/B/BItem',
    component: lazyLoad(() => import('../B/BItem')),
    exact: true,
  }]
}


export default BRoute;