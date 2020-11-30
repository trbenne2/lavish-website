
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/HomePage/Home';

function App() {
  return (
    
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
     </Router>
    
  );
}

export default App;
