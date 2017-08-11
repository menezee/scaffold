import React from 'react';
import { Link } from 'react-router-dom'

export const About = props => {
    console.log(props);
    return (
        <div style={{paddingLeft: '200px'}}>
            <h1>About</h1>
            <Link to={'/profile'}>
                <button>Send to Profile</button>
            </Link>
        </div>
    )
};
