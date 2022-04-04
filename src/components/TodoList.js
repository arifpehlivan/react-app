import TodoItem from "./TodoItem"

const TodoList=(props) => {
    return (
        <>
            <ul>
                {
                    props.items.map((item,index)=>
                        <TodoItem deleteItem={props.deleteItem} key={index} item={item}/>
                    )
                }
            </ul>
            <p>
                <button onClick={props.clearItems}>Clear Items</button>
            </p> 
        </> 
    )
}

export default TodoList