import React from 'react';

const Menu = ({ menuStatus, menuStatusHandler, userName, userPhoto }) => {   

    return(
        <div className={`menu-${menuStatus ? 'active' : 'hide'}`}>
            <div className='menu-content'>
                <header className='menu-head'>
                    <div className='back'>
                        <button className='burger-btn' onClick={menuStatusHandler}>
                            <i className="fas fa-bars fa-2x"></i>
                        </button>
                    </div>
                    <div className='profile'>
                        {userPhoto ? <div className='profile-img'>
                            <img src={userPhoto}></img>
                        </div> : ''}
                        {userName ? <h2>Hello, {userName}.</h2> : <button className='form-reg-button'><a href='/register'>Register</a></button>}
                    </div>
                </header>
                <div className='menu-body'>
                    <ul>
                        <li><button><a href='/help'>Help</a></button></li>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Menu;