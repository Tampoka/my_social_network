import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

/*
********* class component *********
export const withAuthRedirect=(Component:any)=>{
    class RedirectComponent extends React.Component<any, any>{
        render(){
            if(!this.props.isAuth) return <Redirect to= {"/login"}/>
                return <Component {...this.props}/>
        }
    }
    return RedirectComponent
}*/

let mapStateToPropsForRedirect = (state:AppStateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent=(props: any)=> {
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props}/>
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}

