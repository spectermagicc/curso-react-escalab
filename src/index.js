import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter > { /* definición estricta para la carga y visualización de mi componenete prinicpal */} 
    <App />
    </BrowserRouter>,
    document.getElementById('root')
);