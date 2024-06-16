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
import NotFound from "./pages/NotFound/NotFound";
import Privacy from "./pages/Privacy/Privacy";


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
          path: "projects/:slug",
          element: <Project />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "privacy",
          element: <Privacy />
        },
        {
          path: "*",
          element: <NotFound />
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
