import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: "How are you?", likesCount: 19},
    {id: 2, message: "Where have you been?", likesCount: 3},
    {id: 3, message: "Pics from our party yesterday", likesCount: 8},
    {id: 4, message: "How important is to be proactive?", likesCount: 27},
    {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
]
ReactDOM.render(

    <App posts={posts}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
