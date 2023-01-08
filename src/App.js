import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { my_router } from './Routes/Routes';

const App = () => {
    return (
        <div>
            <RouterProvider router={my_router}></RouterProvider>

            <Toaster
                position="top-center"
            />
            
        </div>
    );
};

export default App;