import React from "react";


class CV extends React.Component{
    

    render(){
        return (
            <div id="CV">
                <h1 className="title-competence">
                    Download PDF
                </h1>
                <br/>
                <h1 className="title-competence">
                    ALEXANDRE MTIMET
                </h1>
                <br/>
                <div className="hr"></div>
                <h1 className="title-competence">
                    Expériences
                </h1>
                <div className="hr"></div>

                <ul className="bg-cmd">
            
                    <li className="object-details object-">
                    
                        <span>2019/2020 - Développeur Web/Mobile Full Stack @ Sogeti Lab's - Sogeti</span>
                        <p>Stage de 4 mois, méthode de travail en groupe: agilité Scrum</p>
                        <p>HTML, CSS, PHP, JS, RUBY, ANGULARJS, VUE.JS, REACT JS, BRAIN.JS</p>
                        <p>Python, Symfony, Laravel</p>
                    </li>
                    <div className="hr"></div>

                    <li className="object-details object-">
                    
                    <span>2017 - Développeur Web Full-Stack @ INSEP </span>
                    <p>Stage de 4 mois, Service Inovation Informatique</p>
                    <p>HTML, CSS, PHP, JS, SQL</p>
                    <p>Photoshop, Illustrator</p>
                    </li>
                    <div className="hr"></div>

                    <li className="object-details object-">
                        
                        <span>2015 - WebSchool - Service Autonome de Gestion d'Etablissement Scolaire</span>
                        <p>Projet Bac: 18/20</p>
                        <p>HTML, CSS, PHP, JS, JQUERY, BOOSTRAP, AJAX</p>
                        <p>RaspBerr Pie & SQL database</p>
                    </li>
                    <div className="hr"></div>

                </ul>

                <h1 className="title-competence">
                    Compétences
                </h1>
                <div className="hr"></div>

                <ul className="">
                    <li className="rounded object-cv cpt-100p green-cpt"> <span> WEB DEV</span>2010-2022</li>
                    <li className="rounded object-cv cpt-100p green-cpt"> <span> UI & UX</span>2015-2022</li>
                    <li className="rounded object-cv cpt-100p green-cpt"><span>Design</span>2015-2022</li>
                    <li className="rounded object-cv cpt-100p green-cpt"><span>Team Work</span>2013-2022</li>
                    <li className="rounded object-cv cpt-60p orange-cpt"><span>Software DEV</span>2015-2020</li>
                </ul>
                <div className="hr"></div>


                <h1 className="title-competence">
                    Etudes & Diplomes 
                </h1>
                <div className="hr"></div>

                <ul>
                    <li className="object-cv cpt-100p grey-cpt">Epita <span> Cycle Ingénieur</span>2017-2022</li>
                    <li className="object-cv cpt-100p grey-cpt">Epita <span> Classe Préparatoire</span>2015-2017</li>
                    <li className="object-cv cpt-100p grey-cpt">Bac STI2D <span>Mention Très Bien</span>2015</li>
                    <li className="object-cv cpt-100p grey-cpt">Brevet <span>Mention Très Bien</span>2013</li>
                </ul>
                <div className="hr"></div>


            </div>
        )
    }
}

export default CV;