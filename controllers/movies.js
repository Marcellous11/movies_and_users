import { getMovieModel } from "../data/db.js";
import {ObjectId} from 'mongodb'

async function getAllMovies(req,res,next){
/* #swagger.tags=['Movies'] */
  try {
    const movieModel = await getMovieModel();
    const allMovies = await movieModel.find();

    res.json(allMovies);
  } catch (err) {
    next(err);
  }
};

async function getOneMovie(req,res,next){
/* #swagger.tags=['Movies'] */
  try {
    const movie_id = req.params.id;
    const movieModel = await getMovieModel();

    const query = { _id: new ObjectId(movie_id) };
    const movie = await movieModel.findOne(query);

    res.json(movie);
  } catch (err) {
    next(err);
  }
};

async function addMovie(req,res,next){
/* #swagger.tags=['Movies'] */
  try {
    const movieModel = await getMovieModel();
    const movie = {
      title: req.body.title,
      director: req.body.director,
      releaseYear: req.body.releaseYear,
      genre: req.body.genre,
      runtimeMinutes: req.body.runtimeMinutes,
      rating: req.body.rating,
      imdbScore: req.body.imdbScore,
      inTheaters: req.body.inTheaters,
    };

    const response = await movieModel.create(movie);

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
};

async function editMovie(req,res,next){
/* #swagger.tags=['Movies'] */
const movieId = new ObjectId(req.params.id);
  try {
    const movieModel = await getMovieModel();
    const movie = {
      title: req.body.title,
      director: req.body.director,
      releaseYear: req.body.releaseYear,
      genre: req.body.genre,
      runtimeMinutes: req.body.runtimeMinutes,
      rating: req.body.rating,
      imdbScore: req.body.imdbScore,
      inTheaters: req.body.inTheaters,
    };

    const response = await movieModel.replaceOne({ _id: movieId }, movie);

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
};

async function deleteMovie(req,res,next){
/* #swagger.tags=['Movies'] */
try {
    const movieId = new ObjectId(req.params.id);

    const movieModel = await getMovieModel();

    const response = await movieModel.deleteOne({ _id: movieId });

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
};

export { getAllMovies, getOneMovie, addMovie, editMovie, deleteMovie };

