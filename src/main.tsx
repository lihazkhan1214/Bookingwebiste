import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeListing from './pages/homeListing/HomeListing.tsx';
import HomeListingDetails from './pages/homeListingDetails/HomeListingDetails.tsx';
import AboutUs from './pages/aboutus/AboutUs.tsx';
import TermsAndServices from './pages/termsandservices/Terms.tsx';
import ListProperty from './pages/listproperty/ListProperty.tsx';
import SignUp from './pages/signup/SignUp.tsx';
import ADDlistpage from "./pages/addlistpage/page.tsx"
import Apartment from './pages/apartment/page.tsx';
import Homes from './pages/homes/page.tsx';
import Hotels from './pages/hotels/Hotels.tsx';

import Inoformpage from './pages/infoform/Inoformpage.tsx';
import AlterPlace from './pages/aplace/AlterPlace.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/homelisting",
    element: <HomeListing/>,
  },
  {
    path: "/homelistingdetails",
    element: <HomeListingDetails/>,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  {
    path: "/terms",
    element: <TermsAndServices/>,
  },
  {
    path: "/list-property",
    element: <ListProperty/>,
  },
  {
    path: "/partner/sign-up",
    element: <SignUp/>,
  },

  {
    path: "/addlistpage",
    element: <ADDlistpage/>,
  },


  {
    path: "/apartment",
    element: <Apartment/>,
  },

  {
    path: "/homes",
    element: <Homes/>,
  },
  {
    path: "/hotels",
    element: < Hotels/>,
  },
  {
    path: "/alternativeplaces",
    element: <AlterPlace/>,
  },

 

 
  {
    path: "/infoform",
    element: <Inoformpage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
