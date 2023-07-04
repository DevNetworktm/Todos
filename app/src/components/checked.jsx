import "./styles/checked.scss"
import Todos from "../services/todos.jsx";

function CheckBox({ active, setActive, id }){
    function handleClick(){
        setActive( !active);
        Todos.ChangeFinish(id, !active)
    }

    return (
        <div onClick={ handleClick } className={ "CustomCheckBox" } data-active={ active }>
            <div></div>
        </div>
    )
}

export default CheckBox