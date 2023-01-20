import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { DashBoard } from './components/Dashboard';
import { Appointments } from './components/Appointments';
import { ListOfAppointments } from './components/ListOfAppointments';
import { ScheduleList } from './components/ScheduleList';
function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route exact path='/' element={<Login />}></Route>
  <Route exact path='/dashboard' element={<DashBoard />}></Route>
  <Route exact path='/appointments' element={<ListOfAppointments />}></Route>
  <Route exact path='/schedule' element={<ScheduleList/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
