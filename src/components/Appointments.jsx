import React from "react";
import styled from "styled-components";
import Hints from '../assets/png/Hints.png'
import Circle from '../assets/png/circle.png';
import Pradeep from '../assets/png/PradepUser.png';
import AnyTime from '../assets/png/ANytime.png';
import Risha from '../assets/png/Risha.png';
import InPerson from '../assets/png/In Person.png';
import StatusRed from '../assets/png/StatusRed.png';
import ShortHoriLine from '../assets/png/ShortHoriLine.png';
import RightArrow from '../assets/png/RightArrow.png';
import RedArrow from '../assets/png/RedArrow.png';
import Hline from '../assets/png/HLine.png';
import Right from '../assets/png/Right.png';
import clock from '../assets/png/clock.png';
import Video from '../assets/png/VideoIcon.png';
import { Link } from "react-router-dom";
export const Appointments = () => {
    return (
        <AppointmentContainer>
            <HeaderSection>
                <div className='heading'>Appointment</div>
                <div><img src={Hints} alt="Hints" /></div>
            </HeaderSection>
            <hr></hr>
            <ContentBody>
                <div className="Waiting-Text">Waiting Queue (6)</div>
                <div className="View-Queue">View Queue</div>
            </ContentBody>
            <div className="Body-User">


                <BodyUserInfo>
                    <div className="UserWrapper">
                        <div className="UserIcon"><img src="" alt="" /></div>
                        <div className="UserDetailsContainer">
                            <div className="Name-Text">Prajeesh</div>
                            <div className="Icon-Text-Time">
                                <div className="Icon"><img src={InPerson} alt="Inperson" /></div>
                                <div className="Text">In Person<span>•</span>2:20 pm</div>

                            </div>
                        </div>
                    </div>
                    <div className="Status-Button">
                        <div><img src={StatusRed} alt="" /></div>
                        <div className="Status-Text">To be finalised</div>
                    </div>
                </BodyUserInfo>
                <BodyUserInfo>
                    <div className="UserWrapper">
                        <div className="UserIcon"><img src={Risha} alt="" /></div>
                        <div className="UserDetailsContainer">
                            <div className="Name-Text">Risha Mahin</div>
                            <div className="Icon-Text-Time">
                                <div className="Icon"><img src={AnyTime} alt="ANytime" /></div>
                                <div className="Text">Anytime Consultation<span>•</span>2:30 pm</div>

                            </div>
                        </div>
                    </div>
                    <div className="Waiting-Status-Button">
                        <div><img src={clock} alt="" /></div>
                        <div className="Status-Text">Waiting <b>•</b> 40 min</div>
                    </div>
                </BodyUserInfo>
                <BodyUserInfo>
                    <div className="UserWrapper">
                        <div className="EmptyIcon"><img src={Circle}></img><span className="Only-Name">RK</span></div>
                        <div className="UserDetailsContainer">
                            <div className="Name-Text">Raju K</div>
                            <div className="Icon-Text-Time">
                                <div className="VideoIcon"><img src={Video} alt="Inperson" /></div>
                                <div className="Text">Video Consultation<span>•</span>2:40 pm</div>

                            </div>
                        </div>
                    </div>
                    <div className="Waiting-Status-Button">
                        <div><img src={clock} alt="clock" /></div>
                        <div className="Status-Text">Waiting <b>•</b> 40 min</div>
                    </div>
                </BodyUserInfo>
                <BodyUserInfo>
                    <div className="UserWrapper">
                        <div className="EmptyIcon"><img src={Circle} alt="Circle" /><span className="Only-Name">SS</span></div>
                        <div className="UserDetailsContainer">
                            <div className="Name-Text">Setia S</div>
                            <div className="Icon-Text-Time">
                                <div className="VideoIcon"><img src={Video} alt="Inperson" /></div>
                                <div className="Text">Video Consultation<span>•</span>2:40 pm</div>

                            </div>
                        </div>
                    </div>
                    <div className="Waiting-Status-Button">
                        <div><img src={clock} alt="" /></div>
                        <div className="Status-Text">Waiting <b>•</b> 40 min</div>
                    </div>
                </BodyUserInfo>
            </div>
            <UserFooter>
                <div><img src={ShortHoriLine} alt="HLine" /></div>
                <Link to="/appointments"><div className="View-All">
                    View All Appointments
                    <img className="H" src={Hline} alt="" /><img className="R" src={Right} alt="" />
                    </div></Link>
            </UserFooter>
        </AppointmentContainer>
    )
}

const AppointmentContainer = styled.div`
box-sizing: border-box;

position: absolute;
width: 30%;
height: 565px;
left: 117px;
top: 435px;

background: #FFFFFF;
border: 1px solid rgba(41, 55, 95, 0.2);
border-radius: 6px;
hr{
    border: 1px solid rgba(41, 55, 95, 0.2);
}

.Body-User{
    display:grid;
    grid-templete-column:1fr;
    gap:50px;
}
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

const ContentBody = styled.div`
display:flex;
justify-content:space-between;
height:40px;
align-items:center;
padding:20px;
.Waiting-Text{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    
    
    color: rgba(41, 55, 95, 0.6);
    
}
.View-Queue{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    
    display: flex;
    align-items: center;
    
    color: #FC6964;
    
}
`;

const BodyUserInfo = styled.div`
width: 400px;
height: 44px;
padding:0px 26px;
display:flex;
gap:50px 15px;
justify-content: space-between;
.UserWrapper{
    display:flex;
    gap:0px 15px;
}
.UserIcon{
    background:url('${Pradeep}');
    width:44px;
    height:44px;

}
.EmptyIcon{
    width:44px;
    height:44px;
    img{
        width:100%;
        height:100%;
    }
    .Only-Name{
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */


color: #FFFFFF;
        position: relative;
    top: -38px;
    left:3px;
    }
}
span{
    margin: 0px 10px;
}
.UserDetailsContainer{
    display:flex;
    flex-direction:column;
    gap:5px;
    .Name-Text{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        
        color: #29375F;
        
    }
    .Icon{
        color: #29375F;
    }
    .Text{
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        
        color: #29375F;
    }
    .Icon-Text-Time{
        display:flex;
        gap:5px;
        align-items:center;
        width:207px;
        .VideoIcon{
            width:24px;
            img{
                width:100%;
            }
        }
    }
}
.Waiting-Status-Button{
    position: absolute;
    left: 292px;
    border-radius: 12px;
    float:top;
    display:flex;
    align-content:center;
    width:132px;
    height:22px;
    justify-content: space-between;
    padding:1px 5px;
    align-items: center;
    background: #FFECCC;
img{
    width:14.5px;
}
.Status-Text{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    /* identical to box height */
    color: #D30000;
    margin-right:5px;
}
}
.Status-Button{
    background: #FFE0E0;
    border-radius: 12px;
    float:top;
    display:flex;
    align-content:center;
    width:120px;
    height:22px;
    justify-content: center;
    gap: 10px;
    align-items: center;
    .Status-Text{
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */
        color: #D30000;
    }
}
`;

const UserFooter = styled.div`
width: 359px;
height: 44px;
padding:0px 26px;

.View-All{
    cursor:pointer;
font-style: normal;
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