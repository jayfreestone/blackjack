import React from 'react';
import h from './../helpers.js';

class Card extends React.Component {
	render() {
		let corners = [],
			cardContent,
			suit = h.getSuitIcon(this.props.suit); 

		// Generate the four corners of the card
		for (let i = 0; i < 4; i++) {
			corners.push(<span key={i} className="card__corner">{h.getCardName(this.props.number)}</span>);
		}

		// If the card is hidden, don't render the contents
		if ( this.props.hidden !== true ) {
			cardContent = (
				<div>
					{corners}
					{suit}
				</div>
			);
		}

		return (
			<div className={(suit == '♥' || suit == '♦') ? 'card card--red': 'card'}>
				{cardContent}
			</div>
		);
	}
}

Card.propTypes = {
	number: React.PropTypes.number,
	suit: React.PropTypes.number,
	hidden: React.PropTypes.bool
};

export default Card;
