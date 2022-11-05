import React from "react";
import ReactDOM from "react-dom";
import Competence from "./competence";
import Cmd from "./cmd/cdm";

class CmdArea extends React.Component {

    render() {
        return (
            <div class="code-area">
            <div class="text-label">
                Home
            </div>
            <div className="text-area">
                <code>help</code>
                <br />
                <code className="output">
                Help - Show all commands <br />
                Go [PAGE] - Navigate to a definate page <br />
                Ls ([-a]) - Display all pages <br />
                Music - Pop up Music player <br />
                Gif - Pop up random Gif <br />
                Contact [mail] [title] [message] - Send me an email <br />
                Clear - Clear terminal <br />
                </code>
            </div>
            {/*<div class="text-area">
            <code>ls</code>
            <br />
            <code className="output">
            <ul>
                <li><span className="fetch">Home</span></li>
                <li><span className="fetch">CV</span></li>
                <li><span className="fetch">Projets</span></li>
                <li><span className="fetch">Passions</span></li>
                <li><span className="fetch">Portfolio</span></li>
                <li><span className="fetch">Contact</span></li>
            </ul>
            </code>
            </div>
            <div class="text-area">
                <code>go CV</code>
                <br />
                <code className="output">Moving to CV ...</code>
                <Competence />
        </div>  

            <div class="text-area">
                <code>go CV</code>
                <br />
                <code className="output">Moving to CV ...</code>
            </div>
*/}

        
                <Cmd></Cmd>
                <Cmd></Cmd>
                <Cmd></Cmd>
                <Cmd></Cmd>     
            </div>
        );       
    }
}

export default CmdArea;
