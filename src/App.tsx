import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailPage, MainPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/detail/:imdbId' component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
