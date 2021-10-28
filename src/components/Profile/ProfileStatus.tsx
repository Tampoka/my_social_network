import React from 'react';

export type ProfileStatusPropTypes = {
    status:string
};

class ProfileStatus extends React.Component<ProfileStatusPropTypes> {
    render() {
        return (
            <div>
                <div>
                    <span>{this.props.status}</span>
                </div>
                <div>
                    <input value={this.props.status}></input>
                </div>
            </div>
        );
    }
}


export default ProfileStatus;