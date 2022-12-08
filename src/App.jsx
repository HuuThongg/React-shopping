import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AccountMain } from "./components";
import RootLayout from "./routes/RootLayout";
import Products from "./routes/Products";
import DetailItem, { loader as DetailLoader } from "./routes/DetailItem";
import HomePage from "./routes/HomePage";
import RootLayout_Cart from "./routes/RootLayout_Cart";
import CartRoot from "./routes/CartRoot";
import RootLayout_wishLists from "./routes/RootLayout_wishLists";
import WishListsPage from "./routes/WishListsPage";
const queryClient = new QueryClient();

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
        path: "/products/:productId",
        element: <DetailItem />,
        loader: DetailLoader(queryClient),
      },
    ],
  },
  {
    path: "/cart",
    element: <RootLayout_Cart />,
    children: [
      {
        index: true,
        element: <CartRoot />,
      },
    ],
  },
  {
    path: "/wishlists",
    element: <RootLayout_wishLists />,
    children: [
      {
        index: true,
        element: <WishListsPage />,
      },
    ],
  },
  {
    path: "/my-account",
    element: < RootLayout/>,
    children:[
      {
        index:true,
        element: <AccountMain/>
      }
    ]
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
