import React, { useState } from 'react';

// Components
import Menu from './Menu';

const Navbar = ({ userName, userPhoto }) => {

    const [menuStatus, toggleMenuStatus] = useState(false);

    const menuStatusHandler = () => {

        toggleMenuStatus(!menuStatus);
        
    }

    return(
        <div className='navigation-components'>
            <nav>
                <button className='burger-btn' onClick={menuStatusHandler}>
                    <i className="fas fa-bars fa-2x"></i>
                </button>
            </nav>
            <Menu menuStatus={menuStatus} menuStatusHandler={menuStatusHandler} userName={userName} userPhoto={userPhoto}/>
        </div>
    );

}

export default Navbar;