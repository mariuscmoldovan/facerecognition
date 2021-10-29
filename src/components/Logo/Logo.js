import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.gif'
import './Logo.css';


const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2"  options={{ max : 15 }} style={{ height: 100, width: 150 }}>
            <div className="Tilt-inner pa3">
                 <img style={{paddingTop:'1px', width:"100px", height:"70px"}} alt='logo' src={brain}/>
             </div>
        
            </Tilt>
         </div>
    )
}
export default Logo