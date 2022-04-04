import React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


class TodoApp extends React.Component{
    render(){
        return(
            <>
                <Header/>
                <TodoList/>
                <Action/>
            </>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <>
                <h1>Todo App</h1>
                <div>Lorem, ipsum dolor.</div>
            </>
        )
    }
}

class TodoList extends React.Component{
    render(){
        return (
            <ul>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </ul>
        )
    }
}

class TodoItem extends React.Component{
    render(){
        return(
            <>
                <li>Item</li>
            </>
        )
    }
}

class Action extends React.Component{
    render() {
        return (
            <>
            <p>
                <button >Clear Items</button>
            </p>
             <form>
                 <input type="text" name="txtItem" />
                 <button type="submit">Add Item</button>
             </form>
            </>
        )
    }
}



root.render(<TodoApp/>);
