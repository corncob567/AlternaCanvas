import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navigation/navbar.js';
import React, { Component }  from 'react';
import ChatWindow from './components/ChatWindow'




const App = () => {
    return (
        <div className='App'>
            <div className='navBarColumn'>
              <NavBar/>
            </div>
            <div className='pageOutletWrapper'>
              <Outlet/>
            </div>
            <div className='chatColumn'>
              <ChatWindow/>
            </div>
        </div>
    );
} 

export default App;
