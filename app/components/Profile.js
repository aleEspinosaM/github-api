import React, { Component } from 'react';
import PlayerPreview from './PlayerPreview'

class Profile extends Component {
    render() {
        const info = this.props.info
        return (
            <div>
                <PlayerPreview avatar={info.avatar_url} username={info.login}>
                    <ul className='space-list-items'>
                        {info.name && <li>{info.name}</li>}
                        {info.location && <li>{info.location}</li>}
                        {info.company && <li>{info.company}</li>}
                        <li>Followers: {info.followers}</li>
                        <li>Following: {info.following}</li>
                        <li>Public Repos: {info.public_repos}</li>
                        {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
                    </ul>
                </PlayerPreview>
            </div>
        );
    }
}

export default Profile;