// The parent card object
var card = {
	getNumber: function() {
		return this.number;
	},
	getSuit: function() {
		return this.suit;
	},
	getValue: function() {
		if ( this.number == 11 || this.number == 12 || this.number == 13 ) {
			return 10;
		} else if ( this.number == 1 ) {
			return 11;
		} else {
			return this.number;
		}
	}
};

// The card creator factory
function createCard(number, suit) {
	return Object.create(card, {
		number: {
			value: number
		},
		suit: {
			value: suit
		}
	});
};

function randomCard() {
	var number = Math.floor(Math.random() * 13) + 1;
	var suit = Math.floor(Math.random() * 4) + 1;

	return createCard(number, suit);
}

// var card1 = randomCard();
// console.log(card1.getNumber());
// console.log(card1.getSuit());
// console.log(card1.getValue());

var hand = {
	score: function() {
		var aces = 0;

		var values = this.cards.map(function(item) {
			if ( item.getValue() == 11 ) {
				aces++;
			}
			return item.getValue();
		});

		var score = values.reduce((first, second) => first + second, 0);

		while( aces > 0 ) {
			aces--;

			if ( score > 21 ) {
				score -= 10;
			}
		}

		return score;
	},
	getHand: function() {
		return this.cards;
	},
	printHand: function() {
		this.cards.forEach(function(card){
			console.log( card.number + ' of suit ' + card.suit + '\n' );
		});
	},
	addCard: function() {
		this.cards.push(randomCard());
	}
};

function getHand() {
	var cards = [
		randomCard(),
		randomCard()
	];

	return Object.create(hand, {
		cards: {
			value: cards
		}
	});
}

function playAsDealer() {
	var hand = getHand();
	var score = hand.score();

	while ( score > 17 ) {
		hand.addCard();
		score = hand.score();
	}
}

function playAsUser() {
	var hand = getHand();
	var score = hand.score();

	confirm();
}

// Thrown hand for testing Aces
var aceHand = Object.create(hand, {
	cards: {
		value: [
			createCard(1, 4),
			createCard(13, 5),
			createCard(1, 5),
		]
	}
});

var myHand = getHand();

myHand.printHand();
console.log(myHand.score());

// myHand.addCard();
// myHand.printHand();

// var yourHand = getHand();

// console.log(myHand.score());
// console.log(yourHand.score());
