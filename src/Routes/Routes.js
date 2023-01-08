import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import PageNotFound from './../components/PageNotFound/PageNotFound';
import Contact from './../components/Contact/Contact';
import Home from './../components/Home/Home/Home';
import Blog from './../components/Blog/Blog';
import ProjectDetails from "../components/Home/ProjectDetails/ProjectDetails";
import AboutMe from "../components/AboutMe/AboutMe";

export const my_router = createBrowserRouter([
    {   path:'/', 
        element: <Main></Main>, 
        children: [
            {path: '/', element: <Home></Home>},
            {path: '/home', element: <Home></Home>},
            {path: '/blog', element: <Blog></Blog>},
            {path: '/contact', element: <Contact></Contact>},
            {path: '/about-me', element: <AboutMe></AboutMe>},

            {
                path: 'project/:name',
                element: <ProjectDetails></ProjectDetails>,
                loader: async ({params}) => await fetch(`https://01-portfolio-server.vercel.app/project/${params.name}`)
            },

            {path: '*', element: <PageNotFound></PageNotFound>}
        ]
    }
])