import Home from '../pages/Home'
import About from '../pages/About'
import Fault from '../pages/Fault'
import NotFound from '../pages/NotFound'

const routes = [
  { path: "/", key: "ROOT", exact: true, component: Home },
  { path: "/about", key: "ABOUT", exact: true, component: About },
  { path: "/fault", key: "FAULT", exact: true, component: Fault },

  // Catch All Else
  { path: "/:NotFound", component: NotFound }
];

export default routes;