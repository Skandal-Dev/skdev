import './App.sass';
import React from 'react';
import Particles from "react-tsparticles";
import logo from './logo.png';
import CV from './CV.png';
import Competence from './pages/competence';

const App = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    <div className="App">
    {/*<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
       
        fpsLimit: 30,
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.5,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ff9ef9",
          },
          links: {
            color: "#f25e956b",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}  
    />*/}
        <img className="center_logo" src={logo}/>

      <div class="grid">

        <div class="module">
          <div class="module-header">
          

            <div id="onglet_container">
              <div className=''>
                <div class="box-label">
                  <span class="file-name">  <kbd>Home</kbd></span>
                </div>
              </div>
              <div className="add">+</div>


              <div class="box-button">
                <div class="button green"></div>
                <div class="button orange"></div>
                <div class="button red"></div>
             </div>
            </div>

           
          </div>

          <div class="module-body">
            <div class="code-area">
              <div class="text-label">
                  Home
              </div>
              <div class="text-area">
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
             <div class="text-area">
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
         
              
        </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
