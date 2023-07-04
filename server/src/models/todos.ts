import { Schema, model } from "mongoose";

interface ITodos {
    message: string,
    finish: boolean,
    created_at: string,
}

const Todos = new Schema<ITodos>({
    message: String,
    finish: Boolean,
    created_at: String,
});

export default model<ITodos>("Todos", Todos);