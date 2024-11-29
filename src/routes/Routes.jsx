
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../shared/notFound/NotFound';
import Home from '../homeComponents/Home';
import Contact from '../page/Contact/Contact';
import Login from '../page/Login/Login';
import SignUp from '../page/Login/SignUp';
import AllShoe from '../page/AllShoePage/AllShoe';
import SingleShoesDetails from '../page/AllShoePage/SingleShoesDetails';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element:<Home/>,
            },
            {
                path: '/contact',
                element:<Contact/>,
            },
            {
                path: '/login',
                element:<Login/>,
            },
            {
                path: '/signUp',
                element:<SignUp/>,
            },
            {
                path: '/allShoes',
                element:<AllShoe/>,
            },
            {
                path: '/shoe/:id',
                element:<SingleShoesDetails/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            },
        ],
    }
]);

export default routes;