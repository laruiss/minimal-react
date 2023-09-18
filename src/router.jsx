import {
  createBrowserRouter,
} from "react-router-dom"

import Home from './pages/Home.jsx'
import BookPage from "./pages/BookPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/:id",
    element: <BookPage />,
  },
]);

export default router