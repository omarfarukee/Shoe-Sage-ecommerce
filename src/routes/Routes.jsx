
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../shared/notFound/NotFound';
import Home from '../homeComponents/Home';
import Contact from '../page/Contact/Contact';
import Login from '../page/Login/Login';

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
                path: '*',
                element: <NotFound/>,
            },
        ],
    }
]);

export default routes;