import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { addToken } from "./utils/authSlice";
import { appRoutes as Routes } from "./components/routes";

const App = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage.getItem("authToken"))
      dispatch(addToken({ token: sessionStorage.getItem("authToken") }));
  }, []);

  return <>{children}</>;
};

const appRouter = createBrowserRouter(Routes);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <App />
    <RouterProvider router={appRouter} />
  </Provider>
);
