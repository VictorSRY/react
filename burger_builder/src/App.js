import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import BurgerBulder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {
  return (
    <div >
      <Layout>
        <br/>
        <br/>
        <br/>
        <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
        <Route path='/auth' component={Auth} />
        <Route path='/' component={BurgerBulder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
