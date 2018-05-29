import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home/home.jsx';
import Solutions from './solutions/Solutions.jsx';

import Services from './services/Services.jsx';
import Industries from './industries/industries.jsx';
import Resources from './resources/resources.jsx';
import Clients from './clients/clients.jsx';
import Company from './company/companies.jsx';

import BlockChain from './solutions/block_chain/block_chain.jsx';
import Cloud from './solutions/cloud/cloud.jsx';
import Fintech from './solutions/fintech/fintech.jsx';
import AI from './solutions/ai/ai.jsx';
import Augmented from './solutions/augmented/augmented.jsx';
import IOT from './solutions/iot/iot.jsx';

class Main extends React.Component {
  render() {
    	return (
    		 <Switch>
		      <Route exact path='/' component={Home}/>
		      <Route exact path='/solutions' component={Solutions}/>

		      <Route path='/solutions/blockchain' component={BlockChain}/>
		      <Route path='/solutions/azure' component={Cloud}/>
		      <Route path='/solutions/fintech' component={Fintech}/>
		      <Route path='/solutions/ai' component={AI}/>
		      <Route path='/solutions/augmented-reality' component={Augmented}/>
		      <Route path='/solutions/internet-of-things' component={IOT}/>


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