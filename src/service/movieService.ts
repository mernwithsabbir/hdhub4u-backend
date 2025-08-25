import { IMovie } from "../model/movieModel";
import { ITopSlider } from "../model/sliderModel";

//! Role : Admin Functionality
export const addMovieService = async (data: Partial<IMovie>) => {
  try {
    return data;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Create Movie!");
  }
};
export const updateMovieService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Update Movie!");
  }
};
export const deleteMovieService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Delete Movie!");
  }
};
export const addMovieSliderService = async (data: Partial<ITopSlider>) => {
  try {
    return data;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Create Slider!");
  }
};
export const updateMovieSliderService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Update Slider!");
  }
};
export const deleteMovieSliderService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Delete Slider!");
  }
};
export const getSingleMovieSliderService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Single Slider!");
  }
};
//? Role : User Functionality
export const getAllMoviesService = async () => {
  try {
    return true;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Movie List!");
  }
};
export const getSingleMovieDetailsService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Single Movie!");
  }
};
export const getMovieListByCategoryService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Movie List By Category!");
  }
};
export const getMovieListBySubCategoryService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Movie List By Sub Category!");
  }
};
export const getMovieSliderService = async () => {
  try {
    return true;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Fetch Movie Sliders!");
  }
};
