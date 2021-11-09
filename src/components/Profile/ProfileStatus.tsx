import React, {ChangeEvent} from 'react';

export type ProfileStatusPropTypes = {
    status: string
    updateStatus: (status: string) => void
};

class ProfileStatus extends React.Component<ProfileStatusPropTypes> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={
                        this.activateEditMode
                    }>{this.props.status||'---'}</span>
                </div>}

                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivateEditMode}
                           onChange={this.onStatusChange}
                           autoFocus
                           value={this.state.status}></input>
                </div>}
            </div>
        );
    }
}


export default ProfileStatus;