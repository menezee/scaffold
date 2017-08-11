import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { About, Profile, Header } from './components'

const App = () => {
    return (
        <BrowserRouter>
            <div style={{width: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
                <Header />
                <Route path='/about' component={About} />
                <Route path='/profile' render={props => <Profile {...props} />} />
            </div>
        </BrowserRouter>
    )
};

export default App;
