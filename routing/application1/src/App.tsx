import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "@/routes/Root/Root";
import { HomePage } from "@/routes/Home/Home";
import { ProductsPage } from "@/routes/Products/Products";
import { ErrorPage } from "@routes/Error/Error";
import { ProductDetailsPage } from "@routes/Products/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailsPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
