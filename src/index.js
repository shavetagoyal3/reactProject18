import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import jQuery from 'jquery/src/jquery';

import './index.css';
import App from './components/main.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter forceRefresh={true}>
	<App />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
