import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContacList from './pages/contact-list'
import { NotFound } from './pages/not-found'
import { URL_LIST } from './pages/urlList'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">Contact List Application Example</header>
      <BrowserRouter>
        <Switch>
          <Route exact path={URL_LIST.CONTACT_LIST} component={ContacList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
