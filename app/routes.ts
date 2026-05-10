import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("register-rider", "routes/registerRider.tsx"),
  route("register-shop", "routes/registerShop.tsx"),
] satisfies RouteConfig;
