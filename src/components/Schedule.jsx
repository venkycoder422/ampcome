import React from "react";
import styled from "styled-components";
import Hints from '../assets/png/Hints.png'
import AnyTime from '../assets/png/ANytime.png';
import Help from '../assets/png/Help.png';
import GreenCircle from '../assets/png/GreenCircle.png';
import Video from '../assets/png/VideoIcon.png'
import InPerson from '../assets/png/In Person.png'
import Block from '../assets/png/Blocked.png'
import Hline from '../assets/png/HLine.png';
import Right from '../assets/png/Right.png';
import ShortHoriLine from '../assets/png/ShortHoriLine.png';
import { Link } from "react-router-dom";

export const Schedule = () => {

    return (
        <ScheduleWrapper>
            <HeaderSection>
                <div className='heading'>Schedule</div>
                <div><img src={Hints} alt="Hints" /></div>
            </HeaderSection>
            <hr></hr>
            <Notify>
                <div className="Notify-Content">
                    <div>Receive <img src={AnyTime} alt="Anytime" /> <b> Anytime Consultation</b> <img src={Help} alt="Help" /></div>

                </div>
                <div>
                    <div className="YesButton">
                        <span>YES</span>
                        <img src={GreenCircle} alt="" /></div>
                </div>
            </Notify>


            <TimingsContainer>
                <CurrentDay>
                    TODAY • MONDAY
                </CurrentDay>
                <TimingsWrapper>
                    <div className="Date">9:00 AM - 9:40 AM • 40 minutes </div>
                    <div className="Status"><img src={AnyTime} alt="Anytime" /> AnyTime</div>
                </TimingsWrapper>
                <TimingsWrapper>
                    <div className="Date">3:30 AM - 7:30 PM • 4 hours </div>
                    <div className="Status"><img className="Video" src={Video} alt="Anytime" /> Video</div>
                </TimingsWrapper>
                <Day>
                    TOMORROW • TUESDAY
                </Day>
                <TimingsWrapper>
                    <div className="Date">9:00 AM - 9:40 AM • 40 minutes </div>
                    <div className="Status"><img src={InPerson} alt="Anytime" /> In-Person</div>
                </TimingsWrapper>
                <TimingsWrapper>
                    <div className="Date">12:20 AM - 3:30 PM • 6 hours </div>
                    <div className="Status"><img src={AnyTime} alt="Anytime" /> AnyTime</div>
                </TimingsWrapper>
                <BlockedTiming>
                    <div className="BlockedDate">12:20 AM - 3:30 PM • 6 hours </div>
                    <div className="BlockedStatus"><img src={Block} alt="Block" /> Block</div>
                </BlockedTiming>
                <Day>
                    WEDNESDAY
                </Day>
                <UserFooter>
                    <div><img src={ShortHoriLine} alt="HLine" /></div>
                    <Link to='/schedule'><div className="View-All">
                        View All Schedule
                        <img className="H" src={Hline} alt="" /><img className="R" src={Right} alt="" />
                    </div>
                    </Link>
                </UserFooter>
            </TimingsContainer>
        </ScheduleWrapper>
    )
}

const ScheduleWrapper = styled.div`
box-sizing: border-box;

position: absolute;
width: 30%;
height: 563px;
left: 590px;;
top: 435px;

background: #FFFFFF;
border: 1px solid rgba(41, 55, 95, 0.2);
border-radius: 6px;
`;

const HeaderSection = styled.div`
    display:flex;
    justify-content:space-between;
    height:40px;
    align-items:center;
    padding:20px;
    
    .heading{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 135.19%;
        /* or 24px */
        
        letter-spacing: 0.06em;
        text-transform: uppercase;
        
        color: rgba(41, 55, 95, 0.4);
    }
`;

const Notify = styled.div`
padding:0px 16px;
width: 375px;
height: 56px;
margin:auto;
background: rgba(238, 238, 241, 0.4);
border: 1px solid rgba(41, 55, 95, 0.2);
border-radius: 6px;
display:flex;
justify-content:space-between;
align-items:center;
    .Notify-Content{
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 135.19%;
        /* or 24px */

        letter-spacing: 0.06em;

        color: rgba(41, 55, 95, 0.4);
        b{
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color:black;
        }
    }


.YesButton{
width: 55px;
height: 22px;
left: 873px;
top: 548px;
background: #FFFFFF;
border: 1px solid rgba(41, 55, 95, 0.4);
padding:0px 5px;
border-radius: 27px;
display:flex;
align-items:center;
justify-content:space-between;
}
`;

const CurrentDay = styled.div`
width: 132px;
height: 18px;
font-style: normal;
font-weight: 650;
font-size: 14px;
line-height: 125%;
color: rgba(41, 55, 95, 0.8);
    padding-top: 40px;
    padding-left: 48px;
    padding-bottom: 8px;
}
`;
const TimingsContainer = styled.div`
    display:grid;
    grid-templete-column:1fr;
    gap:3px;
`;
const TimingsWrapper = styled.div`
    width: 376px;
    height: 40px;
    left: 571px;
    top: 638px;
    margin:auto;
    padding:0px 20px;
    background: rgba(10, 148, 16, 0.04);
    display:flex;
    justify-content:space-between;
    align-items:center;
    .Date{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 152.52%;
        color: #008D17;

    }
    .Status{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 192.2%;
        text-align: center;
        color: rgba(41, 55, 95, 0.7);
        display:flex;
        align-items:center;
        gap:10px;
        img{
            width:15px;
            height:18px;
        }
        .Video{
            height: 30px;
            width:30px;
            border-radius: 0px;
            background: rgba(10, 148, 16, 0.04);
            
        }
    }
`
const Day = styled.div`
width: 173px;
height: 18px;
font-style: normal;
font-weight: 650;
font-size: 14px;
line-height: 125%;
/* identical to box height, or 18px */

color: rgba(41, 55, 95, 0.8);
padding:5px 40px;
`;

const BlockedTiming = styled.div`
width: 376px;
height: 40px;
left: 571px;
top: 854px;
margin:auto;
padding:0px 20px;
background: rgba(252, 105, 100, 0.08);
display:flex;
    justify-content:space-between;
    align-items:center;
    .BlockedDate{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 152.52%;
        color: #FC6964;
       
    }
    .BlockedStatus{
        display:flex;
        align-items:center;
        gap:10px;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 152.52%;
        text-align: right;
        color: #FC6964;

    }
`;

const UserFooter = styled.div`
width: 359px;
height: 44px;
padding:0px 26px;
.View-All{
    cursor:pointer;
    font
    
    
    -style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

display: flex;
align-items: center;
margin-top:10px;
color: #FC6964;
.H{
    margin-top:3px;
    margin-left:8px;
    width:10.23px;
}
.R{
    margin-top:3px;
    margin-left:-3px;
    width:4.97px;
    height:8.75px;
}
}
`;