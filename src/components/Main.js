import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import './styles/Main.scss';
import pjpic from './assets/image/PJ Villanueva - MTA.jpg';
import pjresume from './assets/resume/Peter John Villanueva Resume 2023.pdf';
import { Link } from "react-router-dom";

const Main =() => {
    return (        
        <div className="main flex 2xl:h-screen">      
            <div className="main__container container mx-auto pt-5 z-10">
                <div className="main__content">
                    <div className="text mx-auto">
                        <p>Hello Everyone!</p>
                        <h1>I am <span className="secondary-color name-header">Peter</span></h1>
                        <p className="secondary-color">Full Stack Developer</p>
                        <div className="icons">
                            <Link to={"https://www.linkedin.com/in/pj-villanueva/"} target="_blank"><LinkedIn className="icon" /></Link>
                            <Link to={"https://github.com/pjv17"} target="_blank"><GitHub className="icon"/>  </Link>         
                            <Link to={"https://www.instagram.com/pjvillanueva17"} target="_blank"><Instagram className="icon"/>  </Link>                   
                        </div>

                        <div className="buttons my-5 py-5">
                            <a href={pjresume} className="btn cv lg:inline-block mb-5 block text-center" download="Peter-John-Villanueva-Resume2023">Download My CV</a>
                            <a href="https://docs.google.com/document/d/1rduz1qGeDGl4sadzte3ZKdeS6hXDM21SCV0d9581gy4/edit?usp=sharing" className="btn portfolio lg:ml-5 lg:inline-block block text-center" target="_blank" rel="noopener noreferrer">Download My Portfolio</a>
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