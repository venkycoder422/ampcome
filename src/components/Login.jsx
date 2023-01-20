import React from "react";
import styled from 'styled-components';
import Frame1 from '../assets/png/LoginFrame.png';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (name == '' || password.length < 4 || unit == '') {
            alert('Please enter details');
        } else {
            let payload = {
                'name': name,
                'password': password,
                'unit': unit
            }

            localStorage.setItem('ampCome', JSON.stringify(payload));
            navigate('/dashboard');
        }

    }
    return (
        <Container>
            <RightContent>
                <h1 className="welcome-tag">Welcome to Friendly Doctor</h1>
                <p className="des-text">Go ahead of the curve Join the next generation of health heros.</p>
                <img src={Frame1} alt="Frame" />
            </RightContent>

            <ScreenLeft className="leftContent">

                <div className="form-inputs">
                    <div className="signInContent">Sign-in to your account</div>
                    <div>
                        <input placeholder="User name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <input placeholder="Password" type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                            <option value="null" id="unitNull" selected hidden>Select Unit Name</option>
                            <option value="Dentist">Dentist</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="ENT">ENT Specialist</option>
                            <option value="Gynaecologist"></option>
                        </select>
                    </div>
                </div>
                <div className="submit-button">
                    <input type="button" value="Submit" onClick={handleSubmit} />
                </div>
            </ScreenLeft>
        </Container>
    )
}

const Container = styled.div`
position: relative;
width:100%;
height:100%;
background: #FFFFFF;
display:flex;

`
const RightContent = styled.div`
     
        width: 775px;
        height: 900px;
        background: #F0F4FC;
        .des-text{
            font-family: 'Montserrat';
            font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
/* identical to box height, or 157% */

text-align: center;

color: rgba(32, 55, 101, 0.8);
        }
        .welcome-tag{
        position: absolute;
        width: 292px;
        height: 30px;
        left: 239px;
        top: 141px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 125%;
        /* identical to box height, or 30px */

        text-align: center;

        color: #203765;
        }
        p{
        position: absolute;
        width: 471px;
        height: 22px;
        left: 149px;
        top: 196px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: rgba(32, 55, 101, 0.8);
        }

    img{
        position: absolute;
        width: 528px;
        height: 332px;
        left: 135px;
        top: 285px;
    }
`

const ScreenLeft = styled.div`
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        position: absolute;
        width: 294px;
        height: 316px;
        left: 960px;
        top: 292px;
        display:grid;
        gap:40px 0px;
      
        .signInContent{
            width: 249px;
            height: 28px;
            left: 960px;
            top: 292px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 125%;
            /* identical to box height, or 28px */
            color: #29375F;
        }
        .form-inputs{
            display:grid;
            gap:10px 0px;
        }
        input{
            border: 1px solid rgba(192, 206, 255, 0.7);
            border-radius: 6px;
            width: 250px;
            height: 44px;
            left: 960px;
            top: 352px;
            padding:2px 20px;
        }
        input::placeholder{
        left: 9.52%;
        right: 47.62%;
        top: 27.27%;
        bottom: 28.73%;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: rgba(41, 55, 95, 0.4);
        }

        select{
            padding:2px 20px;
            width: 294px;
            height: 44px;
            left: 960px;
            top: 352px;
            border: 1px solid rgba(192, 206, 255, 0.7);
            border-radius: 6px;
            left: 9.52%;
            right: 47.62%;
            top: 27.27%;
            bottom: 28.73%;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
        }
       
        .submit-button input{
            background: #FC6964;
            border-radius: 12px;
            width: 294px;
            height: 43px;
            left: 961px;
            top: 565px;
            cursor:pointer;

        }
        .submit-button input{
            :hover{
                background-color:#8686e7;
            }
        }

        
    
`