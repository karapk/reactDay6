import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignIn from './pages/SignIn';
import Layout from './components/Layout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Wiki from './pages/Wiki';
import Pokemon from './pages/Pokemon';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "pokemon/:pokemonID", element: <Pokemon /> },
      { path: "wiki", element: <Wiki /> },
    ]
  },
  {
    path: "/",
    element: <SignIn />, 
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
