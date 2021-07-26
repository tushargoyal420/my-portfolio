import { Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import SideHeader from "./components/header/SideHeader";

function App() {
  return (
    <div className="App">
      <SideHeader />
      <div className="rightbar pl-40">
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
