import { getUserModel } from "../data/db.js";
import { ObjectId } from "mongodb";

async function getAllUsers(req, res, next) {
    /* #swagger.tags=['User'] */
  try {
    const userModel = await getUserModel();
    const allUsers = await userModel.find();

    res.json(allUsers);
  } catch (err) {
    next(err);
  }
}

async function getOneUser(req, res, next) {
    /* #swagger.tags=['User'] */
  try {
    const user_id = req.params.id;
    const userModel = await getUserModel();

    const query = { _id: new ObjectId(user_id) };
    const user = await userModel.findOne(query);

    res.json(user);
  } catch (err) {
    next(err);
  }
}

async function addUser(req, res, next) {
    /* #swagger.tags=['User'] */
  try {
    const userModel = await  getUserModel();
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      favoriteGenre: req.body.favoriteGenre,
      dateJoined: req.body.dateJoined,
      isActive: req.body.isActive,
      watchlistCount: req.body.watchlistCount,
    };

    const response = await userModel.create(user);

    if (response && response._id) {
      res.status(201).send();
    } else {
      res
        .status(500)
        .json({error: "Some error occured while creating user"});
    }
  } catch (err) {
    next(err);
  }
}

async function editUser(req, res, next) {
    /* #swagger.tags=['User'] */
  const userId = new ObjectId(req.params.id);
  try {
    const userModel = await getUserModel();
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      favoriteGenre: req.body.favoriteGenre,
      dateJoined: req.body.dateJoined,
      isActive: req.body.isActive,
      watchlistCount: req.body.watchlistCount,
    };

    const response = await userModel.replaceOne({ _id: userId }, user);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(Response.error || "Some error occured while creating user");
    }
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
        /* #swagger.tags=['User'] */
  try {
    const userId = new ObjectId(req.params.id);

    const userModel = await getUserModel();

    const response = await userModel.deleteOne({ _id: userId });

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(Response.error || "Some error occured while creating user");
    }
  } catch (err) {
    next(err);
  }
}

export { getAllUsers, getOneUser, addUser, editUser, deleteUser };
