import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DetailPage, MainPage } from './pages';
import { DETAIL_LINK, MAIN_LINK } from './shared';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${MAIN_LINK}/`} component={MainPage} />
        <Route exact path={`${DETAIL_LINK}/:imdbId`} component={DetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
