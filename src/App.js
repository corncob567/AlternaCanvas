import './App.css';
import { Outlet } from 'react-router-dom';
import CourseNav from './components/navigation/CourseNav';
import CourseSelector from './components/navigation/CourseSelector';
import ChatColumn from './components/chat/chatcolumn.js';


const App = () => {
    return (
        <div className='App'>
            <div className='courseSelector--container'>
              <CourseSelector/>
            </div>
            <div className='courseNav--container'>
              <CourseNav/>
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
