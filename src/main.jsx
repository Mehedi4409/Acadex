// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, } from "react-router";
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom';
import Home from './Page/Home.jsx';
import { StrictMode } from 'react';

// const root = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>


)
