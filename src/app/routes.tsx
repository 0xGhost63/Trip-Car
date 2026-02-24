import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { CarList } from "./pages/CarList";
import { CarDetails } from "./pages/CarDetails";
import { Driver } from "./pages/Driver";
import { Blog } from "./pages/Blog";
import { SinglePost } from "./pages/SinglePost";
import { HelpCenter } from "./pages/HelpCenter";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import { Booking } from "./pages/Booking";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/home",
    Component: Root,
    children: [
      { index: true, Component: Homepage },
      { path: "about", Component: About },
      { path: "cars", Component: CarList },
      { path: "cars/:id", Component: CarDetails },
      { path: "cars/:id/book", Component: Booking },

      { path: "driver", Component: Driver },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: SinglePost },
      { path: "help", Component: HelpCenter },
      { path: "contact", Component: Contact },
      { path: "terms", Component: Terms },
      { path: "privacy", Component: Privacy },
      { path: "*", Component: NotFound },
    ],
  },
]);