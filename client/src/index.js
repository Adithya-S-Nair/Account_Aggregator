import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { OtpContextProvider } from './Context/OtpContext';
import { AuthContextProvider } from './Context/AuthContext';
import { AccountDetailContextProvider } from './Context/AccountDetailContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OtpContextProvider>
      <AuthContextProvider>
        <AccountDetailContextProvider>
          <App />
        </AccountDetailContextProvider>
      </AuthContextProvider>
    </OtpContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
