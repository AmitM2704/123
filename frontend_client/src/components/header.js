import { Link } from "react-router-dom";
import "../header.css";
import {React} from "react";
import {useNavigate} from "react-router-dom";

function Header(){

//     let navigate = useNavigate();
//     const routechange = ()=>{
//     let path = "/login";
//     navigate (path);
// }


    return(
        <div>
            <nav className="nvgbar">
                <ul style={{listStyleType:"none"}}>
                    <Link className="link" style={{color:"blanchedalmond"}} to="/home"><li>Home</li></Link>
                    <Link className="link" style={{color:"blanchedalmond", textDecoration:"none"}} to="/services">Our Services</Link>
                    <li>About Us</li>
                    <li>Extras</li>
                    <Link style={{color:"#333"}} to="/register"><button type="button" id="strbtn" className="strbtn">Get Started!</button></Link>
                </ul>
                

                
            </nav>
        </div>
    );
}
export default Header