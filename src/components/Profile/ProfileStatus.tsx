import React from 'react';

export type ProfileStatusPropTypes = {
    status: string
};

class ProfileStatus extends React.Component<ProfileStatusPropTypes> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={
                        this.activateEditMode
                    }>{this.props.status}</span>
                </div>}

                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivateEditMode} autoFocus value={this.props.status}></input>
                </div>}
            </div>
        );
    }
}


export default ProfileStatus;