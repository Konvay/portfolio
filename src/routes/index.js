import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const routes = [
  { path: "/", key: "ROOT", exact: true, component: Home },

  // Catch All Else
  { path: "/:NotFound", component: NotFound }
];

export default routes;