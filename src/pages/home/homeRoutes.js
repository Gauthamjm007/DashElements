import Home from "./container/Home";
import pageLayoutHoc from "../../hocs/pageLayoutHoc";
export const homeRoutes = [
  {
    path: ["/"],
    component: pageLayoutHoc(Home, {}),
    key: "home",
  },
];
