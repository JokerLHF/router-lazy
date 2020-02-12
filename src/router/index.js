import App from '../App';

let requireContext = require.context('./', true, /(\w)*Route.js/);
let compomentList = requireContext.keys().map(key => requireContext(key).default)
let routerList = {
  path: '/',
  component: App,
  children: compomentList
}

export default routerList;