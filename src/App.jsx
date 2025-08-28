import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import { AskMe } from "./pages/AskMe";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";

const myRouter = createBrowserRouter([
  { path: "/", Component: Homepage },
  { path: "askMe", Component: AskMe },
  { path: "signInPage", Component: SignInPage },
  { path: "signUpPage", Component: SignUpPage },
  { path: "dashboard", Component: Dashboard },
]);

const App = () => {
  return <RouterProvider router={myRouter} />;
};

export default App;
