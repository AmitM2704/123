import "../login.css";
import React from "react";
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import "../assets/lgn.jpeg";
import Header from "./header";
import {useState} from "react";

function Login() {

    const [username,setUsername] = useState([]);
    const [Password,setPassword] = useState([]);



    return(
        <div className="lgnpg">
            <Header/>
            <h4>Let us know you first!</h4>
            <div className="lgnfrm">
                <Marquee className="marq"><h3>Let us know you!</h3></Marquee>
                <form style={{color:"black"}}>
                    <div className="user">
                    <label>Username</label>
                    <br></br>
                    <input placeholder="Enter your Username here" type="text"></input>
                    </div>
                    <br></br>
                    <div className="pwd">
                    <label>Password</label>
                    <br></br>
                    <input placeholder="Enter your Password here" type="password"></input>
                    </div>
                    <div>
                        <button type="submit" className="subbut">Submit!</button>
                    </div>
                    <div>
                         <Link className="linktext" style={{textDecoration:"none",color:"red"}} to="/register"> Not an existing user? Create Account!</Link>
                    </div>
                    

                </form>
            </div>
        </div>
    );
    
}
export default Login