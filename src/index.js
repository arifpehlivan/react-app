// import App from './App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

var app = {
    title: "Todo App",
    desc: "Lorem",
    items: []
}

function onFormSubmit(event) {
    event.preventDefault();
    var item = event.target.elements.txtItem.value;
    if (item) {
        app.items.push(item);
        render();
    }
    event.target.txtItem.value = "";
    
}

function clearItems(){
    app.items=[];
    render();
}

function render(){
    const template = (
        <div>
            <h1>{app.title}</h1>
            <div>{app.desc}</div>
            <ul>
                {
                    app.items.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
            <button onClick={clearItems}>Clear Items</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="txtItem" />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
    
    root.render(template);
}

render()