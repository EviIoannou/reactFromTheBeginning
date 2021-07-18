//const Help = () => <h1>Help</h1>

import React from 'react';
import { Route, Link } from 'react-router-dom';

const HelpCustomer = () => <h1>Help customer</h1>
const HelpHost = () => <h1>Help host</h1>

function Help(props) {
    return(
        <div>
            <div>
                <Link to="/help/customer">I am a customer</Link> |
                <Link to="/help/host">I am a host</Link>  
            </div>    
            <p>An image goes here</p>
            <Route path="/help/customer" component={HelpCustomer}/>
            <Route path="/help/host" component={HelpHost}/>
            <h3>Footer for help</h3>     
        </div>

    )
}

export default Help;