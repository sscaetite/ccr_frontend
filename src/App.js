import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import HomePage from "./pages/Home";
import JourneyPage from "./pages/Journey";

const App = () => {
  return (
    <div>
      <Router>
        <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
          <Route exact path='/' component={HomePage} />
          <Route path='/journey' component={JourneyPage} />
        </AnimatedSwitch>
      </Router>
      
    </div>
  );
}

export default App;
