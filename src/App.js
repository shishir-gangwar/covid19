import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './components/home';

const history = require('history').createBrowserHistory;

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Switch location={location}>
                <Route exact path={'/'} component={Home} key={0} />
              </Switch>
            </div>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
