import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LOGIN } from '../../queries/queries';

//STYLES
import './adminloginform.css';

const AdminLoginForm = () => {

    const [userInfo, setUserInfo] = useState({
        name: "",
        password: "",
    });


    const { loading, error, data } = useQuery(LOGIN,{
        variables:{
            email:userInfo.name,
            password:userInfo.password
        }
    });



    const submitForm = event => {
        event.preventDefault();
    }

    return (
    <>
    <div className="login-form-container">
        <form className="login" >
            <h2>Log in</h2>
            <div className="field">
                <label>USERNAME</label>
                <input 
                type="text" 
                placeholder= "Username"
                onChange={event => setUserInfo({
                    ...userInfo, 
                    name: event.target.value,
                })}
                />
            </div>

            <div className="field">
                <label>PASSWORD</label>
                <input 
                    type="text"
                    placeholder="Password"
                    onChange={event => setUserInfo({
                        ...userInfo, 
                        password: event.target.value,
                    })}
                />
            </div>
            <button className= "submit-form" onClick={submitForm}>Log in</button>
        </form>
    </div>

    </>
    )
}

export default AdminLoginForm
