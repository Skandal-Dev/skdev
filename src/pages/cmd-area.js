import React from "react";
import ReactDOM from "react-dom";
import Competence from "./competence";
import Cmd from "./cmd/cdm";

class CmdArea extends React.Component {

    setInput(e){
        if (e.key == 'Enter')
            alert('hey')
        return 'rien'
    }
    render() {
        return (
            <div class="code-area">
            <div class="text-label">
                Home
            </div>
            <div className="text-area">
                
                <code className="output">
                    <div className="hr"></div>
                Bienvenue sur mon site personnel !
                La navigation sur mon site ne se fait qu'uniquement via les fonctions intégré dans l'interprete de commande !
                Afin de continuer la navigation de manière suivie, veuillez valider les prochaines entrées !
                N'oublier pas, la fonction Help peut vous guidez à tout moment.
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

        
                {/*<Cmd cmd="help"></Cmd>
                <Cmd cmd="ls"></Cmd>
                <Cmd cmd="go CV"></Cmd>
                <Cmd cmd="go NullePart"></Cmd>     
                <Cmd cmd="go Competences"></Cmd>*/}
                <Cmd onKeyDown={this.setInput} ></Cmd>     

            </div>
        );       
    }
}

export default CmdArea;
