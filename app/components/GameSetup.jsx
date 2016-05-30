import React from 'react';

class GameSetup extends React.Component {
	handlePlayerNameSubmit(event) {
		event.preventDefault();
		let playerName = this.refs.playerName.value;
		this.props.setPlayerName(playerName);
	}

	render() {
		return(
			<div className="modal">
				<div className="modal__inner">
					<form onSubmit={this.handlePlayerNameSubmit.bind(this)}>
						<label>
							Your Name:<br/>
							<input type="text" placeholder="John Smith" ref="playerName" required/>
						</label>
						<button type="submit">Play</button>
					</form>
				</div>
			</div>
		);
	}
}

export default GameSetup;
