import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { HomePage } from './containers/Homepage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserPage } from './containers/UserPage';

function App() {

  const store = useSelector((state) => state);


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userId" component={UserPage} />
          <Route>404 Not Found !</Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
