import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Term from './pages/Term';
import FormPage from './pages/FormPage';
import Info from './pages/Info';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path ="/term/:slug">
          <Term />
        </Route>
        <Route path="/info">
          <Info/>
        </Route>
        <Route path="/form">
          <FormPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
