import { Router } from "express";
import { todoRouters } from "./todo.routes";

export const adminRouter: Router = Router();

adminRouter.use("/", todoRouters);
