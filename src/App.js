import { Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import SideHeader from "./components/header/SideHeader";
import "./components/css/GlobalStyles.css"
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App flex flex-row">
      {/* <Header/> */}
    
        {/* <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch> */}

      {/* <div className="flex flex-row"> */}
          <div className="left" style={{width:'80%'}}>
              <h1>LeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeftLeft</h1>
          </div>
          <div className="right" style={{width:'20%'}}>
              <h1>right</h1>
            
          </div>


      {/* </div> */}
    
    
    
    
        </div>
  );
}

export default App;
