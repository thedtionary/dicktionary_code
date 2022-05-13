import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Term from './pages/Term';
import FormPage from './pages/FormPage';
import Info from './pages/Info';
import Thank from './pages/Thank';
import Enter from './pages/Enter';


const App = () => {
  return (
    <>
    <Router>
      <Switch>
      <Route  exact path='/' >
          <Enter/>
          </Route>
        <Route  exact path='/home' >
          <Home/>
        </Route>
        <Route path ='/term/:slug'>
          <Term />
        </Route>
        <Route exact path='/info'>
          <Info/>
        </Route>
        <Route exact path='/form'>
          <FormPage />
        </Route>
        <Route  exact path='/thankyou'>
          <Thank />
        </Route>
      </Switch>
    </Router>
    </>
  );
};

export default App;
