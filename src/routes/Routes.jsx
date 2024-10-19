
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../shared/notFound/NotFound';
import Home from '../homeComponents/Home';
import Contact from '../page/Contact/Contact';

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
                path: '*',
                element: <NotFound/>,
            },
        ],
    }
]);

export default routes;