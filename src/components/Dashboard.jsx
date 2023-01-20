import React from "react";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import Fill from "../assets/png/Fill 3.png"
import Logo from '../assets/png/Logo.png';
import Notification from '../assets/png/Notification.png'
import ActivityText from '../assets/png/Activity.png';
import Summary from '../assets/png/Summary.png';
import Update from '../assets/png/Update.png';
import Circle from '../assets/png/circle.png'
import { Appointments } from "./Appointments";
import { Schedule } from "./Schedule";
import { ConsultationHistory } from "./ConsultationHistory";
export const DashBoard = () => {
    const currencies = [
        {
            value: 'PRK Hospital',
            label: 'PRK Hospital',
        },
        {
            value: 'Saveera Hospital',
            label: 'Saveera Hospital',
        },
        {
            value: 'Snehalatha Hospital',
            label: 'Snehalatha Hospital',
        }
    ];
    const userdata = JSON.parse(localStorage.getItem('ampCome'));
    console.log(userdata);
    return (
        <>
            <HomeWrapper>
                <Navbar />
                <div className="top-bar">
                    <div className="User-Content">
                        <p className="Name">Welcome <span class="NameBright">{userdata.name}</span></p>
                        <p className="DoctorNeeded">{userdata.unit}</p>
                    </div>

                    <div className="Earnings">
                        <div className="Earning-Content">
                            <div className="Earning-left">
                                <div><img src={Fill} alt="" srcset="" /></div>
                                <div className="Total-Earnings">
                                    <div className="Tot-Earnings">Total Earnings</div>
                                    <div className="Tot-Cost">$ 4000</div>
                                </div>
                            </div>
                            <div className="Selection-Content">
                                <div>
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Unit"
                                        defaultValue="PRK Hospital"
                                    >
                                        {currencies.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>
                                <div>
                                    <TextField
                                        select
                                        label="Time Duration"
                                        defaultValue="PRK Hospital"
                                    >
                                        {currencies.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                </div>

                            </div>
                        </div>
                        <div className="Earning-Statics">
                            <div>
                                <h4 className="Static-Type">Appointments</h4>
                                <h2 className="Static-Number">54</h2>
                            </div>
                            <div>
                                <h4 className="Static-Type">EMR Finalised</h4>
                                <h2 className="Static-Number">47</h2>
                            </div>
                            <div>
                                <h4 className="Static-Type">Patient Registrations</h4>
                                <h2 className="Static-Number">120</h2>
                            </div>
                            <div>
                                <h4 className="Static-Type">KR4ALL Visits</h4>
                                <h2 className="Static-Number">30</h2>
                            </div>
                        </div>
                    </div>
                    <Activity>

                        <div className='Logo'>

                        </div>

                        <ActivityContent>


                            <div className="Notify">
                                <div><img src={Notification} alt="Notify" /></div>
                                <div>ACTIVITY</div>
                            </div>

                            <div className="Task-Bar">
                                <div className="ImgWrapper"><img src={ActivityText} alt="Activity" /></div>
                                <div className='Activity-Content'>
                                    <div className="Activity-text">
                                        <div style={{
                                            color: "rgba(41, 55, 95, 0.8)", fontFamily: 'Roboto',
                                            fontStyle: "normal",
                                            fontWeight: "500",
                                            fontSize: "14px",
                                            lineHeight: "165.2%"
                                        }}>User activity</div>
                                        <div style={{ fontWeight: '400px' }}>  <span>•</span>  12:32</div>
                                    </div>
                                    <div>
                                        Vivek KUmar accecpted the invitaion
                                    </div>
                                </div>

                            </div>

                            <div className="Task-Bar">
                                <div className="ImgWrapper"><img src={ActivityText} alt="" /></div>
                                <div className='Activity-Content'>
                                    <div className="Activity-text">
                                        <div style={{ color: "rgba(41, 55, 95, 0.8)" }}>User activity</div>
                                        <div style={{ fontWeight: '400px' }}><span>•</span>8:16</div>
                                    </div>
                                    <div>
                                        Ritu M, blocked their calendar for 15th September
                                    </div>
                                </div>

                            </div>

                            <div className="Task-Bar">
                                <div className="ImgWrapper"><img src={Summary} alt="Summary" /></div>
                                <div className='Activity-Content'>
                                    <div className="Activity-text">
                                        <div style={{
                                            color: "rgba(41, 55, 95, 0.8)"
                                        }}>Summary</div>
                                        <div style={{ fontWeight: '400px' }}><span>•</span>8:00</div>
                                    </div>
                                    <div >
                                        Lorem ipsum dolor sit amet, consector adipiscing elit, sed do incidant.
                                    </div>
                                </div>

                            </div>

                            <div className="Task-Bar">
                                <div className="ImgWrapper"><img src={Update} alt="" /></div>
                                <div className='Activity-Content'>
                                    <div className="Activity-text">
                                        <div style={{ color: "rgba(41, 55, 95, 0.8)" }}>Application Update</div>
                                        <div style={{ fontWeight: '400px' }}><span>•</span>yesterday</div>
                                    </div>
                                    <div>
                                        Lorem ipsum dolor sit amet, consector adipiscing elit, sed do incidant
                                    </div>
                                </div>

                            </div>

                            <div className="Task-Bar">
                                <div className="ImgWrapper"><img src={ActivityText} alt="Activity" /></div>
                                <div className='Activity-Content'>
                                    <div className="Activity-text">
                                        <div style={{ color: "rgba(41, 55, 95, 0.8)" }}>User Activity</div>
                                        <div style={{ fontWeight: '400px' }}><span>•</span>2 days ago</div>
                                    </div>
                                    <div>
                                        Vivek Kumar accecpted the invitation
                                    </div>
                                </div>

                            </div>

                        </ActivityContent>
                    </Activity>
                </div>
                <Appointments />
                <Schedule />

                <ConsultationHistory />
            </HomeWrapper>
        </>
    )
}

const HomeWrapper = styled.div`
position: relative;
z-index:1;
display:flex;
    .top-bar{
    left:5%;
    top: 0%;
    width:95%;
    height:232px;
    background: #203765;
    .User-Content{
        width: 369px;
        height: 46px;
        left: 172px;
        top: 40px;
        font-style: normal;
        font-weight: 200;
        font-size: 34px;
        line-height: 135.19%;
        letter-spacing: 0.06em;
        color: #FFFFFF;
        margin-left:100px;
        .Name{
            margin-bottom:0px;
        }
        .NameBright{
            color:white;
            font-family: 'Inter';
        }
        .DoctorNeeded{
            margin: 0px;
            padding: 0px 10px;
            width: 88px;
            height: 22px;
            font-size:16px;
            line-height: 90.19%;
            letter-spacing: 0.06em;
            color: #FFFFFF;
            font-style: normal;
            font-weight: 200;
            font-size: 16px;
            line-height: 135.19%;
            letter-spacing: 0.06em;
            color: #FFFFFF;

        }
    }
    }

    .Earnings{
        .Earning-Content{
            position: absolute;
            display:flex;
            justify-content:space-between;
            align-items:center;
            width: 62%;
            height: 101px;
            left: 116px;
            top: 168px;
            z-index:1;
            background: #FFFFFF;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            .Earning-left{
                position:relative;
                top:-20px;
                display:flex;
                justify-content:space-between;
                gap:0px 30px;
                padding:0px 20px;
            }
            .Tot-Earnings{
                font-weight: 500;
                font-size: 14px;
                line-height: 135.19%;
                /* identical to box height, or 19px */
                color: #29375F;
            }
            .Total-Earnings{
                width: 95px;
                height: 19px;
            }

            .Tot-Cost{
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 197.7%;



                color: #29375F;
            }

            .Selection-Content{
                display:flex; 
                gap:0px 50px;
                margin-right: 20px;
                .MuiTextField-root: { m: 1, width: '25ch' };

            }
        }
        .Earning-Statics{
            box-sizing: border-box;
            position: absolute;
            width: 62%;
            height: 181px;
            left: 116px;
            top: 222px;

            background: #F0F6FE;
            border: 1px solid rgba(41, 55, 95, 0.1);
            border-radius: 6px;
            .Static-Type{
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 135.19%;
                /* identical to box height, or 19px */


                color: #29375F;
            }

            .Static-Number{
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                    line-height: 29px;
                /* identical to box height */


                    color: #29375F;

            }
            
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:20px 50px;
        }
    }
    
`
const Activity = styled.div`
box-sizing: border-box;
position: absolute;
width: 27%;
height: 616px;
left:  72%;
top: 42px;

background: #FFFFFF;
border: 1px solid rgba(41, 55, 95, 0.2);
border-radius: 6px;
    .Logo{
        margin-bottom: 47px;
        width: 149px;
        height: 73px;
        margin-left: 40px;
        margin-top: 14px;
background: url(${Logo});
border-radius: 6px;
    }
`

const ActivityContent = styled.div`
display: flex;
    gap: 20px 0px;
    flex-direction: column;
width: 90%;
height: 449px;
margin:auto;

.Notify{
    display:flex;
    width: 95px;
    margin-left: 17px;
    margin-bottom: 40px;
    gap: 0px 20px;
height: 24px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 135.19%;
/* or 24px */

letter-spacing: 0.06em;
text-transform: uppercase;

color: rgba(41, 55, 95, 0.4);
}
.Task-Bar{
display:flex;
gap:30px;

.ImgWrapper{
    position: absolute;
    background-image: url(${Circle});
    width: 35px;
    height: 35px;
    border-radius: 10px;
    /* margin: auto; */
    align-items: center;
    display: flex;
    justify-content: center;
}
}
.Activity-Content{
    position:relative;
    left:60px;
    color: rgba(41, 55, 95, 0.5);
    width:346px;
}
.Activity-text{
    display:flex;
    width: 14opx;
height: 23px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 165.2%;
/* or 23px */
color: rgba(41, 55, 95, 0.5);
span{
    margin: 0px 10px;
}
}

.Activity-Text +div{
    color: rgba(41, 55, 95, 0.7);
}

`