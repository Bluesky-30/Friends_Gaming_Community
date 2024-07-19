import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Login from './Components/Login.jsx'
import JoinUs from './Components/JoinUs.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }, 
      {
        path: "about",
        element: <About />
      }, 
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/user/:userid",
        element: <User />
      },
      {
        path: "login",
        element : <Login />
      },
      {
        path: "joinus",
        element : <JoinUs />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
