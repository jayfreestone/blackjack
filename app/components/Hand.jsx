import React from 'react';
import Card from './Card.jsx';

class Hand extends React.Component {
	render() {
		return (
			<div className="hand">
				<div className="hand__inner">
					<h2>{this.props.title}</h2>
					<div className="hand__cards">
						{this.props.cards.map(function(card, i){
							if (card[0]) {
								return (
									<Card key={card[0].number + ' ' + card[0].suit} number={card[0].number} suit={card[0].suit} hidden={card.hidden}  />
								);
							}
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Hand;

Hand.propTypes = {
	cards: React.PropTypes.array,
	total: React.PropTypes.number,
	title: React.PropTypes.string
};
