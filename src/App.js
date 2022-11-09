import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/navigation/navbar.js';
import ChatColumn from './components/chat/chatcolumn.js';


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
              <ChatColumn/>
            </div>
        </div>
    );
} 

export default App;
