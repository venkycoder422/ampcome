import React from "react";
import styled from "styled-components";
import GreenCircle from '../assets/png/GreenCircle.png';
import Hint from '../assets/png/Hints.png';
import Pay from '../assets/png/Single Pay Periods.png';
import Anytime from '../assets/png/AnytimeLine.png'
import VisitLine from '../assets/png/visitLine.png'
import OnlineLine from '../assets/png/OnlineVisitLine.png'
export const ConsultationHistory = () => {
    return (
        <HistoryContainer>
            <Header>
                <div className="headerName">Consultation History</div>
                <div className="rightContent">
                    <div className="KRAALL" style={{ display: 'flex', gap: "15px" }}>KRAALL Visits
                        <div className="YesButton">
                            <img className="circle" src={GreenCircle} alt="" />
                        </div>All
                    </div>

                    <div >
                        <img src={Hint} alt="" />
                    </div>
                </div>

            </Header>
            <hr></hr>
            <HistoryBody>
                <div><img src={Pay} alt="" /></div>
                <div className="Stats-Content">
                    <div className="Person-Visit">
                        <div><img src={VisitLine} alt="" /> 61</div>
                        <div>In-Person Visits</div>
                        <div>14 minutes Avg time</div>
                    </div>
                    <div className="Online-Visit">
                        <div><img src={OnlineLine} alt="" /> 15</div>
                        <div>Online Visit</div>
                        <div>18 min Avg time</div>
                    </div>
                    <div className="Any-Time">
                        <div ><img src={Anytime} alt="" /> 12</div>
                        <div>Anytime Consult</div>
                        <div>20 min Avg time</div>
                    </div>
                </div>
            </HistoryBody>
        </HistoryContainer>
    )
}



const HistoryContainer = styled.div`
box-sizing: border-box;
position: absolute;
width: 61%;
height: 408px;
left: 117px;
top: 1032px;

background: #FFFFFF;
border: 1px solid rgba(41, 55, 95, 0.2);
border-radius: 6px;
                
`;

const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
    .headerName{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 135.19%;
        letter-spacing: 0.06em;
        text-transform: uppercase;

        color: rgba(41, 55, 95, 0.4);
        padding:25px;
        hr{
            border: 1px solid rgba(41, 55, 95, 0.2);
        }
    }

    .YesButton{
        width: 30px;
        height: 22px;
        background: #FFFFFF;
        border: 1px solid rgba(41, 55, 95, 0.4);
        padding:0px 5px;
        border-radius: 27px;
        img{
            margin-top:2px;
            float:right;
        }

    }

    .rightContent{
        width:300px;
        display:flex;
        gap:5px;
        justify-content: space-around;
        .KRAALL{
            display:flex;
            gap:15px;
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 135.19%;
            color: rgba(41, 55, 95, 0.5);
        }
    }
    

`;

const HistoryBody = styled.div`
padding: 0px 12px;
gap: 16px;
margin:auto;
width: 805px;
height: 187px;
left: 132px;
top: 1134px;

background: #FFFFFF;
border-radius: 6px;
.Stats-Content{
    display:flex;
    justify-content:space-evenly;
    margin:15px 0px;
    .Person-Visit{
        display:grid;
        grid-templete-column:1fr;
        row-gap: 5px;
        div:nth-child(2) {
            color: #DC796F;
          }
          div:nth-child(1) {
            color: #DC796F;
            font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 159.69%;
/* identical to box height, or 26px */

          }
          div:nth-child(3) {
            color: rgba(41, 55, 95, 0.6);

          }
    }
    .Online-Visit{
        display:grid;
        grid-templete-column:1fr;
        row-gap: 5px;
        div:nth-child(1) {
            color:#496AD2;
            font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 159.69%;
/* identical to box height, or 26px */


          }
        div:nth-child(3) {
            color: rgba(41, 55, 95, 0.6);

          }
        div:nth-child(2){
            color:#496AD2;
        }
    }

    .Any-Time{
        display:grid;
        grid-templete-column:1fr;
        row-gap: 5px;
        div:nth-child(2){
            color: #FDBC60;
        }
        div:nth-child(3) {
            color: rgba(41, 55, 95, 0.6);

        }

        div:nth-child(1) {
            color: #FDBC60;
            font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 159.69%;
/* identical to box height, or 26px */
          }
          
    }
}
`;