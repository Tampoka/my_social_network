import React, {ComponentType} from "react";
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

type MapStateToPropsForRedirect={
    isAuth:boolean
}

let mapStateToPropsForRedirect = (state:AppStateType):MapStateToPropsForRedirect => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent=(props: MapStateToPropsForRedirect)=> {
        debugger
        let {isAuth,...restProps}=props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}

