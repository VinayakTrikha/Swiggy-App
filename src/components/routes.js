import Login from "./Login";
import AuthGuard from "./AuthGuard";
import AppLayout from "./AppLayout";
import Body from "./Body";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Grocery = lazy(() => import("./Grocery"));
const RestaurantMenu = lazy(() => import("./RestaurantMenu"));
const Cart = lazy(() => import("./Cart"));
const NotFound = lazy(() => import("./NotFound"));

export const appRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AuthGuard />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          {
            path: "/",
            element: <Body />,
          },
          {
            path: "/about",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <About />
              </Suspense>
            ),
          },
          {
            path: "/contact",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <Contact />
              </Suspense>
            ),
          },
          {
            path: "/grocery",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <Grocery />
              </Suspense>
            ),
          },
          {
            path: "/restaurants/:resId",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <RestaurantMenu />
              </Suspense>
            ),
          },
          {
            path: "/cart",
            element: (
              <Suspense fallback={<h1>Loading....</h1>}>
                <Cart />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
