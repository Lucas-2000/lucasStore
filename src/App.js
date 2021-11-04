import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Products from "./pages/Products";
import Register from "./pages/Register";
import './styles/global.scss'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/products' component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
