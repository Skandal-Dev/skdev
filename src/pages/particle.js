import React from "react";
import ReactDOM from "react-dom";
import Particles from "react-tsparticles";
const particlesInit = (main) => {
// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};
const particlesLoaded = (container) => {
	console.log(container);
};

class Particle extends React.Component{

    // View
    render(){
        return (
            <Particles
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
	    />
        );
    }
}

export default Particle;