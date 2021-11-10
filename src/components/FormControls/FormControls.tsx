import React from 'react';
import s from './FormControls.module.css'

export const Textarea:React.FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

export const Input:React.FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div><input {...input} {...props}
            className={s.input}/></div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

