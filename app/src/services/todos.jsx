import Axios from "axios";

import "./api.jsx";
import moment from "moment";

class Todos {
    async GetAll(){
        const todos = await Axios.get('/');
        todos.sort((a, b) => b.created_at + a.created_at)
        for ( let todo of todos ) {
            todo[ "time" ] = moment(parseInt(todo.created_at)).fromNow()
        }

        return todos
    }

    async Create(message){
        const todo = await Axios.post("/", { message });
        return todo
    }

    async Delete(id){
        await Axios.delete(`/${ id }`);

    }

    async ChangeFinish(id, finish){
        await Axios.put(`/${ id }/toggle?finish=${ finish }`)
    }
}

export default new Todos();