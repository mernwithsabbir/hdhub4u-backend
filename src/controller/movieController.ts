import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import {
  addMovieService,
  addMovieSliderService,
  deleteMovieService,
  deleteMovieSliderService,
  getAllMoviesService,
  getMovieListByCategoryService,
  getMovieListBySubCategoryService,
  getMovieSliderService,
  getSingleMovieDetailsService,
  getSingleMovieSliderService,
  updateMovieService,
  updateMovieSliderService,
} from "../service/movieService";
//! Role : Admin Functionality
export const addMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await addMovieService(req.body);
    res.status(200).json({
      success: true,
      message: "Movie Created Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const updateMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await updateMovieService(req.params?.id);

    res.status(200).json({
      success: true,
      message: "Movie Updated Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const deleteMovie = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteMovieService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Movie Delete Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const addMovieSlider = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await addMovieSliderService(req.body);
    res.status(200).json({
      success: true,
      message: "Movie Slider Added Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const updateMovieSlider = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await updateMovieSliderService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Movie Slider Updated Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const deleteMovieSlider = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await deleteMovieSliderService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Movie Slider Added Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const getSingleMovieSlider = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getSingleMovieSliderService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Single Movie Slider Fetch Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};

//? Role : User Functionality
export const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getAllMoviesService();
    res.status(200).json({
      success: true,
      message: "All Movie Fetch Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const getSingleMovieDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getSingleMovieDetailsService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Single Movie Details Fetch Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const getMovieListByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getMovieListByCategoryService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Movie List By Category Fetch Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const getMovieListBySubCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getMovieListBySubCategoryService(req.params?.id);
    res.status(200).json({
      success: true,
      message: "Movie List By Sub Category Fetch Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
export const getMovieSlider = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getMovieSliderService();

    res.status(200).json({
      success: true,
      message: "Movie Slider Fetch Successfully!",
    });
  } catch (error) {
    void error;
    next(createHttpError(400, "Field To Register User!"));
  }
};
