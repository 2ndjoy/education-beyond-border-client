import { useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes';
import { AuthContext } from './UserContext/AuthProvider/AuthProvider';

function App() {
  const { theme } = useContext(AuthContext);

  return (

    <div data-theme={theme ? "cupcake" : 'dark'}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
