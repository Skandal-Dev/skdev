import React, { useState } from "react";
import ReactDOM from "react-dom";
import cmd from  "./cmd.sass";
import Competence from "../competence";
import PageManager from "../PageManager";

class Input extends React.Component {
    _handleKeyDown = (e) => {
    
    }
  
    render() {
      return <input className="cmd-input" type="text" onKeyDown={this._handleKeyDown} />
    }
  }
  


class Cmd extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            input: '',
            output: '',
            page: false,
            name: '',
            cmd: -1,
            cmdList: []
          }

        this.setInput = this.setInput.bind(this);
    }

    

    setInput(e){
        

        
        const firstWord = e.target.value.replace(/ .*/,'').toLowerCase();
        const listOfWords = e.target.value.split(' ');
        const length = e.target.value.length;


        if (firstWord === "help"){
            this.setState({
                output: `

                Help - Show all commands <br />
                Go [PAGE] - Navigate to a definate page <br />
                Ls - Display all pages <br />
                Contact [mail] [title] [message] - Send me an email <br />
                Clear - Clear terminal <br />
                `,
                page: false
            });
        }

        



        if (e.key === 'Enter') {
        const saveValue = e.target.value;
        this.setState({
            input: firstWord
        });


        // Si le mot est GO
        if (firstWord === "go"){

            // S'il a un argument
            if(listOfWords[1]){
            this.setState({
                output: `Moving to ${listOfWords[1]} ...`

            })

                if (listOfWords[1] == 'Home' || listOfWords[1] == 'CV' || listOfWords[1] == 'Projets' || listOfWords[1] == 'Passions' || listOfWords[1] == 'Portfolio' || listOfWords[1] == 'Contact'|| listOfWords[1] == 'Competences'){
                    this.setState({
                        page: true,
                        name: listOfWords[1]
                    })
                }
                else
                {
                    this.setState({
                        page: true,
                        name: '404'
                    })
                }
        
            }
            else
            {
                this.setState({
                    output: `go [destination]`,
                    page: false
                });
            }

            //err hdl
            if (listOfWords[1]){
              
            
        }
            

            //logic
            
        }
        else if (firstWord === "gif"){
            
        }
        else if (firstWord === "clear"){
            this.setState({
                output: '',
                page: false
            })
        }
        else if (firstWord === "music"){}
        else if (firstWord === "ls"){
            this.setState({
                output: `<ul>
                <li><span className="fetch">CV</span></li>
                <li><span className="fetch">Projets</span></li>
                <li><span className="fetch">Competences</span></li>
                <li><span className="fetch">Portfolio</span></li>
                <li><span className="fetch">Contact</span></li>
            </ul>`,
            page: false
            })
        }
        else if (firstWord === "help"){}
        else{
            this.setState({
                output: 'unknown cmd',
                page: false
            })
        }
        
    

        console.log(listOfWords);
    }   
        
    }

    componentDidMount(){
        return console.log("cmd montée")
    }

    

    render() {
        return (
            <div id="Cmd" className="">
                <div id="Cmd-text-area" class="text-area">
                    <code id="Cmd-Input" className="">
                        <input className="cmd-input" type="text" onKeyDown={this.setInput} onKeyDownCapture={this.setInput} onFocus={this.setInput} placeholder="Write a command" value={this.props.cmd}>
                        </input>
                    </code>
                    <br />
                    <code  id="Cmd-Output" className="output" dangerouslySetInnerHTML={{__html: this.state.output}}>

                    </code>
                    <div className="hr"></div>
                    <div className="hr"></div>
                    <div className="hr"></div>
                    <div className="hr"></div>
                    <div className="hr"></div>

                    <div className="" id="PageManager">
                       <PageManager page={this.state.page} name={this.state.name}></PageManager>
                    </div>
                </div>
            </div>
        );
        
        
    }
};


export default Cmd;