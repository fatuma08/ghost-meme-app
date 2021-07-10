import { useState } from 'react';
import '../App.css';
import { useHistory } from "react-router-dom";

async function loginUser(username, password) {
    // insert logic to check username/password combo
    if(username === "sifora" && password === "123") {
        return "successfully signed in";
    }
    else {
        return null;
    }
}

function Login({ setToken }) {
    const [failureMessage, setFailureMessage] = useState();

    let history = useHistory();

    async function handleSubmit(e) {
        let username = e.target[0].value;
        let password = e.target[1].value
        
        const token = await loginUser(username, password);
    
        if(token){
            setToken(token);
            history.push("/");
        }
        else{
            setFailureMessage("Incorrect username or password")
        }
    }
    
    return (
      <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text"/>
        </label>
        <label>
          <p>Password</p>
          <input type="password"/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <p>{failureMessage}</p>
      </form>
    </div>
    )
}

export default Login;