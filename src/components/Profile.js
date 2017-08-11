import React from 'react';
import { Link } from 'react-router-dom'

export const Profile = props => {
    console.log(props);
    return (
        <div style={{paddingLeft: '200px'}}>
            <h1>Profile</h1>
            <Link to={'/about'}>
                <button>Send to About</button>
            </Link>
        </div>
    )
};
