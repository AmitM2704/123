import React from "react";
import "../home.css";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import "../assets/p4.jpg";
import Header from "./header";




function Home() {



    return(
        <div className="main">
            <Header/>
            {/* <div className="main"></div> */}

            <div><h1 className="hero">Empowering Credit Access</h1>
                  <p>Transforming financing for underdeserved enterprises with cutting-edge AI technology</p>  
            </div>
            <div className="story">
                <h3>Our Story</h3>
                <div>
                    <p className="storytxt">Founded with a vision to democratize credit access for small businesses Languageplatform has evolved into a leader in innovative financial solutions.<br></br>
                    Serving a diverse clientele ranging from local startups to established enterprises, we have supporte thousands in achieving their business goals.</p>
                </div>
                
            </div>

            <div className="services">
                <div className="s">
                    <div id="p1" className="s1pic"><img src={p1}></img> </div>
                    <div className="caption1">
                        <p></p>
                    </div>
                <div className="s">
                    <div className="s2pic"><img src={p2}></img> </div>
                    <div className="caption2">
                        <p></p>
                    </div>
                </div>
                <div className="s">
                    <div className="s3pic"><img src={p3}></img> </div>
                    <div className="caption3">
                        <p></p>
                    </div>
                </div>

                    
                </div>
            </div>

        </div>
    );
    
}
export default Home;