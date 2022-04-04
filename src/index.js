import React from "react";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        this.clearItems=this.clearItems.bind(this);
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.state={
            items: ["Item 1"]
        }
    }

    componentDidMount(){
        console.log("Component created");
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component updated");
    }

    componentWillUnmount(){
        console.log("Component deleted");
    }

    deleteItem(item){
        this.setState((prevState)=>{
            const arr=prevState.items.filter((i)=>{
                return item !==i
            })
            return {
                items:arr
            }
        })
    }
    clearItems(){
        this.setState({
            items:[]
        })
    }
    addItem(item){
        if(!item){
            return "Add item";
        }else if(this.state.items.indexOf(item)>-1){
            return "Cannot add the same element"
        }
        this.setState((prevState)=>{
            return {items: prevState.items.concat(item)}
        })
    }
    render(){
        const app = {
            title: "Todo App",
            desc: "Lorem",
        }
        return(
            <>
                <Header title={app.title} desc={app.desc}/>
                <TodoList items={this.state.items} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
                <Action addItem={this.addItem}/>
            </>
        )
    }
}

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
            <>
               <ul>
                {
                    this.props.items.map((item,index)=>
                        <TodoItem deleteItem={this.props.deleteItem} key={index} item={item}/>
                    )
                }
                </ul>
                <p>
                    <button onClick={this.props.clearItems}>Clear Items</button>
                </p> 
            </>
            
        )
    }
}

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.deleteItem=this.deleteItem.bind(this)
    }
    deleteItem(){
        this.props.deleteItem(this.props.item)
        
    }
    render(){
        return(
            <>
                <li>
                    {this.props.item}
                    <button onClick={this.deleteItem}>X</button>
                </li>
            </>
        )
    }
}

class Action extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit=this.onFormSubmit.bind(this);
        this.state={
            err:""
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        const item=e.target.txtItem.value.trim();
        const err=this.props.addItem(item);
        this.setState({
            err:err
        })
        e.target.txtItem.value="";
    }
    render() {
        return (
            <>
            {this.state.err && <p>{this.state.err}</p>}
             <form onSubmit={this.onFormSubmit}>
                 <input type="text" name="txtItem" />
                 <button type="submit">Add Item</button>
             </form>
            </>
        )
    }
}



root.render(<TodoApp/>);
