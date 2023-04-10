import { Routes as RoutesList, Route } from "react-router-dom";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return (
    <RoutesList>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </RoutesList>
  );
}
