import Axios from "axios";
import moment from "moment";

import "./api.jsx";

class Todos {
    async GetAll(){
        const todos = await Axios.get('/');
        for ( const todo in todos ) {
            todo[ "created_at" ] = moment(todo.created_at).fromNow()
        }

        console.log(todos)
    }
}

export default new Todos();