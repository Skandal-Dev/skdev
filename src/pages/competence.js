import React from 'react';
import ReactDOM from 'react-dom';
import competence from './competence.sass';
import bootstrap from './../bootstrap.png';
import css from './../css.png'; 
import sass from './../sass.png';
import vue from './../vue.png';
import react from './../react.png';
import javascript from './../javascript.png';
import es6 from './../es6.png';
import angular from './../angular.png';
import redux from './../redux.png';
import php from './../php.png';
import symfony from './../symfony.png';
import html from './../html.png'
import webpack from './../webpack.png';
import stylus from './../stylus.png';
import yarn from './../yarn.png';
import vscode from './../vs code.png';
import npm from './../npm.png';
import laravel from './../laravel.png';
import python from './../python.png';
import django from './../django.png';
import c from './../c.png';
import cpp from './../cplusplus.png';
import csharp from './../csharp.png';
import java from './../java.png'
import mysql from './../mysql.png';


class Competence extends React.Component{

    render(){
        return(
            <div id="competence">
                <h3 className="title-competence">
                    Front End
                </h3>

                <div className="hr"></div>

                <ul id="cpt-javascript"> 

                    <div  className="wrap">
                        <h3 className="title-competence">
                            Javascript & Framework
                        </h3>
                
                        <div className="hr"></div>

                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img src={javascript} alt="" srcset="" />
                            </div>
                            <span>Javascript</span>
                        </li>


                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img src={react} alt="" srcset="" />
                            </div>
                            <span>React</span>
                        </li>

                        <li>
                            <div className="object-competence cpt-60p green-cpt">
                                <img src={redux} />
                            </div>
                            <span>Redux</span>
                        </li>


                        <li>
                            <div className="object-competence cpt-40p orange-cpt">
                                <img className="adjust-cpt-img" src={angular} />
                            </div>
                            <span>Angular</span>
                        </li>

                        <li>
                            <div className="object-competence cpt-60p green-cpt">
                                <img src={vue} />
                            </div>
                            <span>Vue</span>
                        </li>

                   
                    </div>

                    <div id="cpt-css" className="wrap">
                    <h3 className="title-competence">
                        Css & Framework
                    </h3>
                    
                    <div className="hr"></div>

                    <li>
                        <div className="object-competence cpt-100p perfect-cpt">
                            <img src={css} alt="" srcset="" />
                        </div>
                        <span>Css</span>
                    </li>


                    <li>
                        <div className="object-competence cpt-100p perfect-cpt">
                            <img src={sass} alt="" srcset="" />
                        </div>
                        <span>Sass</span>
                    </li>

                    <li>
                        <div className="object-competence cpt-100p perfect-cpt">
                            <img className="adjust-cpt-img" src={bootstrap} />
                        </div>
                        <span>Bootstrap</span>
                    </li>
                    <li>
                        <div className="object-competence cpt-80p perfect-cpt">
                            <img className="" src={stylus} />
                        </div>
                        <span>Stylus</span>
                    </li>

                    </div>


                    <div id="cpt-html" className="wrap">

                        <h3 className="title-competence">
                            HTML & Framework
                        </h3>
                    
                        <div className="hr"></div>

                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img className="" src={html} />
                            </div>
                            <span>HTML5</span>
                        </li>
                    </div>
                </ul>

                <h3 className="title-competence">Back End</h3> 
                <div className="hr"></div>


                <h3 className="title-competence">
                            Php & Framework
                        </h3>
                        
                <ul id="cpt-php"> 
                       
                        <div className="hr"></div>
                            <li>
                                <div className="object-competence cpt-80p perfect-cpt">
                                        <img className="" src={php} />
                                </div>
                                <span>PHP</span>
                            </li>

                            <li>
                                <div className="object-competence cpt-80p perfect-cpt">
                                        <img className="adjust-cpt-img" src={symfony} />
                                </div>
                                <span>Symfony</span>
                            </li>

                            <li>
                                <div className="object-competence cpt-80p perfect-cpt">
                                        <img className="adjust-cpt-img" src={laravel} />
                                </div>
                                <span>Laravel</span>
                            </li>
                        </ul>

                   
                        <h3 className="title-competence">
                            Other Framework
                        </h3>
                
                    
                    <div className="hr"></div>
                    
                    
                    <ul>
                         <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img className="adjust-cpt-img" src={django} />
                            </div>
                            <span>django</span>
                        </li>

                    </ul>
                   
                   
                    <div id="cpt-db" className="wrap">
                    <h3 className="title-competence">
                        Data base & Framework
                    </h3>

                    <ul>
                        
                        <div className="hr"></div>
                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img className="adjust-cpt-img" src={mysql} />
                            </div>
                            <span>MySQL</span>
                        </li>
                    </ul>
                </div>


                <h3 className="title-competence">
                    Web Dev Tools
                </h3>

                <div className="hr"></div>
                     <ul>
                        <div className="hr"></div>
                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img className="adjust-cpt-img" src={webpack} />
                            </div>
                            <span>Webpack</span>
                        </li>
                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img className="adjust-cpt-img" src={yarn} />
                            </div>
                            <span>Yarn</span>
                        </li>
                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img className="" src={es6} />
                            </div>
                            <span>ES6</span>
                        </li>
                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img className="" src={npm} />
                            </div>
                            <span>npm</span>
                        </li>
                    </ul>
                    <h3 className="title-competence">
                    Software Langage
                    </h3>

                <div className="hr"></div>
                     <ul>
                        <div className="hr"></div>
                        <li>
                            <div className="object-competence cpt-80p perfect-cpt">
                                <img className="adjust-cpt-img" src={python} />
                            </div>
                            <span>python</span>
                        </li>
                        <li>
                            <div className="object-competence cpt-80p green-cpt">
                                <img className="adjust-cpt-img" src={c} />
                            </div>
                            <span>C</span>
                        </li>
                        <li>
                            <div className="object-competence cpt-40p red-cpt">
                                <img className="adjust-cpt-img" src={cpp} />
                            </div>
                            <span>C++</span>
                        </li>
                        <li>
                            <div className="object-competence cpt-40p orange-cpt">
                                <img className="adjust-cpt-img" src={csharp} />
                            </div>
                            <span>C#</span>
                        </li>
                        <li>
                            <div className="object-competence cpt-40p orange-cpt">
                                <img className="adjust-cpt-img" src={java} />
                            </div>
                            <span>Java</span>
                        </li>
                    </ul>
                </div>

                
            
        );
    }
}

export default Competence;