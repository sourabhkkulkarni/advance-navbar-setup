import { APP_NAV_ROUTE } from "../../../utils/Constant";
import Dashboard from "../dashboard/Dashboard";
import Home from "../home/Home";
import Ops from "../ops/Ops";

const AppRouting = ({ routename }) => {
  switch (routename) {
    case APP_NAV_ROUTE.ROOT: {
      return <Dashboard />;
    }
    case APP_NAV_ROUTE.OPS: {
      return <Ops />;
    }
    case APP_NAV_ROUTE.HOME: {
      return <Home />;
    }

    default:
      return (
        <div className="NotFoundContainer">
          <h2>Page not found</h2>
        </div>
      );
  }
};

export default AppRouting;
