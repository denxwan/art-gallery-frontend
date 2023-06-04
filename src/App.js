import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateArtifact from './CreateArtifact';
import ArtifactDetails from './ArtifactDetails';
import NotFound from './NotFound';
import AvailableArtifacts from './AvailableArtifacts';
import EditArtifact from './EditArtifact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/artifacts/create">
              <CreateArtifact />
            </Route>
            <Route exact path="/artifacts/:id">
              <ArtifactDetails />
            </Route>
            <Route exact path="/gallery">
              <AvailableArtifacts />
            </Route>
            <Route exact path="/edit/:id">
              <EditArtifact />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
