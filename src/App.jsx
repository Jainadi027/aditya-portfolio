import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from"./Pages/About/About";

import Projects from "./Pages/Projects/Projects"
import Contactpage from "./Pages/ContactMe/ContactMe";
import Experience from "./Pages/Experience/Experience";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contactpage/>
  },
  {
    path:"/projects",
    element:<Projects/>
  },
  {
    path:"/experience",
    element:<Experience/>
  }
 
]);

function App() {
  
  return <RouterProvider router={router} />;
}

export default App;