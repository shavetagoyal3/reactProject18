import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home/home.jsx';
import Solutions from './solutions/Solutions.jsx';

import Services from './services/Services.jsx';
import Industries from './industries/industries.jsx';
import Resources from './resources/resources.jsx';
import Clients from './clients/clients.jsx';
import Company from './company/companies.jsx';

class Main extends React.Component {
  render() {
    	return (
    		 <Switch>
		      <Route exact path='/' component={Home}/>
		      <Route exact path='/solutions' component={Solutions}/>

		      <Route exact path='/services' component={Services}/>
		      <Route exact path='/industries' component={Industries}/>
		      <Route exact path='/resources' component={Resources}/>
		      <Route exact path='/clients' component={Clients}/>
		      <Route exact path='/company' component={Company}/>
		    </Switch>
    	);
    }
}

export default Main;