import React from "react";
import { Navbar } from "../Navbar/Navbar";
import styled from 'styled-components';
import List from '../assets/png/List.png'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

export const ListOfAppointments = () => {
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
    return (
        <ListContainer>
            <Navbar />

            <ListHeader>
                <div className="head">Appointments</div>
                <div className="text">List of booked appointments</div>
                <hr></hr>
                <Filters>
                    <div><TextField className="Search"
                        label="Search"
                        varient='outlined'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    /></div>
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

                </Filters>
                <span>Image hard coded</span>
                <div class="List">
                                <img src={List} alt="" />
                </div>
            </ListHeader>

        </ListContainer>
    )
}

const ListContainer = styled.div`
    display:flex;
`;

const ListHeader = styled.div`
width:90%;
margin:74px 50px;
    .head{
        width: 179px;
        height: 33px;
        left: 117px;
        top: 74px;
        font-style: normal;
        font-weight: 600;
    font-size: 26px;
    line-height: 125%;



    color: #29375F;

        
    }
    .text{
        height: 22px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: rgba(41, 55, 95, 0.6);
    }
`;

const Filters = styled.div`
display:flex;
justify-content:space-evenly;
.Search{
   padding:0px 20px;
}
.List{
    position: absolute;
width: 1261px;
height: 575px;
left: 109px;
top: 268px;
margin:20px;
background: #FFFFFF;
box-shadow: 0px 4px 10px #E5E6EF;
border-radius: 6px;
}
.MuiFormControl-root {
    border: 1px solid black;
    border-radius:6px;
    margin: 0;
    display: inline-flex;
    padding: 0;
    position: relative;
    min-width: 0;
    flex-direction: column;
    vertical-align: top;
    align-items:center;
    border-radius:20px;
    width:200px;
}
// .MuiFormControl-root {
//     border: 1px solid black;
//     border-radius:20px;
//     width:200px;
//     margin: 0;
//     display: inline-flex;
//     padding: 0;
//     position: relative;
//     min-width: 0;
//     flex-direction: column;
//     vertical-align: top;
//     align-items:center;
// }

.MuiFormLabel-root {
    color: rgba(0, 0, 0, 0.54);
    padding: 0;
    font-size: 18px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 600;
    line-height: 0;
    letter-spacing: 0.00938em;
    background-color:red;
}
.MuiInputLabel-formControl {
    top: -2px;
    left: 18px;
    position: absolute;
    // transform: translate(0, 24px) scale(1);
}
.fXbtHS .Earnings .Earning-Content .Selection-Content .MuiInputLabel-formControl {
    top: -9px;
    left: 18px;
    position: absolute;
    background-color: white;
}
`;