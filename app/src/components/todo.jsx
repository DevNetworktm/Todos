import CheckBox from "./checked.jsx";
import { useEffect, useState } from "react";

//styles
import "./styles/todo.scss"
import moment from "moment";
import { Trash3Fill } from "react-bootstrap-icons";
import Todos from "../services/todos.jsx";

function Todo({ _id, message, finish, created_at, time, setTodos }){
    const [ isFinish, setIsFinish ] = useState(finish);
    const [ Time, setTime ] = useState(time);
    const [ int, setInt ] = useState();

    useEffect(() => {
        const inter = setInterval(() => {
            setTime(moment(parseInt(created_at)).fromNow())
        }, 60000)

        setInt(inter)
    }, [])

    async function handClick(){
        Todos.Delete(_id);
        clearInterval(int)
        setTodos(prev => prev.filter(el => el._id !== _id))
    }

    return (
        <div id={ _id } className={ "todo" }>

            <CheckBox active={ isFinish } setActive={ setIsFinish } id={ _id }/>
            <h3>{ message }</h3>
            <p>• { Time }</p>
            <div onClick={ handClick }>
                <Trash3Fill color={ "#b93131" }/>
            </div>
        </div>
    )
}

export default Todo