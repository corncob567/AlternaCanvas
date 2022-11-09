import Navigation from './components/navigation/navbar.js';
import { Outlet } from 'react-router-dom';
import { Row } from '@carbon/react';

const App = () => {
    return (
        <div className='App'>
            <div className='grid-container'>
                <Row>
                    <Navigation/>
                </Row>
            </div>
        <Outlet/>
        </div>  
    );
} 

export default App;
