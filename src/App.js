import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"
import Layout from "./components/Layout"
import NoPage from "./pages/NoPage";


function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NoPage />,
      children: routes
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
