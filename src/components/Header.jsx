import React from "react";
import '../App.css';

const Header = () => {
    return(
        <>
        <div className="header-section">
            <div className="center-div">
                <h1 className="font-weight-bold">
                    Medilab<span className="plus">+</span>
                </h1>
                <h2>HEALTHCARE AT YOUR DESK!!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. dolorum,<br/> dolorem quia quae tempora culpa odit minima.</p>
           <button className="button-style">Make an Appointment.</button>
            </div>
        </div>
        </>
    )
}

export default Header