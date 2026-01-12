import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from"./Pages/About/About";
import ContactMe from "./Components/ContactMe/Contactme";
import Projects from "./Pages/Projects/Projects"


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
    element:<ContactMe/>
  },
  {
    path:"/projects",
    element:<Projects/>
  }
 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
