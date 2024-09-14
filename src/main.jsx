import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import Header from './template/Header'
import Footer from './template/Footer'
import { Button } from 'react-bootstrap'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "aboutme",
    element: <AboutMe />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
