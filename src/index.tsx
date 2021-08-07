import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";

let posts = [
    {id: 1, message: "How are you?", likesCount: 19},
    {id: 2, message: "Where have you been?", likesCount: 3},
    {id: 3, message: "Pics from our party yesterday", likesCount: 8},
    {id: 4, message: "How important is to be proactive?", likesCount: 27},
    {id: 5, message: "What are your goals for today, for this week?", likesCount: 54},
]
let dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Victor"},
    {id: 3, name: "Bob"},
    {id: 4, name: "John"},
    {id: 5, name: "Anna"},
    {id: 6, name: "Dennis"},
]
let messages = [
    {id: 1, message: "How are you?"},
    {id: 2, message: "Are you busy now?"},
    {id: 3, message: "Today I have a party:)"},
    {id: 4, message: "Can you help me with code review today?"},
    {id: 5, message: "Are you going to gim today?"},
]
ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
