import { Outlet} from 'react-router-dom';
import HomeNavbar from '../shared/navbar/HomeNavbar';
// import HomeNavbar from '../shared/navbar/HomeNavbar';
// import CommonNavbar from "../shared/navbar/CommonNavbar"

const MainLayout = () => {
  // const location = useLocation();

//   const isHomePage = location.pathname === '/';

  return (
    // <div>
    //   {isHomePage ? (
    //     <HomeNavbar/>
    //   ) : (
    //     <CommonNavbar />
    //   )}

    //   {/* Main content */}
    //   <div className="w-full">
    //     <Outlet />
    //   </div>
    // </div>
    <div>
        <HomeNavbar/>
        <Outlet/>
    </div>
  );
};

export default MainLayout;