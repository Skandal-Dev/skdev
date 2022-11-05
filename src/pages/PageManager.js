import React from "react";
import Competence from "./competence";
import CV from "./cv";

class PageManager extends React.Component {

    constructor(props){
        super(props);
        

        this.state = {
            page: this.props.page,
            name: this.props.name  
        }

    }

    renderPage(){
        if (!this.props.page)
            return null

        if (this.props.name === "404")
            return "<code>Error404 page not found</code>"
        if (this.props.name === 'Competences')
            return <Competence></Competence>
        else if(this.props.name === 'CV')
            return <CV></CV>;
    }


    render(){
        return(

            <div>
                {this.renderPage()}
            </div>
        );
    }
}

export default PageManager