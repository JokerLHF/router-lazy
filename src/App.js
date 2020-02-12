import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routerList from './router/index';
function App () {
  console.log(routerList);
  const childrenList = routerList.children;
  return (
    <Router>
      {
        childrenList.map(item => {
          return (<Link to={item.path}>{item.text}</Link>)
        })
      }
      <Switch>
        {
          childrenList.map(item => {
            const { component, path, exact = false } = item;
            return (<Route exact={exact} path={path} component={component} />)
          })
        }
      </Switch>
    </Router>
  )
}

export default App;
