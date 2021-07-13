import React from 'react';

function Headers (props) {
    return (
        <>
            <h1>{props.temp}</h1>
            <h1>{props.isRaining}</h1>
        </>
    )
}

export default Headers;