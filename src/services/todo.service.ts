import { db } from "../config/db.config";
import { ITodo } from "../models/todo.model";

/** Get list of resources */
const getAllTodo = async (): Promise<ITodo[] | unknown[]> => {
  return db.prepare("SELECT * FROM todos").all();
};

/** Get specific resource */
const getTodoById = async (id: number): Promise<ITodo | unknown> => {
  return db.prepare("SELECT * FROM todos WHERE id = ?").get(id);
};

/** Create new todo */
const createTodo = async (data: ITodo): Promise<ITodo> => {
  const { lastInsertRowid } = db
    .prepare("INSERT INTO todos (name, description) VALUES (?, ?)")
    .run(data.name, data.description);

  return { id: lastInsertRowid, ...data };
};

/** Update specific todo */
const updateTodo = async ({
  id,
  data,
}: {
  id: number | BigInteger;
  data: ITodo;
}): Promise<ITodo> => {
  const { lastInsertRowid } = db
    .prepare("UPDATE todos SET name=?, description=? WHERE id=?")
    .run(data.name, data.description, id);

  return { id: lastInsertRowid, ...data };
};

/** Destroy specific todo */
const destroyTodo = async (
  id: number | BigInteger
): Promise<ITodo | unknown> => {
  return db.prepare("DELETE FROM todos WHERE id=?").run(id);
};

export const todoService = {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodo,
  destroyTodo,
};
