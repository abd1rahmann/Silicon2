import React from 'react'
import Navbar from "./sections/global/Navbar.jsx";
import Content from './sections/error/Content.jsx'

function ErrorFooter() {
    return <p id="error-footer">2024. All rights reserved. Silicon template.</p>
}

const Error = () => {
    return (
        <div>
            <Navbar/>
            <div id="error-wrapper">
                <Content/>
                <ErrorFooter/>
            </div>
        </div>
    )
}
export default Error
