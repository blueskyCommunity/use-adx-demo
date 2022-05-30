import { Routes, Route } from "react-router-dom";

import routesConfig from "./config";

const RoutesComponent = () => (
  <Routes>
    {Object.keys(routesConfig).map((item) => {
      const routeItem = routesConfig[item];
      return (
        <Route key={item} path={routeItem.path} element={routeItem.element} />
      );
    })}
  </Routes>
);

export default RoutesComponent;
