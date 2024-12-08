import Schema from "async-validator";
import { NextFunction, Request, Response } from "express";
import { HttpCode } from "../helpers";

/* Resource create validator */
const createUpdate = async (req: Request, res: Response, next: NextFunction) => {
  const descriptor = <any>{
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
  };

  /* Execute the validator */
  const validator = new Schema(descriptor);

  validator.validate({ ...req.body }, (errors: any) => {
    if (errors) {
      return res.status(HttpCode.REQUIRED).json({
        status: false,
        errors,
      });
    }
    next();
  });
};

export const todoValidators = {
  createUpdate,
};
