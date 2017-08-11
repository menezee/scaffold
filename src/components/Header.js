import React from 'react';

export const Header = () => {
    return (
        <div style={{height: '100px', backgroundColor: 'darksalmon'}}>
            <p style={{position: 'relative', top: '50%', transform: 'translateY(-50%)', textAlign: 'center'}}>
                Nicest header ever.
            </p>
        </div>
    )
};
