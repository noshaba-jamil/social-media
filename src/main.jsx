 import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CreatePost from "./components/CreatePost"
import ListPost from "./components/ListPost"   // ✅ Import the right component
import About from "./components/About";

// Import React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// ✅ Define router with children
const router = createBrowserRouter([
  {
    path: "/",   
    element: <App />,
    children: [
      { path: "create-post", element: <CreatePost /> },   // ✅ lowercase path
      { path: "/", element: <ListPost /> },  
        { path: "about", element: <About /> },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
)
