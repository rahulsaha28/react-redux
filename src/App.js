
import './App.css';
import EditNavBar from './components/EditNavBar/EditNavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <div>
      <Router>
        <EditNavBar />

        {/* switch case is here */}
        <Switch>

          {/* each movie */}
          <Route path="/movie/:id">
              <MovieDetail/>
          </Route>
          {/* for home page */}
          <Route path="/">
              <Home/>
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
