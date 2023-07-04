import {Router} from "express";
import {IndexGetAllTodos} from "../controllers";

const indexRoute = Router();

indexRoute.get("/", IndexGetAllTodos);

export default indexRoute;