// import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

var app = {
    title: "Todo App",
    desc: "Lorem",
    items: []
}

const onFormSubmit=(event)=> {
    event.preventDefault();
    var item = event.target.elements.txtItem.value;
    if (item) {
        app.items.push(item);
        render();
    }
    event.target.txtItem.value = "";
    
}

const clearItems=()=>{
    app.items=[];
    render();
}

const render=()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            <div>{app.desc}</div>
            <ul>
                {
                    app.items.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <p>
                <button onClick={clearItems}>Clear Items</button>
            </p>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="txtItem" />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
    
    root.render(template);
}

render()