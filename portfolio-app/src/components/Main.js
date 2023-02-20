import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import './styles/Main.scss';
import pjpic from './assets/image/PJ Villanueva - MTA.jpg';
import pjresume from './assets/resume/Peter+John+Villanueva Resume 2023.pdf';
import { Link } from "react-router-dom";


const Main =() => {
    return (        
        <div className="main">      
            <div className="main__container container mx-auto pt-5 z-10">
                <div className="main__content">
                    <div className="text mx-auto">
                        <p>Hello Everyone!</p>
                        <h1>I am <span className="secondary-color">Peter</span></h1>
                        <p className="secondary-color">Full Stack Developer</p>
                        <div className="icons">
                            <Link to={"https://www.linkedin.com/in/pj-villanueva/"} target="_blank"><LinkedIn className="icon" /></Link>
                            <Link to={"https://github.com/pjv17"} target="_blank"><GitHub className="icon"/>  </Link>         
                            <Link to={"https://www.instagram.com/pjvillanueva17"} target="_blank"><Instagram className="icon"/>  </Link>                   
                        </div>

                        <div className="buttons my-5">
                            <a href={pjresume} className="btn" download="Peter-John-Villanueva-Resume2023">Download My CV</a>
                        </div>
                    </div>

                </div>

                <div className="main__img">
                    <img src={pjpic} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Main;