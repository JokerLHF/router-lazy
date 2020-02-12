import lazyLoad from '../LazyLoad';

let CRoute = {
  path: '/C',
  component: lazyLoad(() => import('../C')),
  text: 'C',
  children: [{
    path: '/C/CItem',
    component: lazyLoad(() => import('../C/CItem')),
    exact: true,
  }]
}


export default CRoute;