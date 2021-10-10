import {SidebarType} from "./store";

let initialState={
    friends: [
        {
            id: 1,
            name: "Bob",
            img: "https://images.unsplash.com/photo-1600603955656-e3c9e1ad7f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            isOnline: true
        },
        {
            id: 2,
            name: "Kate",
            img: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            isOnline: false
        },
        {
            id: 3,
            name: "John",
            img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
            isOnline: true
        },

    ]
}
const sidebarReducer=(state:SidebarType=initialState, action:any)=>{
    return state
}

export  default  sidebarReducer