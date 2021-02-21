import React, { useState } from 'react';

const HelpCard = () => {

    const [menuDisplay, setMenuDisplay] = useState(false);

    const menuDisplayHandler = () => {
        
        setMenuDisplay(!menuDisplay);

    }

    return(
        <div className='help-card'>
            <h1>Help</h1>
            <div className='help-card-preview'>
                <button className='help-card-show-content-btn' onClick={menuDisplayHandler}>
                    <i className="fas fa-chevron-down"></i>
                </button>
                <legend>Why my information does't gets saved?</legend>
            </div>
            <div className={`help-card-content-${ menuDisplay ? 'active' : 'hide' }`}>
                <p>
                    You have to enable the memory storage of your navigator, then, everytime you enter to the application that data will be recovered and used in the app.
                </p>
            </div>
            <button>
                <a href='/'>
                    <i className="fas fa-arrow-left fa-2x"></i>
                </a>
            </button>
        </div>
    );

}

export default HelpCard;