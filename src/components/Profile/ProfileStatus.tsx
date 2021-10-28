import React from 'react';

export type ProfileStatusPropTypes = {
    status: string
};

class ProfileStatus extends React.Component<ProfileStatusPropTypes> {
    state = {
        editMode: false
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span>{this.props.status}</span>
                    </div>}

                {this.state.editMode &&
                    <div>
                        <input value={this.props.status}></input>
                    </div>}
            </div>
        );
    }
}


export default ProfileStatus;