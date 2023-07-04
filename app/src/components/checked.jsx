import "./styles/checked.scss"

function CheckBox({ active, setActive }){
    return (
        <div onClick={ () => setActive( !active) } className={ "CustomCheckBox" } data-active={ active }>
            <div></div>
        </div>
    )
}

export default CheckBox