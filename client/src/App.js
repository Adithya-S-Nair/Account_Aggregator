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
import { makeRequest } from './Axios';
import { AuthContext } from './Context/AuthContext';

const App = () => {

  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await makeRequest.get('/auth/verify');
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      fetchUserDetails();
    } else {
      setLoading(false);
    }
  }, [user, setUser]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      makeRequest.get('/auth/logout')
        .then(() => {
          // Optional: You might want to perform some cleanup or additional actions before the page is unloaded
        });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const handleBackButton = () => {
      makeRequest.get('/auth/logout')
        .then(() => {
          window.location.reload()
        })
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  const ProtectedRoute = ({ children, layout: Layout }) => {
    if (loading) {
      return null;
    }

    if (!user) {
      return <Navigate to="/login" />;
    }

    if (user && Layout === BranchLayout) {
      return children
    }

    else {
      return <Navigate to="/login" />;
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