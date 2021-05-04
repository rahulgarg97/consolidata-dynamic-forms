import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

import FormList from './pages/FormList';
import Form from './pages/Form';
import FormEdit from './pages/FormEdit';
import FormResponse from './pages/FormResponse';
import Navbar from './Navbar';

function App() {
  return (<div className='container app'>
      <Navbar/>
          <Router>
            <Switch>
              <Route path='/' exact component={FormList}/>
              <Route path='/home' exact component={FormList}/>
              <Route path='/form/:id' exact component={Form}/>
              <Route path='/edit/:id' exact component={FormEdit}/>
              <Route path='/add' exact component={FormEdit}/>
              <Route path='/response/:id' exact component={FormResponse}/>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
