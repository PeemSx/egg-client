import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

import { Routes,Route, HashRouter } from "react-router-dom";



// import { SigninPage } from './pages/SiginPage';
// import { LoginPage } from './pages/LoginPage';
// import { BlogPages } from './pages/BlogPages';

if(process.env.NODE_ENV === 'production') disableReactDevTools();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
//   {
//     path: "/signin",
//     element: <SigninPage/>,
//   },
//   {
//     path: "/login",
//     element: <LoginPage/>,
//   },
//   {
//     path: "/blogs",
//     element: <BlogPages/>,
//   },
 
 
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="*" element={ <App /> }> </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);


