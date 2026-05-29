import { Router } from "express";
import {validate,movieValidationRules} from '../middleware/validator.js'
import {
  getAllMovies,
  getOneMovie,
  addMovie,
  editMovie,
  deleteMovie,
} from "../controllers/movies.js";
import {isAthenicated} from '../middleware/authenticate.js'

const movieRoutes = Router();

movieRoutes.get("/", getAllMovies);
movieRoutes.get("/:id", getOneMovie);
movieRoutes.post("/",isAthenicated, movieValidationRules(),validate,addMovie);
movieRoutes.put("/:id",isAthenicated,movieValidationRules(),validate, editMovie);
movieRoutes.delete("/:id", isAthenicated, deleteMovie);

export { movieRoutes };
