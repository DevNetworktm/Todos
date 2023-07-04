import { Schema } from "mongoose";

const Todos = new Schema({
    message: String,
    finish: Boolean,
    created_at: String,
});

export default Todos;