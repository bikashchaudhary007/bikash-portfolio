import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import { AskMe } from "./pages/AskMe";
import SignInPage from "./pages/SignInPage";

const myRouter = createBrowserRouter([
  { path: "/", Component: Homepage },
  { path: "askMe", Component: AskMe },
  { path: "signInPage", Component: SignInPage },
]);

const App = () => {
  return <RouterProvider router={myRouter} />;
};

export default App;
