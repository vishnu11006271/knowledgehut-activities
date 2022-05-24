import { useState } from 'react';
import { Success } from './Authenticate';
export function Conditional() {
    let [isLoggedIn, setIsLoggedIn] = useState(false);
    let [username, setUsername] = useState('Guest');
    if (!isLoggedIn){
        return(
            <div>
                <h2>Login Form</h2>
                <label>
                    Username <input type= 'text' name = 'un' autoComplete='off'
                    onChange = {(e) => setUsername(e.target.value)}></input>
                </label>
                <button onClick= {() => {setIsLoggedIn(true)}}>Login</button>
                <div>Username: {username}</div>
            </div>)
    } else{
        return(<div>
            <Success name = {username} />
        </div>)
    }
}