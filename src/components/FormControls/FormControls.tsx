import React from 'react';

// @ts-ignore
export const Textarea = ({input,meta,...props}) => {
    return (
        <div>
            <textarea {...input} {...props}/>
        </div>
    );
};

