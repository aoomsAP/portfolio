import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./index.css";

// components and pages
import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";

// contexts
import { SiteSettingsProvider } from "./contexts/SiteSettingsContext";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "projects/:project",
          element: <Project />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }
  ])

  return (
    <>
      <SiteSettingsProvider>
        <RouterProvider router={router} />
      </SiteSettingsProvider>
    </>
  )
}

export default App
