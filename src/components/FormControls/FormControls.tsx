import React from 'react';
import s from './FormControls.module.css'

type FormControlsPropsType={
    input:any
    meta:any
    children:any
}
const FormControl: React.FC<FormControlsPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<any> = (props:any) => {
    const {input,meta,...restProps}=props
    return <FormControl {...props}>
        <textarea {...input} {...restProps}/>
    </FormControl>
};

export const Input: React.FC<any> = (props:any) => {
    const {input,meta,...restProps}=props
    return <FormControl {...props}>
        <input {...input} {...restProps} className={s.input}/>
    </FormControl>
};


