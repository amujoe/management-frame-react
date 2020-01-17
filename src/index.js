/*
 * @Author: amujoe
 * @Date: 1985-10-26 16:15:00
 * @Description: file content
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Router from './routes/router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
