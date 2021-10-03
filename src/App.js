import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { homeRoutes } from "../src/pages/home/homeRoutes";
import "./assets/styles/app.scss";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {homeRoutes.map(({ path, component, key }) => (
            <Route exact path={path} component={component} key={key} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
