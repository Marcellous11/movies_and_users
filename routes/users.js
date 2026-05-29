import { Router } from "express";
import {validate, userValidationRules} from '../middleware/validator.js'
import {
  getAllUsers,
  getOneUser,
  addUser,
  editUser,
  deleteUser,
} from "../controllers/users.js";
import {isAthenicated} from '../middleware/authenticate.js'

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:id", getOneUser);
userRoutes.post("/",isAthenicated,userValidationRules(),validate, addUser);
userRoutes.put("/:id", isAthenicated,userValidationRules(),validate,editUser);
userRoutes.delete("/:id",isAthenicated, deleteUser);

export { userRoutes };
