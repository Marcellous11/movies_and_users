import { Router } from "express";
import {validate, userValidationRules} from './validator.js'
import {
  getAllUsers,
  getOneUser,
  addUser,
  editUser,
  deleteUser,
} from "../controllers/users.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.get("/:id", getOneUser);
userRoutes.post("/",userValidationRules(),validate, addUser);
userRoutes.put("/:id", userValidationRules(),validate,editUser);
userRoutes.delete("/:id", deleteUser);

export { userRoutes };
