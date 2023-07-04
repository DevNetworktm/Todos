import { useEffect, useState } from "react";
import Todos from "../services/todos.jsx";

// styles
import "./styles/Home.scss";
import { Check, CloudPlus } from "react-bootstrap-icons";
import Todo from "../components/todo.jsx";

// icons


function Home(){
    const [ add, setAdd ] = useState({
        status: "none",
        content: ""
    });
    const [ todos, setTodos ] = useState([]);

    useEffect(() => {
        (async _ => {
            setTodos(await Todos.GetAll());
        })()
    }, [])

    async function handleClick(){
        if ( add.status === "active" && add.content !== "" ) {
            setAdd({ status: "onPush", content: add.content })
            await Todos.Create(add.content);
            setTodos(await Todos.GetAll());
            setAdd({ status: "none", content: "" })
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
            <section className="container">
                <article>
                    <div className={ "Add" }>
                        <textarea disabled={ add.status === "onPush" }
                                  className={ `text ${ add.status === "onPush" ? "push" : null }` }
                                  onChange={ (e) => setAdd({ status: add.status, content: e.target.value }) }
                                  data-active={ add.status === "onPush" || add.status === "active" }
                                  value={ add.content }></textarea>
                        <button onClick={ handleClick }
                                className={ `btn ${ add.status === "onPush" ? "push" : null } ${ add.status === "active" && add.content === "" ? 'notValid' : "" }` }>
                            {
                                ButtonState()
                            }
                        </button>
                    </div>
                    <div className="todos">
                        {
                            todos.map(el => <Todo key={ el._id } _id={ el._id } message={ el.message }
                                                  finish={ el.finish }
                                                  created_at={ el.created_at } time={ el.time } setTodos={ setTodos }/>)
                        }
                    </div>
                </article>
            </section>
        </>
    )
}

export default Home