import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

export type ProfileStatusPropTypes = {
    status: string
    updateStatus: (status: string) => void
};

const ProfileStatusWithHooks: React.FC<ProfileStatusPropTypes> = (props) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditMode=()=>setEditMode(true)
    const deactivateEditMode=()=> {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onEnterHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        console.log(e)
        if(e.key==="Enter"){
            deactivateEditMode()
        }
    }

    const onStatusChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
            <div>
                    <span onDoubleClick={activateEditMode}>
                        {props.status || '---'}</span>
            </div>}

            {editMode &&
            <div>
                <input onBlur={deactivateEditMode}
                       onKeyPress={onEnterHandler}
                       onChange={onStatusChangeHandler}
                       value={status}
                       autoFocus/>
            </div>}
        </div>
    );
}


export default ProfileStatusWithHooks;