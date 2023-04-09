import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import ErrorPage from "./components/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/country/:countryCode",
        element: <CountryDetailPage />,
    },
    {
        path: '/error',
        element: <ErrorPage />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <Provider store={store}>
              <RouterProvider router={router}/>
          </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
