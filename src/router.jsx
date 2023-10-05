import {
  createBrowserRouter,
} from "react-router-dom"

import Home from './pages/Home.jsx'
import BookPage from "./pages/BookPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/books/:id",
    element: <BookPage />,
  },
]);

export default router