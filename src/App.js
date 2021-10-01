import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Preloader from "./components/common/Preloader";
import Navbar from "./components/common/Navbar";
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';
import Footer from './components/common/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Preloader/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path='/contact' component={Contact}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
