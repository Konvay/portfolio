import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'

const rootRoute = "/portfolio";

const routes = [
  { path: `${rootRoute}/`, key: "ROOT", exact: true, component: Home },
  { path: `${rootRoute}/about`, key: "ABOUT", exact: true, component: About },

  // Catch All Else
  { path: `${rootRoute}/:NotFound`, component: NotFound }
];

export default routes;