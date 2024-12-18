import React from 'react'
import {Link, useLocation} from "react-router-dom";
import Home from '../../../images/icons/bx-home-alt.svg'
import ChevronRight from '../../../images/icons/bx-chevrons-right.svg'

const BreadCrumb = () => {
    const location = useLocation();

    const currentLocation = location.pathname.toString().slice(1);
    const formattedLocation = currentLocation.charAt(0).toUpperCase() + currentLocation.slice(1);

    return (
        <div className="container">
            <div className="breadcrumb">
                <img id="breadcrumb-home" src={Home} alt="home icon"/>

                <div className="breadcrumb-component">
                    <Link to="/" className="breadcrumb-link text-s">Home</Link>
                    <img className="breadcrumb-chevron" src={ChevronRight} alt="right chevron"/>
                    <Link to={location.pathname} className="breadcrumb-link text-s">{formattedLocation}</Link>
                </div>
            </div>
        </div>
    )
}
export default BreadCrumb
