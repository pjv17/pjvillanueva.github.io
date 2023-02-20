import React from "react";
import './styles/Section.scss';
import { ReactComponent as WPIcon} from './assets/image/Skillset/WordPress.svg';
import { ReactComponent as BootstrapIcon} from './assets/image/Skillset/BOOTSTRAP.svg';
import { ReactComponent as CSS3Icon} from './assets/image/Skillset/CSS3.svg';
import { ReactComponent as HTML5Icon} from './assets/image/Skillset/HTML5.svg';
import { ReactComponent as JavaScriptIcon} from './assets/image/Skillset/Javascript.svg';
import { ReactComponent as JQUERYIcon} from './assets/image/Skillset/JQUERYICO.svg';
import { ReactComponent as MYSQLIcon} from './assets/image/Skillset/MYSQL.svg';
import { ReactComponent as NODEJSIcon} from './assets/image/Skillset/NODEJS.svg';
import { ReactComponent as PHPIcon} from './assets/image/Skillset/PHP.svg';
import { ReactComponent as REACTIcon} from './assets/image/Skillset/REACT.svg';
import { ReactComponent as TailwindIcon} from './assets/image/Skillset/TAILWINDICO.svg';
import { ReactComponent as SASSIcon} from './assets/image/Skillset/SASS.svg';
import Particle from "./Particle";

const Section = () => {
    return(
        <div className="sections section__skillset relative z-10">
            <div className="sections__container container">

                <div className="section__content_about_me py-10 text-center px-4 sm:px-6 z-20 relative">
                    <h2 className="mb-10">About <span className="secondary-color font-extrabold">Myself</span></h2>
                    <p className="text-xl">I do love learning new technologies like Front-end/Back-end Frameworks. Currently, I am learning <span className="secondary-color font-extrabold">REACT</span> that's why I built this website!</p>
                    <p className="text-xl">I am proficient working with <span className="secondary-color font-extrabold">PHP</span> and <span className="secondary-color font-extrabold">WordPress</span>. Furthermore, my field of interest are building websites and applications.</p>
                    <p className="text-xl">Whenever possible, I also apply my passion for developing websites with <span className="secondary-color font-extrabold">Node.js, Modern Javascript libraries</span> like <span className="secondary-color font-extrabold">Tailwind CSS</span> and <span className="secondary-color font-extrabold">Bootstrap 5</span>.</p>
                </div>
                
                <div className="section__content py-10 text-center px-4 sm:px-6">           
                <Particle className="z-5" />      
                    <h2 className="mb-10 z-10 relative">Professional <span className="secondary-color">Skillset</span></h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="web-tech-icon relative" title="PHP">
                           <PHPIcon />              
                           <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">PHP</div>                              
                        </div>
                        <div className="web-tech-icon relative" title="REACTJS">
                            <REACTIcon />     
                            <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">React</div>                              
                        </div>
                        <div className="web-tech-icon relative" title="NODE.JS">
                            <NODEJSIcon />             
                            <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">NODE</div>                                                      
                        </div>
                        <div className="web-tech-icon relative" title="CSS3">
                            <CSS3Icon />   
                            <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">CSS3</div>                                                              
                        </div>
                        <div className="web-tech-icon relative" title="HTML5">
                        <HTML5Icon />             
                        <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">HTML5</div>                                                             
                        </div>
                        <div className="web-tech-icon relative" title="jQuery">
                        <JQUERYIcon />  
                        <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">jQuery</div>                                                               
                        </div>
                        <div className="web-tech-icon relative" title="MYSQL">
                        <MYSQLIcon />    
                        <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">MYSQL</div>                                                                   
                        </div>
                        <div className="web-tech-icon relative" title="WordPress">
                        <WPIcon />  
                        <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">WordPress</div>                                                                   
                        </div>
                        <div className="web-tech-icon relative" title="Tailwind">
                        <TailwindIcon />  
                        <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">Tailwind CSS</div>                                                                             
                        </div>
                        <div className="web-tech-icon relative" title="Javascript">
                        <JavaScriptIcon />                
                        <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">JavaScript</div>                                                    
                        </div>
                        <div className="web-tech-icon relative" title="Bootstrap">
                        <BootstrapIcon />
                        <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">Bootstrap</div>                                                                    
                        </div>
                        <div className="web-tech-icon relative" title="SASS">
                        <SASSIcon />   
                        <div className="hover-title-skillset opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold">SASS</div>                                                                         
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;