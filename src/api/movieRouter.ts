import express from "express";

import {
  addMovieSlider,
  addMovie,
  deleteMovie,
  deleteMovieSlider,
  getAllMovies,
  getMovieListByCategory,
  getMovieListBySubCategory,
  getMovieSlider,
  getSingleMovieDetails,
  getSingleMovieSlider,
  updateMovie,
  updateMovieSlider,
} from "../controller/movieController";

const movieRouter = express.Router();

//! Role : Admin Managed Routes
movieRouter.post("/addMovie", addMovie);
movieRouter.put("/updateMovie/:id", updateMovie);
movieRouter.delete("/deleteMovie/:id", deleteMovie);
movieRouter.post("/addMovieSlider", addMovieSlider);
movieRouter.put("/updateMovieSlider/:id", updateMovieSlider);
movieRouter.delete("/deleteMovieSlider/:id", deleteMovieSlider);
movieRouter.get("/getSingleMovieSlider/:id", getSingleMovieSlider);

//? Role : User Managed Routes
movieRouter.get("/getAllMovies", getAllMovies);
movieRouter.get("/getSingleMovieDetails", getSingleMovieDetails);
movieRouter.get("/getMovieListByCategory", getMovieListByCategory);
movieRouter.get("/getMovieListBySubCategory", getMovieListBySubCategory);
movieRouter.get("/getMovieSlider", getMovieSlider);

export default movieRouter;
