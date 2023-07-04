import { useEffect, useState } from "react";
import Todos from "../services/todos.jsx";

// styles
import "./styles/Home.scss";
import { Check, CloudPlus } from "react-bootstrap-icons";

// icons


function Home(){
    const [ add, setAdd ] = useState({
        status: "none",
        content: ""
    });
    const [ todos, setTodos ] = useState();

    useEffect(() => {
        (async _ => {
            setTodos(await Todos.GetAll());
        })()
    }, [])

    function handleClick(){
        if ( add.status === "active" ) {
            setAdd({ status: "onPush", content: add.content })
        } else {
            setAdd({ status: "active", content: "" })
        }
    }

    function ButtonState(){
        switch ( add.status ) {
            case "none":
                return <CloudPlus/>;
            case "active":
                return <Check/>
            case "onPush":
                return (
                    <div className={ "loading" }>
                        <div className="lds-ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                )
        }
    }

    return (
        <>
            <div className={ "Add" }>
                <button onClick={ handleClick } className={ "btn" }>
                    {
                        ButtonState()
                    }
                </button>
                { add.status === "active" || add.status === "onPush"
                    ?
                    <textarea disabled={ add.status === "onPush" } className={ "text" }
                              onChange={ (e) => setAdd({ status: add.status, content: e.target.value }) }
                              data-active={ add.status } value={ add.content }></textarea>
                    : null
                }
            </div>
        </>
    )
}

export default Home