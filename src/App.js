import './styles/App.sass';
import React from 'react';
import Particles from "react-tsparticles";
import logo from './logo/logo.png';
import CV from './CV.png';
import Competence from './pages/competence';
import Particle from './pages/particle';
import Module from './pages/module';

const App = () => {
 

  return (
	<div className="App">
		

	
		<Particle/>
		<img className="center_logo" src={logo}/>

		<div class="grid">
			
			<Module></Module>
		</div>

	</div>
  );
}

export default App;
