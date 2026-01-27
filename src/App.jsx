import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contactpage from "./Pages/ContactMe/ContactMe";
import Experience from "./Pages/Experience/Experience";
import Header from "./Common/Header/Header";
import { ThemeProvider } from "./ThemeContext/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contactpage />
      </>
    ),
  },
  {
    path: "/projects",
    element: (
      <>
        <Header />
        <Projects />
      </>
    ),
  },
  {
    path: "/experience",
    element: (
      <>
        <Header />
        <Experience />
      </>
    ),
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
