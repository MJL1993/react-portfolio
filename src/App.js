import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import WebDev from './components/Pages/WebDev';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/react-portfolio" component={HomePage}>
        <HomePage/>
        </Route>
        <Route exact path="/WebDev" component={WebDev}>
           <WebDev/>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
