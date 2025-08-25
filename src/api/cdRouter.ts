import express from "express";
import {
  addCountryCode,
  deleteCountryCode,
  getCountryCodeList,
  getSingleCountryCode,
  updateCountryCode,
} from "../controller/countryCodeController";

const cdRouter = express.Router();

//! Role : Admin Managed Routes
cdRouter.post("/addCountryCode", addCountryCode);
cdRouter.put("/updateCountryCode/:id", updateCountryCode);
cdRouter.delete("/deleteCountryCode/:id", deleteCountryCode);
cdRouter.get("/getSingleCountryCode/:id", getSingleCountryCode);

//? Role : User Managed Routes
cdRouter.get("/getCountryCodeList", getCountryCodeList);
export default cdRouter;
