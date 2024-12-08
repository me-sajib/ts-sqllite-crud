import { NextFunction, Request, Response } from "express";
import { HttpCode, HttpErrorResponse, HttpSuccessResponse } from "../helpers";
import { todoService } from "../services/todo.service";

/** list of resources */
export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await todoService.getAllTodo();

    res.status(HttpCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: "List of resources.",
        data: results || [],
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

/** store new resource */
export const store = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description } = req.body;
    const results = await todoService.createTodo({ name, description });

    res.status(HttpCode.CREATED).json(
      await HttpSuccessResponse({
        status: true,
        message: "Todo created.",
        data: results,
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

/** show specific resource */
export const show = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const result = await todoService.getTodoById(Number(id));

    res.status(HttpCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: "Todo information.",
        data: result || null,
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

/** update specific resource */
export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    /** Check available todo */
    const isAvailableTodo = await todoService.getTodoById(Number(id));
    if (!isAvailableTodo) {
      return res.status(404).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "todo",
              message: "Todo not found!",
            },
          ],
        })
      );
    }

    await todoService.updateTodo({
      id: Number(id),
      data: { name, description },
    });

    res.status(HttpCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: "Todo updated.",
        data: null,
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};

/** destroy specific resource */
export const destroy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    /** Check available todo */
    const isAvailableTodo = await todoService.getTodoById(Number(id));
    if (!isAvailableTodo) {
      return res.status(404).json(
        await HttpErrorResponse({
          status: false,
          errors: [
            {
              field: "todo",
              message: "Todo not found!",
            },
          ],
        })
      );
    }

    await todoService.destroyTodo(Number(id));

    res.status(HttpCode.OK).json(
      await HttpSuccessResponse({
        status: true,
        message: "Todo deleted.",
        data: null,
      })
    );
  } catch (error: any) {
    console.log(error);
    next(error);
  }
};
