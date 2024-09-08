import "../login.css";
import React from "react";
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import "../assets/lgn.jpeg";
import Header from "./header";
import {useState} from "react";
import axios from "axios";

function Register() {

    const [username,setUsername] = useState([]);
    const [password,setPassword] = useState([]);
    const [email,setEmail] = useState([]);

    
    axios.post('http://localhost:8180/register',{username,email,password}).then(res=><Link to="/home"></Link>).catch(err=>console.log(err));


    return(
        <div className="lgnpg">
            <Header/>
            <h4>Let us know you first!</h4>
            <div className="lgnfrm">
                <Marquee className="marq"><h3>Let us know you!</h3></Marquee>
                <form action="/login" method="get" style={{color:"black"}}>
                    <div className="user">
                    <label>Username</label>
                    <br></br>
                    <input placeholder="Enter your Username here" type="text" onChange={e=>setUsername(e.target.value)}></input>
                    </div>
                    <br></br>
                    <div className="pwd">
                    <label>Password</label>
                    <br></br>
                    <input placeholder="Enter your Password here" type="password" onChange={e=>setPassword(e.target.value)}></input>
                    </div>
                    <br></br>
                    <div className="email">
                    <label>E-mail address</label>
                    <br></br>
                    <input placeholder="Enter your E-mail address here" type="text" onChange={e=>setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <button type="submit" className="subbut">Submit!</button>
                    </div>
                    <div>
                         <Link className="linktext" style={{textDecoration:"none",color:"red"}} to="/login"> Already an existing user? Login!</Link>
                    </div>
                    

                </form>
            </div>
        </div>
    );
    
}
export default Register