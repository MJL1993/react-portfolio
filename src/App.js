import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/react-portfolio" component={HomePage}>
        <HomePage/>
        </Route>
    </Switch>
    </Router>
  );
}

export default App;
