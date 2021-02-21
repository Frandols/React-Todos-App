import React from 'react';

const Register = ({setUserName, setUserPhoto, userName, userPhoto}) => {

    // Functions

    const userNameHandler = (e) => {

        setUserName(e.target.value);

    }

    const userPhotoHandler = (e) => {

        var reader = new FileReader();

        reader.onload = () => {

            setUserPhoto(reader.result)

        }

        reader.readAsDataURL(e.target.files[0])

    }

    const registerHandler = () => {

        if(userName === '' || userName.length > 12){

            alert('User name has to have from 1 to 12 characters...');
            return;

        }
        else{

            localStorage.setItem('user-name', userName);

        }

        if(userPhoto !== ''){

            localStorage.setItem('user-image', userPhoto);

        }

        window.open(process.env.PUBLIC_URL + '/', '_self');

    }
    
    return(
        <div className='register'>
            <div className='register-card'>
                <h1>Hi! Welcome to your to-dos list!</h1>
                <label>Your photo (optional):</label>
                <input  type='file' onChange={userPhotoHandler}/>
                <div className='register-card-send'>
                    <input type='text' name='user-name' className='form-reg-input' onChange={userNameHandler} placeholder='Name'></input>
                    <button className='form-add-button' onClick={registerHandler}>Send</button>
                </div>
                <div className='register-card-info'>
                    <p>We don't take any information of this, this application just works with the memory of your navigator, 
                        it doesn't go to any server or database. For this reason, your navigator has to have te local storage memory enabled, otherwise, 
                        your credentials and to-dos will be deleted always you go out of the page.</p>
                </div>
            </div>
        </div>
    );

}

export default Register;