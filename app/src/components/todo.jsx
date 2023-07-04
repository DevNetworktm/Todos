import CheckBox from "./checked.jsx";
import { useEffect, useState } from "react";

//styles
import "./styles/todo.scss"
import moment from "moment";

function Todo({ _id, message, finish, created_at, time }){
    const [ isFinish, setIsFinish ] = useState(finish)
    const [ Time, setTime ] = useState(time)

    useEffect(() => {
        setInterval(() => {
            setTime(moment(parseInt(created_at)).fromNow())
        }, 60000)
    }, [])

    return (
        <div id={ _id } className={ "todo" }>
            <CheckBox active={ isFinish } setActive={ setIsFinish }/>
            <h3>{ message }</h3>
            <p>• { Time }</p>
        </div>
    )
}

export default Todo