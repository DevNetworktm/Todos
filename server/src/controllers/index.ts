import { Request, Response } from "express";
import Todos from "../models/todos";
import moment from "moment";

export const IndexGetAllTodos = async (req: Request, res: Response) => {
    const { filter } = req.query;

    let todos = [];

    if (filter) {
        switch (filter) {
            case "notFinish":
                todos = await Todos.find({ finish: false })
                break;
            case "finish":
                todos = await Todos.find({ finish: true })
        }
    } else {
        const todos = await Todos.find();
    }

    return res.status(200).json(todos);
}

export const IndexGetOne = async (req: Request, res: Response) => {
    const { id } = req.params;

    const todo = await Todos.findOne({ _id: id });

    return res.status(200).json(todo)
}

export const IndexCreateNewTodos = async (req: Request, res: Response) => {
    const { message } = req.body;
    const todo = new Todos({
        message,
        created_at: moment()
    }).save()

    return res.sendStatus(201)
}

export const IndexUpdateTodos = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { message } = req.body;

    const todo = await Todos.updateOne({ _id: id }, { message });
    if (todo.modifiedCount >= 0) {
        return res.sendStatus(200)
    } else {
        return res.sendStatus(400)
    }
}

export const IndexDeleteTodos = async (req: Request, res: Response) => {
    const { id } = req.params;

    const todo = await Todos.deleteOne({ _id: id });

    return res.sendStatus(204)
}