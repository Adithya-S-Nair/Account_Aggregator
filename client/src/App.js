import React, { useState, useEffect, useContext } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';

import LoginPage from './Pages/Auth/LoginPage';
import RegisterPage from './Pages/Auth/RegisterPage';
import NotFound from './Pages/Error/NotFound';
import LandingPage from './Pages/Common/LandingPage';
import BranchLayout from './Layouts/BranchLayout';
import VerificationPage from './Pages/Branch/VerificationPage';
import ViewConsents from './Pages/Branch/ViewConsents';
import AccountDetailsPage from './Pages/Branch/AccountDetailsPage';
import FiReq from './Pages/Branch/FiReq';
import Verifyotp from './Pages/Auth/Verifyotp';

const App = () => {
  const [user] = useState({
    user_id: 1,
    user_name: 'adithya',
    user_type: 'branch'
  });
  const [loading, setLoading] = useState(false);

  const ProtectedRoute = ({ children, layout: Layout }) => {
    if (loading) {
      return null;
    }

    if (!user) {
      return <Navigate to="/login" />;
    }

    if (user.user_type === 'branch' && Layout === BranchLayout) {
      return children
    }
    //else if (user.user_type === 'Users' && Layout === UserLayout) {
    //   return children
    // } 
    else {
      return <Navigate to="/login" />; // Redirect to home or handle unauthorized access
    }
  };


  const router = createBrowserRouter([
    {
      path: '/branch',
      element: (
        <ProtectedRoute layout={BranchLayout}>
          <BranchLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/branch/verify',
          element: <VerificationPage />,
        },
        {
          path: '/branch/viewconsents',
          element: <ViewConsents />,
        },
        {
          path: '/branch/accountdetails',
          element: <AccountDetailsPage />,
        },
        {
          path: '/branch/viewfireq/:consentId',
          element: <FiReq />,
        },
      ],
    },
    // {
    //   path: '/user',
    //   element: (
    //     <ProtectedRoute layout={UserLayout}>
    //       <UserLayout />
    //     </ProtectedRoute>
    //   ),
    //   children: [
    //     {
    //       path: '/user/dashboard',
    //       element: <ProjectDashboard />,
    //     },
    //   ],
    // },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/verifylogin',
      element: <Verifyotp />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/verifyotp',
      element: <Verifyotp />,
    },
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App