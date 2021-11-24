import React from 'react';
import s from './FormControls.module.css'
import {Field} from "redux-form";

type FormControlsPropsType = {
    input: any
    meta: any
    children: any
}
const FormControl: React.FC<FormControlsPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<any> = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
};

export const Input: React.FC<any> = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
        <input {...input} {...restProps} className={s.input}/>
    </FormControl>
};


export const createField = (placeholder: string, name: string, component: any, validators: Array<any>, props = {}, text: string = "", wrapperClass: any = null, fieldClass: any = null) =>
    <div className={wrapperClass}>
        <Field placeholder={placeholder}
               name={name}
               component={component}
               validate={validators}
               {...props}
               className={fieldClass}/>
        {text}
    </div>


