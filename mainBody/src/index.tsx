import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';


const appBox: any = document.querySelector('#root');
const root = ReactDOM.createRoot(appBox);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
