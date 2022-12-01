import {
  Navbar,
  BlackFriday,
  MainContent,
  Footer,
  MainShop,
  ProductDetail,
} from "./components";
import OverlayFilter from "./components/shop/OverlayFilter";

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Products from "./routes/Products";
import DetailItem from "./routes/DetailItem";
import HomePage from "./routes/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/products",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "detail",
        element: <DetailItem />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
