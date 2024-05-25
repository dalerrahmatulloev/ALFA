import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Film, Home, Layout } from "./routes/routes";
import { Suspense } from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={<div className="">Loading</div>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div className="">Loading</div>}>
              <Home />
            </Suspense>
          )
        },
        {
          path: '/film/:id',
          element: (
            <Suspense fallback={<div className="">Loading</div>}>
              <Film />
            </Suspense>
          )
        }
      ]
    },
  ]);
  return <RouterProvider router={router} />
}

export default App;
