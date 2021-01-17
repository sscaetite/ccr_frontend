import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AnimatedSwitch, spring} from 'react-router-transition';
import HomePage from './pages/Home';
import JourneyPage from './pages/Journey';

import './App.css';
import React, {useEffect} from 'react';
import {handleSession} from './utils/SessionHandler';
import LoginPage from './pages/Login';
import PhotosPage from './pages/Photos';
import GalleryPage from './pages/Photos/Gallery';
import SchedulePage from './pages/Photos/Schedule';

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
	return {
		opacity: styles.opacity,
		transform: `scale(${styles.scale})`,
	};
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
	return spring(val, {
		stiffness: 330,
		damping: 22,
	});
}

// child matches will...
const bounceTransition = {
	// start in a transparent, upscaled state
	atEnter: {
		opacity: 0,
		scale: 1.2,
	},
	// leave in a transparent, downscaled state
	atLeave: {
		opacity: bounce(0),
		scale: bounce(0.8),
	},
	// and rest at an opaque, normally-scaled state
	atActive: {
		opacity: bounce(1),
		scale: bounce(1),
	},
};

const App = () => {
	useEffect(()=> {
		handleSession();
	}, []);
	return (
		<div>
			<Router>
				<AnimatedSwitch atEnter={bounceTransition.atEnter}
					atLeave={bounceTransition.atLeave}
					atActive={bounceTransition.atActive}
					mapStyles={mapStyles}
					className="route-wrapper"
				>
					<Route exact path='/' component={HomePage} />
					<Route path='/journey' component={JourneyPage} />
					<Route path='/login' component={LoginPage} />
					<Route exact path='/photos' component={PhotosPage} />
					<Route path='/photos/gallery' component={GalleryPage} />
					<Route path='/photos/schedule' component={SchedulePage} />
				</AnimatedSwitch>
			</Router>
      
		</div>
	);
};

export default App;
