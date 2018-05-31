import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home/home.jsx';

import Solutions from './solutions/Solutions.jsx';
import BlockChain from './solutions/block_chain/block_chain.jsx';
import Cloud from './solutions/cloud/cloud.jsx';
import Fintech from './solutions/fintech/fintech.jsx';
import AI from './solutions/ai/ai.jsx';
import Augmented from './solutions/augmented/augmented.jsx';
import IOT from './solutions/iot/iot.jsx';

import Services from './services/Services.jsx';
import TeamExtension from './services/team_extension/team_extension.jsx';
import EnterpriseDevelopment from './services/product_engineering/product_engineering.jsx';
import MobileDevelopment from './services/mobile_development/mobile_development.jsx';
import ITConsultingServices from './services/consulting/consulting.jsx';
import DevOps from './services/dev_ops/dev_ops.jsx';
import DesignLab from './services/ux/ux.jsx';
import QATesting from './services/quality_assurance/quality_assurance.jsx';
import SoftwareMaintenanceSupport from './services/maintenance/maintenance.jsx';

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

		      <Route path='/solutions/blockchain' component={BlockChain}/>
		      <Route path='/solutions/azure' component={Cloud}/>
		      <Route path='/solutions/fintech' component={Fintech}/>
		      <Route path='/solutions/ai' component={AI}/>
		      <Route path='/solutions/augmented-reality' component={Augmented}/>
		      <Route path='/solutions/internet-of-things' component={IOT}/>


		      <Route exact path='/services' component={Services}/>

		      <Route path='/services/team-extension' component={TeamExtension}/>
		      <Route path='/services/enterprise-development' component={EnterpriseDevelopment}/>
		      <Route path='/services/mobile-development' component={MobileDevelopment}/>
		      <Route path='/services/it-consulting-services' component={ITConsultingServices}/>
		      <Route path='/services/dev-ops' component={DevOps}/>
		      <Route path='/services/design-lab' component={DesignLab}/>
		      <Route path='/services/qa-testing' component={QATesting}/>
		      <Route path='/services/software-maintenance-support' component={SoftwareMaintenanceSupport}/>

		      <Route exact path='/industries' component={Industries}/>
		      <Route exact path='/resources' component={Resources}/>
		      <Route exact path='/clients' component={Clients}/>
		      <Route exact path='/company' component={Company}/>

		    </Switch>
    	);
    }
}

export default Main;