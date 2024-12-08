import { Router } from "express";
import { adminRouter } from "./todo";

export const routers: Router = Router();

routers.use("/todos", adminRouter);
