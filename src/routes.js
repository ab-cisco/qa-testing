import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";

let routes = [
  {
    path: "/index",
    name: "Панель информации",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Карты",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Мой профиль",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
];
export default routes;
