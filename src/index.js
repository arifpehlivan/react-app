import React from "react";
import { createRoot } from 'react-dom/client';
import TodoApp from "./components/TodoApp";
import "./styles/main.scss"

const container = document.getElementById('app');
const root = createRoot(container);



root.render(<TodoApp/>);

