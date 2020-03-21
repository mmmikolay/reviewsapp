import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';

//STYLES
import './authform.css';

const AuthForm = () => {
    const emailEl = useRef(null);
    const passwordEl = useRef(null);
    let history = useHistory();


    const submitForm = async event => {
        event.preventDefault();
        const email = emailEl.current.value;
        const password = passwordEl.current.value;
        try {

        if(email.trim().length === 0 || password.trim().length === 0) {
            return;
        }

        let requestBody = {
            query: `
              query {
                login(email: "${email}", password: "${password}") {
                  success
                }
              }
            `
          };

        const res = await fetch("http://localhost:4000/graphql", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(requestBody),
            headers:{
                "Content-Type":"application/json"
            }
        })

        if(res.status !== 200 && res.status !== 201){
            throw new Error ("Failed!");
        }
        const resData = await res.json();
            if(resData.data){
                document.cookie = 'signedin=true';
            }
            if(Cookies.get("signedin"))
            {history.push("/admin_panel")};
        }

        catch(err){
            throw new Error("Authentication Failure!");
        };
    }

    return (
    <>
    <div className="login-form-container">
        <form className="login" >
            <h2>Log in</h2>
            <div className="field">
                <label htmlFor="email">E-Mail</label>
                <input 
                type="email" 
                placeholder= "e-mail"
                ref={emailEl}
                />
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    placeholder="Password"
                    ref={passwordEl}
                />
            </div>
            <button className= "submit-form" onClick={submitForm}>Log in</button>
        </form>
    </div>

    </>
    )
}

export default AuthForm
