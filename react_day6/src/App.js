import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import Layout from './components/Layout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      // { path: "pokemon/:pokemonID", element: <Pokemon /> },
      // { path: "wiki", element: <Wiki /> },
    ]
  },
  {
    path: "/",
    element: <SignIn />, 
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
