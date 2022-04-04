const TodoItem = (props) => {
    return(
        <>
            <li className="list-group-item">
                {props.item}
                <button className="btn btn-danger btn-sm float-end" onClick={()=>{props.deleteItem(props.item)}}>X</button>
            </li>
        </>
    )
    
}

export default TodoItem