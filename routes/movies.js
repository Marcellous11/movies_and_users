import { Router } from "express";
import {validate,movieValidationRules} from './validator.js'
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
movieRoutes.post("/", movieValidationRules(),validate,addMovie);
movieRoutes.put("/:id",movieValidationRules(),validate, editMovie);
movieRoutes.delete("/:id", deleteMovie);

export { movieRoutes };
