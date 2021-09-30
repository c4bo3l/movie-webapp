import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailPage, MainPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/detail/:imdbId' component={DetailPage} />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
