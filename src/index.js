import 'babel-polyfill'; // for redux-saga
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

// our components
import Layout from './components/layout';
import { HomeContainer } from './components/home';
import { DetailContainer } from './components/detail';
import { AddContainer } from './components/add';
// app css
import '../dist/css/style.css';

const store = createStore(
    reducer,
    window.devToolsExtension ? window.devToolsExtension() : f => f // connect to redux devtools
);


// the 3 paths of the app
const routes = <Route component={Layout}>
    <Route path="/" component={HomeContainer} />
    <Route path="/detail/:id" component={DetailContainer} />
    <Route path="/add" component={AddContainer} />
</Route>;

// add provider as first component and connect the store to it
/*ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);*/

ReactDOM.render(<h1>Hello worldzzz !!!</h1>, document.getElementById('app'))
