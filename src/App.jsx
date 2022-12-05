import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import RootLayout from "./routes/RootLayout";
import Products from "./routes/Products";
import DetailItem, {loader as DetailLoader} from "./routes/DetailItem";
import HomePage from "./routes/HomePage";

const queryClient  = new QueryClient();

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
]);

function App() {
  return( 
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />  
    </QueryClientProvider>
  )
}

export default App;
