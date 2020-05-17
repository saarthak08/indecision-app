import { hot } from "react-hot-loader/root";
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './style.css';





const render = (Component) =>
    ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

render(hot(IndecisionApp));