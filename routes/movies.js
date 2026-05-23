import { Router } from "express";
import {
  getAllMovies,
  getOneMovie,
  addMovie,
  editMovie,
  deleteMovie,
} from "../controllers/movies.js";

const movieRoutes = Router();

movieRoutes.get("/", getAllMovies);
movieRoutes.get("/:id", getOneMovie);
movieRoutes.post("/", addMovie);
movieRoutes.put("/:id", editMovie);
movieRoutes.delete("/:id", deleteMovie);

export { movieRoutes };
