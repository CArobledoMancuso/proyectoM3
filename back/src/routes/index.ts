import userRouter from "./userRoutes";
import appointmentRouter from "./appointmentRoutes";
import { Router } from "express";

const indexRouter: Router = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/appointments", appointmentRouter);

export default indexRouter;
