import WelcomePage from "./pages/welcomePage/WelcomePage";
import GamePage from "./pages/gamePage/GamePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import {Route, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/game' component={GamePage} />
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
}

export default App;
