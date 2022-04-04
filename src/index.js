import React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);


class TodoApp extends React.Component{
    render(){
        const app = {
            title: "Todo App",
            desc: "Lorem",
            items: ["Item 1"]
        }
        return(
            <>
                <Header title={app.title} desc={app.desc}/>
                <TodoList items={app.items}/>
                <Action/>
            </>
        )
    }
}

// const Header = function(props){
//     console.log(props);
//     return(
//         <>
//             <h1>{props.title}</h1>
//             <div>{props.desc}</div>
//         </>
//     )
// }

class Header extends React.Component{
    render(){
        return (
            <>
                <h1>{this.props.title}</h1>
                <div>{this.props.desc}</div>
            </>
        )
    }
}

class TodoList extends React.Component{
    render(){
        return (
            <ul>
                {
                    this.props.items.map((item,index)=>
                        <TodoItem key={index} item={item}/>
                    )
                }
            </ul>
        )
    }
}

class TodoItem extends React.Component{
    render(){
        return(
            <>
                <li>{this.props.item}</li>
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
