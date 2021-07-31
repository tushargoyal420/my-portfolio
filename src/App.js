import { Route, Switch } from "react-router-dom";
import "./components/css/GlobalStyles.css"
import Header from "./components/header/Header";
// import Particle from './components/small/Particle'
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="app">
      <div className="page">
        <Header/>
        {/* <Particle > */}
        {/* </Particle > */}
        <div className="leftbar">        
            <Switch >
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/contact" component={Contact} />
            </Switch>  
          </div>
        </div>
      </div>
  );
}

export default App;
