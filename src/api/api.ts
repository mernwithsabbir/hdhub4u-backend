import express from "express";
import authRouter from "./authRouter";
// import categoryRouter from "./categoryController";
// import cdRouter from "./cdRouter";
// import movieRouter from "./movieRouter";
import userRouter from "./userRouter";

const apiRouter = express.Router();

// Authentication Router
apiRouter.use("/api/v1/auth", authRouter);
apiRouter.use("/api/v1", userRouter);
// apiRouter.use("/api/v1", categoryRouter);
// apiRouter.use("/api/v1", cdRouter);
// apiRouter.use("/api/v1", movieRouter);

export default apiRouter;
