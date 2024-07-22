import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Packages from "./pages/Packages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "/packages", element: <Packages /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
