import React, {useState} from 'react';

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
                       onChange={(e) => setStatus(e.currentTarget.value)}
                       value={status}
                       autoFocus/>
            </div>}
        </div>
    );
}


export default ProfileStatusWithHooks;