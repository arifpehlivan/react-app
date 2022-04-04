import TodoItem from "./TodoItem"

const TodoList=(props) => {
    return (
        <>
            <ul className="list-group">
                {
                    props.items.map((item,index)=>
                        <TodoItem deleteItem={props.deleteItem} key={index} item={item}/>
                    )
                }
            </ul>
            {
                props.items.length>0 
                ?
                <p>
                    <button className="btn btn-outline-danger float-end btn-sm mt-3" onClick={props.clearItems}>Clear Items</button>
                </p> 
                :
                <p className="alert alert-warning">
                    Add item to start
                </p>
            }
            
        </> 
    )
}

export default TodoList