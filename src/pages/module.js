import React from "react";
import ReactDOM from "react-dom";
import CmdArea from "./cmd-area";

class Module extends React.Component{

    render(){
        return (
            <div className="module"> 
                
                <div className="module-header">
                    
                    <div id="onglet_container" className="">
                        
                        <div className='flex-box-label'>
                            <div class="box-label">
                                <span class="file-name">
                                    <kbd>Home</kbd>
                                </span>
                            </div>
                            <div className="add-btn">+</div>
                        </div>
                        


                        <div class="box-button">
                            <div class="button green"></div>
                            <div class="button orange"></div>
                            <div class="button red"></div>
                        </div>
                    </div>

                    
                </div>

                <div class="module-body">
                    <CmdArea/>
                </div>
            </div>
        );
    }
}

export default Module;