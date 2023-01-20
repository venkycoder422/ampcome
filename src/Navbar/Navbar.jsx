import React from "react";
import styled from 'styled-components';
import Vector from '../assets/png/Vector.png'
import User from '../assets/png/Users.png'
import Calendar from '../assets/png/Calandar.png'
import Rupee from '../assets/png/Rupee.png'
import Bill from '../assets/png/Bill.png'
import Setting from '../assets/png/Setting.png'
import Doctors from '../assets/png/Doctor.png'
import Line from '../assets/png/Line1.png'
export const Navbar = () => {
    return (
        <NavbarWrapper>
            <div>
                <div className="Vector">
                    <div className="Icons" ><img src={Vector} alt="Vector" /></div>
                    <div className="d-flex"><img src={Line} alt="Line1"/></div>
                </div>
                <div className="Icons"><img src={User} alt="User" /></div>
                <div className="Icons"><img src={Calendar} alt="Calendar" /></div>
                <div className="Icons"><img src={Rupee} alt="Rupee" /></div>
                <div className="Icons"><img src={Bill} alt="Bill" /></div>
                <div className="Icons"><img src={Setting} alt="Setting" /></div>
            </div>
            <div className="Icons"><img src={Doctors} alt="Doctor" /></div>
            <div></div>
            <div></div>
            <div></div>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.div`
width: 77px;
height: 1726px;
left: 0px;
top: 0px;
background: #203765;
display:flex;
flex-direction:column;
justify-content:space-evenly;
    .Vector{
        display:flex;
        background: rgba(255, 255, 255, 0.1)
    }
    .Icons{
       display:flex;
       justify-content:center;
       align-items:center;
        width: 77px;
        height: 46px;
       
    }

    .d-flex{
        
    }
`;