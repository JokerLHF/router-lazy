
import lazyLoad from '../LazyLoad';

let ARoute = {
  path: '/A',
  component: lazyLoad(() => import('../A')),
  text: 'A',
  children: [{
    path: '/A/AItem',
    component: lazyLoad(() => import('../A/AItem')),
    exact: true,
  }]
}


export default ARoute;