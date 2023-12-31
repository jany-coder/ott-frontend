import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile',
          element: <Profile></Profile>
        },
        {
          path: '/payment',
          element: <Payment></Payment>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
