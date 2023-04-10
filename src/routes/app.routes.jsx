import { Routes as RoutesList, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { NewMovie } from "../pages/NewMovie";
import { MoviePreview } from "../pages/MoviePreview";

export function AppRoutes() {
  return (
    <RoutesList>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newmovie" element={<NewMovie />} />
      <Route path="/moviepreview/:id" element={<MoviePreview />} />
    </RoutesList>
  );
}
