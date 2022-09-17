import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import EventParticipant from './pages/eventParticipant/EventParticipant';
import Faciale from './pages/presence/Faciale';
import Landing from './pages/landing/Landing';
import Login from './pages/login/Login';
import Protected from './route/Protected';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login'/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/landing' element={<Landing/>}/>
      <Route element={<Protected/>}>
        <Route path='/faciale' element={<Faciale/>}/>
        <Route path='/eventparticipant' element={<EventParticipant/>}/>
      </Route>
    </Routes>
  );
}

export default App;
