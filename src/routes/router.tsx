import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import LoginForm from "../components/login/LoginForm";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]

export const appRoutes = createBrowserRouter(routes);
