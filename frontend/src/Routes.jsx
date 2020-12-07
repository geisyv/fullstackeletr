import { BrowserRouter, Switch, Route } from 'react';

import Home from './Views/Home';
import ContactUs from './Views/Contato';
import Products from './Views/Produtos';
import Requests from './Views/Requests';
import OurStores from './Views/NossasLojas';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Contato' component={ContactUs} />
        <Route path='/Produtos' component={Products} />
        <Route path='/pedidos' component={Requests} />
        <Route path='/lojas' component={OurStores} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
