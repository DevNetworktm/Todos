import { Router } from "express";
import {
    IndexChangeVisibility,
    IndexCreateNewTodos,
    IndexDeleteTodos,
    IndexGetAllTodos,
    IndexGetOne,
    IndexUpdateTodos
} from "../controllers";

const indexRoute = Router();

indexRoute.get("/", IndexGetAllTodos);
indexRoute.get("/:id", IndexGetOne);

indexRoute.post("/", IndexCreateNewTodos);

indexRoute.put("/:id/toggle", IndexChangeVisibility)
indexRoute.put("/:id", IndexUpdateTodos);

indexRoute.delete("/:id", IndexDeleteTodos);

export default indexRoute;