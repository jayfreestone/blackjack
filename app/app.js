// React
import React from 'react';
import ReactDom from 'react-dom';
import Game from './components/Game.jsx';

class App extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Game />
			</div>
		);
	}
}

let siteContainer = document.querySelector('.site-container');

ReactDom.render(<App/>, siteContainer);
