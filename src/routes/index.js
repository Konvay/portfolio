import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const routes = [
  { path: "/", key: "ROOT", exact: true, component: Home },
  { path: "/about", key: "ABOUT", exact: true, component: About },

  // Catch All Else
  { path: "/:NotFound", component: NotFound }
];

export default routes;