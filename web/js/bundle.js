(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Game = require('./components/Game.jsx');

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // React


var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_Game2.default, null)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

var siteContainer = document.querySelector('.site-container');

_reactDom2.default.render(_react2.default.createElement(App, null), siteContainer);

},{"./components/Game.jsx":3,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./../helpers.js');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).apply(this, arguments));
	}

	_createClass(Card, [{
		key: 'render',
		value: function render() {
			var corners = [],
			    cardContent = void 0,
			    suit = _helpers2.default.getSuitIcon(this.props.suit);

			// Generate the four corners of the card
			for (var i = 0; i < 4; i++) {
				corners.push(_react2.default.createElement(
					'span',
					{ key: i, className: 'card__corner' },
					_helpers2.default.getCardName(this.props.number)
				));
			}

			// If the card is hidden, don't render the contents
			if (this.props.hidden !== true) {
				cardContent = _react2.default.createElement(
					'div',
					null,
					corners,
					suit
				);
			}

			return _react2.default.createElement(
				'div',
				{ className: suit == '♥' || suit == '♦' ? 'card card--red' : 'card' },
				cardContent
			);
		}
	}]);

	return Card;
}(_react2.default.Component);

Card.propTypes = {
	number: _react2.default.PropTypes.number,
	suit: _react2.default.PropTypes.number,
	hidden: _react2.default.PropTypes.bool
};

exports.default = Card;

},{"./../helpers.js":6,"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _GameSetup = require('./GameSetup.jsx');

var _GameSetup2 = _interopRequireDefault(_GameSetup);

var _Hand = require('./Hand.jsx');

var _Hand2 = _interopRequireDefault(_Hand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_React$Component) {
	_inherits(Game, _React$Component);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this));

		_this.state = {
			deck: [],
			winner: '',
			players: {
				player: {
					name: 'You',
					hand: {
						'cards': [],
						'total': 0
					}
				},
				computer: {
					name: 'Dealer',
					hand: {
						'cards': [],
						'total': 0
					}
				}
			}
		};

		return _this;
	}

	// Generate the deck


	_createClass(Game, [{
		key: 'createDeck',
		value: function createDeck() {
			var generatedDeck = [];

			for (var i = 1; i <= 4; i++) {
				for (var x = 1; x <= 13; x++) {
					generatedDeck.push({
						number: x,
						suit: i
					});
				}
			}

			this.state.deck = generatedDeck;
			this.setState({ deck: this.state.deck });
		}

		// Restore hand scores back to 0

	}, {
		key: 'resetHands',
		value: function resetHands() {
			for (var player in this.state.players) {
				this.state.players[player].hand = {
					'cards': [],
					'total': 0
				};
			}
		}

		// Starts the game

	}, {
		key: 'startGame',
		value: function startGame() {
			this.resetHands();
			this.createDeck();

			// Deals the starting cards
			this.addCard('player', 2);
			this.addCard('computer', 1, true);
			this.addCard('computer', 1);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.startGame();
		}

		// Adds a card to a specific hand

	}, {
		key: 'addCard',
		value: function addCard(hand) {
			var quantity = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
			var hidden = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

			for (var i = 0; i < quantity; i++) {
				// Select a rnadom card from the deck
				var randomNumber = Math.floor(Math.random() * this.state.deck.length - 1 + 1);

				// remove the card from the deck
				var card = this.state.deck.splice(randomNumber, 1);

				// Add the card to the player's hand
				card.hidden = hidden;
				this.state.players[hand].hand.cards.push(card);
				this.setState({ deck: this.state.deck });
				this.setState({ players: this.state.players });
			}

			// Set the new value of the hand
			this.getHandValue(hand);
		}

		// Gets the value/score of a card

	}, {
		key: 'getCardValue',
		value: function getCardValue(number) {
			if (number == 11 || number == 12 || number == 13) {
				// Face cards are worth 10
				return 10;
			} else if (number == 1) {
				// Aces are worth 11 or 1, set to 11 for now
				return 11;
			} else {
				return number;
			}
		}

		// Gets the total value for a hand

	}, {
		key: 'getHandValue',
		value: function getHandValue(hand) {
			var aces = 0;

			// Retrive the card values for each card & count the aces
			var values = this.state.players[hand].hand.cards.map(function (item) {
				if (item[0]) {
					var number = item[0].number;

					if (this.getCardValue(number) == 11) {
						aces++;
					}

					return this.getCardValue(number);
				}
			}.bind(this));

			// Add the card values together to get the hand value
			var total = values.reduce(function (first, second) {
				return first + second;
			}, 0);

			// If we have an ace, check if 1 would be better than 11
			while (aces > 0) {
				aces--;

				if (total > 21) {
					total -= 10;
				}
			}

			// Update the hand total in state
			this.state.players[hand].hand.total = total;
			this.setState({ players: this.state.players });
		}

		// Handles Hit button

	}, {
		key: 'handleHit',
		value: function handleHit() {
			this.addCard('player');

			var playerTotal = this.state.players.player.hand.total;

			// Hit Win logic
			if (playerTotal == 21) {
				this.setState({ winner: 'player' });
				this.revealDealer();
			} else if (playerTotal > 21) {
				this.setState({ winner: 'computer' });
				this.revealDealer();
			}
		}

		// Handles Stand button

	}, {
		key: 'handleStand',
		value: function handleStand() {
			var playerTotal = this.state.players.player.hand.total,
			    computerTotal = this.state.players.computer.hand.total;

			// Continues to deal for itself while the card value is < 17
			while (computerTotal < 17) {
				this.addCard('computer');
				computerTotal = this.state.players.computer.hand.total;
			}

			// Stand win logic
			if (computerTotal > 21) {
				this.setState({ winner: 'player' });
			} else if (computerTotal < 21 && computerTotal < playerTotal) {
				this.setState({ winner: 'player' });
			} else if (computerTotal <= 21 && playerTotal == computerTotal) {
				this.setState({ winner: 'draw' });
			} else if (playerTotal < 21 && playerTotal < computerTotal) {
				this.setState({ winner: 'computer' });
			}

			this.revealDealer();
		}

		// Restarts the game

	}, {
		key: 'handleRestart',
		value: function handleRestart() {
			this.setState({ winner: '' });
			this.startGame();
		}

		// Shows dealer's hidden card

	}, {
		key: 'revealDealer',
		value: function revealDealer() {
			this.state.players.computer.hand.cards.forEach(function (card) {
				card.hidden = false;
			});

			this.setState({ players: this.state.players });
		}

		// Sets the player's name in state

	}, {
		key: 'setPlayerName',
		value: function setPlayerName(playerName) {
			this.state.players.player.name = playerName;
			this.setState({ players: this.state.players });
		}
	}, {
		key: 'render',
		value: function render() {
			var winBox = void 0,
			    playerTotal = this.state.players.player.hand.total,
			    computerTotal = this.state.players.computer.hand.total;

			// When we have a winner, show dealer score and winner name
			if (this.state.winner != '') {
				var winText = void 0;

				if (this.state.winner == 'draw') {
					winText = 'Game was a draw!';
				} else {
					winText = this.state.players[this.state.winner].name + ' wins!';
				}
				winBox = _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						null,
						this.state.players.computer.name
					),
					' ',
					this.state.players.computer.hand.total,
					_react2.default.createElement(
						'div',
						{ className: 'game__scores__win-text' },
						winText
					)
				);
			}

			// If the player hasn't entered a name, show the setup screen
			if (this.state.players.player.name == 'You') {
				return _react2.default.createElement(_GameSetup2.default, { setPlayerName: this.setPlayerName.bind(this) });
			} else {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'game' },
						_react2.default.createElement(
							'div',
							{ className: 'game__hands' },
							_react2.default.createElement(_Hand2.default, { cards: this.state.players.computer.hand.cards, title: this.state.players.computer.name }),
							_react2.default.createElement(_Hand2.default, { cards: this.state.players.player.hand.cards, title: this.state.players.player.name })
						),
						_react2.default.createElement(
							'div',
							{ className: 'game__scores' },
							_react2.default.createElement(
								'h2',
								null,
								'Scores'
							),
							_react2.default.createElement(
								'h3',
								null,
								this.state.players.player.name
							),
							' ',
							this.state.players.player.hand.total,
							winBox
						),
						_react2.default.createElement(
							'div',
							{ className: 'game__controls' },
							_react2.default.createElement(
								'button',
								{ onClick: this.handleRestart.bind(this) },
								'Restart'
							),
							_react2.default.createElement(
								'button',
								{ onClick: this.handleHit.bind(this), disabled: this.state.winner != '' },
								'Hit'
							),
							_react2.default.createElement(
								'button',
								{ onClick: this.handleStand.bind(this), disabled: this.state.winner != '' },
								'Stand'
							)
						)
					)
				);
			}
		}
	}]);

	return Game;
}(_react2.default.Component);

exports.default = Game;

},{"./GameSetup.jsx":4,"./Hand.jsx":5,"react":"react"}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameSetup = function (_React$Component) {
	_inherits(GameSetup, _React$Component);

	function GameSetup() {
		_classCallCheck(this, GameSetup);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(GameSetup).apply(this, arguments));
	}

	_createClass(GameSetup, [{
		key: "handlePlayerNameSubmit",
		value: function handlePlayerNameSubmit(event) {
			event.preventDefault();
			var playerName = this.refs.playerName.value;
			this.props.setPlayerName(playerName);
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "modal" },
				_react2.default.createElement(
					"div",
					{ className: "modal__inner" },
					_react2.default.createElement(
						"form",
						{ onSubmit: this.handlePlayerNameSubmit.bind(this) },
						_react2.default.createElement(
							"label",
							null,
							"Your Name:",
							_react2.default.createElement("br", null),
							_react2.default.createElement("input", { type: "text", placeholder: "John Smith", ref: "playerName", required: true })
						),
						_react2.default.createElement(
							"button",
							{ type: "submit" },
							"Play"
						)
					)
				)
			);
		}
	}]);

	return GameSetup;
}(_react2.default.Component);

exports.default = GameSetup;

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('./Card.jsx');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hand = function (_React$Component) {
	_inherits(Hand, _React$Component);

	function Hand() {
		_classCallCheck(this, Hand);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Hand).apply(this, arguments));
	}

	_createClass(Hand, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'hand' },
				_react2.default.createElement(
					'div',
					{ className: 'hand__inner' },
					_react2.default.createElement(
						'h2',
						null,
						this.props.title
					),
					_react2.default.createElement(
						'div',
						{ className: 'hand__cards' },
						this.props.cards.map(function (card, i) {
							if (card[0]) {
								return _react2.default.createElement(_Card2.default, { key: card[0].number + ' ' + card[0].suit, number: card[0].number, suit: card[0].suit, hidden: card.hidden });
							}
						})
					)
				)
			);
		}
	}]);

	return Hand;
}(_react2.default.Component);

exports.default = Hand;


Hand.propTypes = {
	cards: _react2.default.PropTypes.array,
	total: _react2.default.PropTypes.number,
	title: _react2.default.PropTypes.string
};

},{"./Card.jsx":2,"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var h = {
	getSuitIcon: function getSuitIcon(number) {
		var suits = ['♠', '♣', '♦', '♥'];

		return suits[number - 1];
	},
	getCardName: function getCardName(number) {
		switch (number) {
			case 1:
				return 'A';
				break;
			case 11:
				return 'J';
				break;
			case 12:
				return 'Q';
				break;
			case 13:
				return 'K';
				break;
			default:
				return number;
				break;
		}
	}
};

exports.default = h;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvQ2FyZC5qc3giLCJhcHAvY29tcG9uZW50cy9HYW1lLmpzeCIsImFwcC9jb21wb25lbnRzL0dhbWVTZXR1cC5qc3giLCJhcHAvY29tcG9uZW50cy9IYW5kLmpzeCIsImFwcC9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0NBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztJQUVNLEc7OztBQUNMLGdCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OzsyQkFDUTtBQUNSLFVBQ0M7QUFBQTtJQUFBO0lBQ0M7QUFERCxJQUREO0FBS0E7Ozs7RUFWZ0IsZ0JBQU0sUzs7QUFheEIsSUFBSSxnQkFBZ0IsU0FBUyxhQUFULENBQXVCLGlCQUF2QixDQUFwQjs7QUFFQSxtQkFBUyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBd0IsYUFBeEI7Ozs7Ozs7Ozs7O0FDcEJBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLEk7Ozs7Ozs7Ozs7OzJCQUNJO0FBQ1IsT0FBSSxVQUFVLEVBQWQ7T0FDQyxvQkFERDtPQUVDLE9BQU8sa0JBQUUsV0FBRixDQUFjLEtBQUssS0FBTCxDQUFXLElBQXpCLENBRlI7OztBQUtBLFFBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxDQUFwQixFQUF1QixHQUF2QixFQUE0QjtBQUMzQixZQUFRLElBQVIsQ0FBYTtBQUFBO0tBQUEsRUFBTSxLQUFLLENBQVgsRUFBYyxXQUFVLGNBQXhCO0tBQXdDLGtCQUFFLFdBQUYsQ0FBYyxLQUFLLEtBQUwsQ0FBVyxNQUF6QjtBQUF4QyxLQUFiO0FBQ0E7OztBQUdELE9BQUssS0FBSyxLQUFMLENBQVcsTUFBWCxLQUFzQixJQUEzQixFQUFrQztBQUNqQyxrQkFDQztBQUFBO0tBQUE7S0FDRSxPQURGO0tBRUU7QUFGRixLQUREO0FBTUE7O0FB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LFFBQUssQ0FBTDtBQUNDLFdBQU8sR0FBUDtBQUNBO0FBQ0QsUUFBSyxFQUFMO0FBQ0MsV0FBTyxHQUFQO0FBQ0E7QUFDRCxRQUFLLEVBQUw7QUFDQyxXQUFPLEdBQVA7QUFDQTtBQUNELFFBQUssRUFBTDtBQUNDLFdBQU8sR0FBUDtBQUNBO0FBQ0Q7QUFDQyxXQUFPLE1BQVA7QUFDQTtBQWZGO0FBaUJBO0FBN0JNLENBQVI7O2tCQWdDZSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFJlYWN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL2NvbXBvbmVudHMvR2FtZS5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEdhbWUgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxubGV0IHNpdGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1jb250YWluZXInKTtcblxuUmVhY3REb20ucmVuZGVyKDxBcHAvPiwgc2l0ZUNvbnRhaW5lcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGggZnJvbSAnLi8uLi9oZWxwZXJzLmpzJztcblxuY2xhc3MgQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgY29ybmVycyA9IFtdLFxuXHRcdFx0Y2FyZENvbnRlbnQsXG5cdFx0XHRzdWl0ID0gaC5nZXRTdWl0SWNvbih0aGlzLnByb3BzLnN1aXQpOyBcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBmb3VyIGNvcm5lcnMgb2YgdGhlIGNhcmRcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0Y29ybmVycy5wdXNoKDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPVwiY2FyZF9fY29ybmVyXCI+e2guZ2V0Q2FyZE5hbWUodGhpcy5wcm9wcy5udW1iZXIpfTwvc3Bhbj4pO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBjYXJkIGlzIGhpZGRlbiwgZG9uJ3QgcmVuZGVyIHRoZSBjb250ZW50c1xuXHRcdGlmICggdGhpcy5wcm9wcy5oaWRkZW4gIT09IHRydWUgKSB7XG5cdFx0XHRjYXJkQ29udGVudCA9IChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7Y29ybmVyc31cblx0XHRcdFx0XHR7c3VpdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17KHN1aXQgPT0gJ+KZpScgfHwgc3VpdCA9PSAn4pmmJykgPyAnY2FyZCBjYXJkLS1yZWQnOiAnY2FyZCd9PlxuXHRcdFx0XHR7Y2FyZENvbnRlbnR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuXHRudW1iZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cdHN1aXQ6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXG5cdGhpZGRlbjogUmVhY3QuUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdhbWVTZXR1cCBmcm9tICcuL0dhbWVTZXR1cC5qc3gnO1xuaW1wb3J0IEhhbmQgZnJvbSAnLi9IYW5kLmpzeCc7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGRlY2s6IFtdLFxuXHRcdFx0d2lubmVyOiAnJyxcblx0XHRcdHBsYXllcnM6IHtcblx0XHRcdFx0cGxheWVyOiB7XG5cdFx0XHRcdFx0bmFtZTogJ1lvdScsXG5cdFx0XHRcdFx0aGFuZDoge1xuXHRcdFx0XHRcdFx0J2NhcmRzJzogW10sXG5cdFx0XHRcdFx0XHQndG90YWwnOiAwXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb21wdXRlcjoge1xuXHRcdFx0XHRcdG5hbWU6ICdEZWFsZXInLFxuXHRcdFx0XHRcdGhhbmQ6IHtcblx0XHRcdFx0XHRcdCdjYXJkcyc6IFtdLFxuXHRcdFx0XHRcdFx0J3RvdGFsJzogMFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0fVxuXG5cdC8vIEdlbmVyYXRlIHRoZSBkZWNrXG5cdGNyZWF0ZURlY2soKSB7XG5cdFx0bGV0IGdlbmVyYXRlZERlY2sgPSBbXTtcblxuXHRcdGZvciAoIGxldCBpID0gMTsgaSA8PSA0OyBpKysgKSB7XG5cdFx0XHRmb3IgKCBsZXQgeCA9IDE7IHggPD0gMTM7IHgrKyApIHtcblx0XHRcdFx0Z2VuZXJhdGVkRGVjay5wdXNoKFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdG51bWJlcjogeCxcblx0XHRcdFx0XHRcdHN1aXQ6IGlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zdGF0ZS5kZWNrID0gZ2VuZXJhdGVkRGVjaztcblx0XHR0aGlzLnNldFN0YXRlKHtkZWNrOiB0aGlzLnN0YXRlLmRlY2t9KTtcblx0fVxuXG5cdC8vIFJlc3RvcmUgaGFuZCBzY29yZXMgYmFjayB0byAwXG5cdHJlc2V0SGFuZHMoKSB7XG5cdFx0Zm9yICggbGV0IHBsYXllciBpbiB0aGlzLnN0YXRlLnBsYXllcnMgKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnBsYXllcnNbcGxheWVyXS5oYW5kID0ge1xuXHRcdFx0XHQnY2FyZHMnOiBbXSxcblx0XHRcdFx0J3RvdGFsJzogMFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFN0YXJ0cyB0aGUgZ2FtZVxuXHRzdGFydEdhbWUoKSB7XG5cdFx0dGhpcy5yZXNldEhhbmRzKCk7XG5cdFx0dGhpcy5jcmVhdGVEZWNrKCk7XG5cblx0XHQvLyBEZWFscyB0aGUgc3RhcnRpbmcgY2FyZHNcblx0XHR0aGlzLmFkZENhcmQoJ3BsYXllcicsIDIpO1xuXHRcdHRoaXMuYWRkQ2FyZCgnY29tcHV0ZXInLCAxLCB0cnVlKTtcblx0XHR0aGlzLmFkZENhcmQoJ2NvbXB1dGVyJywgMSk7XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHR0aGlzLnN0YXJ0R2FtZSgpO1xuXHR9XG5cblx0Ly8gQWRkcyBhIGNhcmQgdG8gYSBzcGVjaWZpYyBoYW5kXG5cdGFkZENhcmQoIGhhbmQsIHF1YW50aXR5ID0gMSwgaGlkZGVuID0gZmFsc2UgKSB7XG5cdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkrKyApIHtcblx0XHRcdC8vIFNlbGVjdCBhIHJuYWRvbSBjYXJkIGZyb20gdGhlIGRlY2tcblx0XHRcdGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogdGhpcy5zdGF0ZS5kZWNrLmxlbmd0aCAtIDEpICsgMSk7XG5cblx0XHRcdC8vIHJlbW92ZSB0aGUgY2FyZCBmcm9tIHRoZSBkZWNrXG5cdFx0XHRsZXQgY2FyZCA9IHRoaXMuc3RhdGUuZGVjay5zcGxpY2UoIHJhbmRvbU51bWJlciwgMSApO1xuXG5cdFx0XHQvLyBBZGQgdGhlIGNhcmQgdG8gdGhlIHBsYXllcidzIGhhbmRcblx0XHRcdGNhcmQuaGlkZGVuID0gaGlkZGVuO1xuXHRcdFx0dGhpcy5zdGF0ZS5wbGF5ZXJzW2hhbmRdLmhhbmQuY2FyZHMucHVzaChjYXJkKTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBkZWNrOiB0aGlzLnN0YXRlLmRlY2sgfSk7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgcGxheWVyczogdGhpcy5zdGF0ZS5wbGF5ZXJzIH0pO1xuXG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBuZXcgdmFsdWUgb2YgdGhlIGhhbmRcblx0XHR0aGlzLmdldEhhbmRWYWx1ZShoYW5kKTtcblx0fVxuXG5cdC8vIEdldHMgdGhlIHZhbHVlL3Njb3JlIG9mIGEgY2FyZFxuXHRnZXRDYXJkVmFsdWUobnVtYmVyKSB7XG5cdFx0aWYgKCBudW1iZXIgPT0gMTEgfHwgbnVtYmVyID09IDEyIHx8IG51bWJlciA9PSAxMyApIHtcblx0XHRcdC8vIEZhY2UgY2FyZHMgYXJlIHdvcnRoIDEwXG5cdFx0XHRyZXR1cm4gMTA7XG5cdFx0fSBlbHNlIGlmICggbnVtYmVyID09IDEgKSB7XG5cdFx0XHQvLyBBY2VzIGFyZSB3b3J0aCAxMSBvciAxLCBzZXQgdG8gMTEgZm9yIG5vd1xuXHRcdFx0cmV0dXJuIDExO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gbnVtYmVyO1xuXHRcdH1cblx0fVxuXG5cdC8vIEdldHMgdGhlIHRvdGFsIHZhbHVlIGZvciBhIGhhbmRcblx0Z2V0SGFuZFZhbHVlKGhhbmQpIHtcblx0XHRsZXQgYWNlcyA9IDA7XG5cblx0XHQvLyBSZXRyaXZlIHRoZSBjYXJkIHZhbHVlcyBmb3IgZWFjaCBjYXJkICYgY291bnQgdGhlIGFjZXNcblx0XHRsZXQgdmFsdWVzID0gdGhpcy5zdGF0ZS5wbGF5ZXJzW2hhbmRdLmhhbmQuY2FyZHMubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdGlmIChpdGVtWzBdKSB7XG5cdFx0XHRcdGxldCBudW1iZXIgPSBpdGVtWzBdLm51bWJlcjtcblxuXHRcdFx0XHRpZiAoIHRoaXMuZ2V0Q2FyZFZhbHVlKG51bWJlcikgPT0gMTEgKSB7XG5cdFx0XHRcdFx0YWNlcysrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRoaXMuZ2V0Q2FyZFZhbHVlKG51bWJlcik7XG5cdFx0XHR9XG5cblx0XHR9LmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gQWRkIHRoZSBjYXJkIHZhbHVlcyB0b2dldGhlciB0byBnZXQgdGhlIGhhbmQgdmFsdWVcblx0XHRsZXQgdG90YWwgPSB2YWx1ZXMucmVkdWNlKChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdCArIHNlY29uZCwgMCk7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIGFuIGFjZSwgY2hlY2sgaWYgMSB3b3VsZCBiZSBiZXR0ZXIgdGhhbiAxMVxuXHRcdHdoaWxlKCBhY2VzID4gMCApIHtcblx0XHRcdGFjZXMtLTtcblxuXHRcdFx0aWYgKCB0b3RhbCA+IDIxICkge1xuXHRcdFx0XHR0b3RhbCAtPSAxMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgdGhlIGhhbmQgdG90YWwgaW4gc3RhdGVcblx0XHR0aGlzLnN0YXRlLnBsYXllcnNbaGFuZF0uaGFuZC50b3RhbCA9IHRvdGFsO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3BsYXllcnM6IHRoaXMuc3RhdGUucGxheWVyc30pO1xuXHR9XG5cblx0Ly8gSGFuZGxlcyBIaXQgYnV0dG9uXG5cdGhhbmRsZUhpdCgpIHtcblx0XHR0aGlzLmFkZENhcmQoJ3BsYXllcicpO1xuXG5cdFx0bGV0IHBsYXllclRvdGFsID0gdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllci5oYW5kLnRvdGFsOyBcblxuXHRcdC8vIEhpdCBXaW4gbG9naWNcblx0XHRpZiAoIHBsYXllclRvdGFsID09IDIxICkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7d2lubmVyOiAncGxheWVyJ30pO1xuXHRcdFx0dGhpcy5yZXZlYWxEZWFsZXIoKTtcblx0XHR9IGVsc2UgaWYgKCBwbGF5ZXJUb3RhbCA+IDIxICkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7d2lubmVyOiAnY29tcHV0ZXInfSk7XG5cdFx0XHR0aGlzLnJldmVhbERlYWxlcigpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEhhbmRsZXMgU3RhbmQgYnV0dG9uXG5cdGhhbmRsZVN0YW5kKCkge1xuXHRcdGxldCBwbGF5ZXJUb3RhbCA9IHRoaXMuc3RhdGUucGxheWVycy5wbGF5ZXIuaGFuZC50b3RhbCwgXG5cdFx0XHRjb21wdXRlclRvdGFsID0gdGhpcy5zdGF0ZS5wbGF5ZXJzLmNvbXB1dGVyLmhhbmQudG90YWw7IFxuXG5cdFx0Ly8gQ29udGludWVzIHRvIGRlYWwgZm9yIGl0c2VsZiB3aGlsZSB0aGUgY2FyZCB2YWx1ZSBpcyA8IDE3XG5cdFx0d2hpbGUgKCBjb21wdXRlclRvdGFsIDwgMTcgKSB7XG5cdFx0XHR0aGlzLmFkZENhcmQoJ2NvbXB1dGVyJyk7XG5cdFx0XHRjb21wdXRlclRvdGFsID0gdGhpcy5zdGF0ZS5wbGF5ZXJzLmNvbXB1dGVyLmhhbmQudG90YWw7IFxuXHRcdH1cblxuXHRcdC8vIFN0YW5kIHdpbiBsb2dpY1xuXHRcdGlmICggY29tcHV0ZXJUb3RhbCA+IDIxICkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7d2lubmVyOiAncGxheWVyJ30pO1xuXHRcdH0gZWxzZSBpZiAoIGNvbXB1dGVyVG90YWwgPCAyMSAgJiYgY29tcHV0ZXJUb3RhbCA8IHBsYXllclRvdGFsICkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7d2lubmVyOiAncGxheWVyJ30pO1xuXHRcdH0gZWxzZSBpZiAoIGNvbXB1dGVyVG90YWwgPD0gMjEgJiYgcGxheWVyVG90YWwgPT0gY29tcHV0ZXJUb3RhbCApIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3dpbm5lcjogJ2RyYXcnfSk7XG5cdFx0fSBlbHNlIGlmICggcGxheWVyVG90YWwgPCAyMSAmJiBwbGF5ZXJUb3RhbCA8IGNvbXB1dGVyVG90YWwgKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHt3aW5uZXI6ICdjb21wdXRlcid9KTtcblx0XHR9XG5cblx0XHR0aGlzLnJldmVhbERlYWxlcigpO1xuXHR9XG5cblx0Ly8gUmVzdGFydHMgdGhlIGdhbWVcblx0aGFuZGxlUmVzdGFydCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHt3aW5uZXI6ICcnfSk7XG5cdFx0dGhpcy5zdGFydEdhbWUoKTtcblx0fVxuXG5cdC8vIFNob3dzIGRlYWxlcidzIGhpZGRlbiBjYXJkXG5cdHJldmVhbERlYWxlcigpIHtcblx0XHR0aGlzLnN0YXRlLnBsYXllcnMuY29tcHV0ZXIuaGFuZC5jYXJkcy5mb3JFYWNoKGZ1bmN0aW9uKGNhcmQpe1xuXHRcdFx0Y2FyZC5oaWRkZW4gPSBmYWxzZTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2V0U3RhdGUoe3BsYXllcnM6IHRoaXMuc3RhdGUucGxheWVyc30pO1xuXHR9XG5cblx0Ly8gU2V0cyB0aGUgcGxheWVyJ3MgbmFtZSBpbiBzdGF0ZVxuXHRzZXRQbGF5ZXJOYW1lKHBsYXllck5hbWUpIHtcblx0XHR0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyLm5hbWUgPSBwbGF5ZXJOYW1lO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3BsYXllcnM6IHRoaXMuc3RhdGUucGxheWVyc30pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGxldCB3aW5Cb3gsXG5cdFx0XHRwbGF5ZXJUb3RhbCA9IHRoaXMuc3RhdGUucGxheWVycy5wbGF5ZXIuaGFuZC50b3RhbCxcblx0XHRcdGNvbXB1dGVyVG90YWwgPSB0aGlzLnN0YXRlLnBsYXllcnMuY29tcHV0ZXIuaGFuZC50b3RhbDsgXG5cblx0XHQvLyBXaGVuIHdlIGhhdmUgYSB3aW5uZXIsIHNob3cgZGVhbGVyIHNjb3JlIGFuZCB3aW5uZXIgbmFtZVxuXHRcdGlmICggdGhpcy5zdGF0ZS53aW5uZXIgIT0gJycgKSB7XG5cdFx0XHRsZXQgd2luVGV4dDtcblxuXHRcdFx0aWYgKCB0aGlzLnN0YXRlLndpbm5lciA9PSAnZHJhdycgKSB7XG5cdFx0XHRcdHdpblRleHQgPSAnR2FtZSB3YXMgYSBkcmF3ISc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5UZXh0ID0gdGhpcy5zdGF0ZS5wbGF5ZXJzW3RoaXMuc3RhdGUud2lubmVyXS5uYW1lICsgJyB3aW5zISc7XG5cdFx0XHR9XG5cdFx0XHR3aW5Cb3ggPSAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGgzPnt0aGlzLnN0YXRlLnBsYXllcnMuY29tcHV0ZXIubmFtZX08L2gzPiB7dGhpcy5zdGF0ZS5wbGF5ZXJzLmNvbXB1dGVyLmhhbmQudG90YWx9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYW1lX19zY29yZXNfX3dpbi10ZXh0XCI+e3dpblRleHR9PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBwbGF5ZXIgaGFzbid0IGVudGVyZWQgYSBuYW1lLCBzaG93IHRoZSBzZXR1cCBzY3JlZW5cblx0XHRpZiAoIHRoaXMuc3RhdGUucGxheWVycy5wbGF5ZXIubmFtZSA9PSAnWW91JyApIHtcblx0XHRcdHJldHVybiA8R2FtZVNldHVwIHNldFBsYXllck5hbWU9e3RoaXMuc2V0UGxheWVyTmFtZS5iaW5kKHRoaXMpfSAvPjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FtZV9faGFuZHNcIj5cblx0XHRcdFx0XHRcdFx0PEhhbmQgY2FyZHM9e3RoaXMuc3RhdGUucGxheWVycy5jb21wdXRlci5oYW5kLmNhcmRzfSB0aXRsZT17dGhpcy5zdGF0ZS5wbGF5ZXJzLmNvbXB1dGVyLm5hbWV9IC8+XG5cdFx0XHRcdFx0XHRcdDxIYW5kIGNhcmRzPXt0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyLmhhbmQuY2FyZHN9IHRpdGxlPXt0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyLm5hbWV9Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYW1lX19zY29yZXNcIj5cblx0XHRcdFx0XHRcdFx0PGgyPlNjb3JlczwvaDI+XG5cdFx0XHRcdFx0XHRcdDxoMz57dGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllci5uYW1lfTwvaDM+IHt0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyLmhhbmQudG90YWx9XG5cdFx0XHRcdFx0XHRcdHt3aW5Cb3h9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FtZV9fY29udHJvbHNcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlc3RhcnQuYmluZCh0aGlzKX0+UmVzdGFydDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlSGl0LmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLndpbm5lciAhPSAnJ30+SGl0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTdGFuZC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS53aW5uZXIgIT0gJyd9PlN0YW5kPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgR2FtZVNldHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0aGFuZGxlUGxheWVyTmFtZVN1Ym1pdChldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IHBsYXllck5hbWUgPSB0aGlzLnJlZnMucGxheWVyTmFtZS52YWx1ZTtcblx0XHR0aGlzLnByb3BzLnNldFBsYXllck5hbWUocGxheWVyTmFtZSk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybihcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5uZXJcIj5cblx0XHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVQbGF5ZXJOYW1lU3VibWl0LmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0PGxhYmVsPlxuXHRcdFx0XHRcdFx0XHRZb3VyIE5hbWU6PGJyLz5cblx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJKb2huIFNtaXRoXCIgcmVmPVwicGxheWVyTmFtZVwiIHJlcXVpcmVkLz5cblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5QbGF5PC9idXR0b24+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZVNldHVwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZC5qc3gnO1xuXG5jbGFzcyBIYW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhbmRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYW5kX19pbm5lclwiPlxuXHRcdFx0XHRcdDxoMj57dGhpcy5wcm9wcy50aXRsZX08L2gyPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFuZF9fY2FyZHNcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmNhcmRzLm1hcChmdW5jdGlvbihjYXJkLCBpKXtcblx0XHRcdFx0XHRcdFx0aWYgKGNhcmRbMF0pIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PENhcmQga2V5PXtjYXJkWzBdLm51bWJlciArICcgJyArIGNhcmRbMF0uc3VpdH0gbnVtYmVyPXtjYXJkWzBdLm51bWJlcn0gc3VpdD17Y2FyZFswXS5zdWl0fSBoaWRkZW49e2NhcmQuaGlkZGVufSAgLz5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhbmQ7XG5cbkhhbmQucHJvcFR5cGVzID0ge1xuXHRjYXJkczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuXHR0b3RhbDogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcblx0dGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbn07XG4iLCJsZXQgaCA9IHtcblx0Z2V0U3VpdEljb246IGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdGNvbnN0IHN1aXRzID0gW1xuXHRcdFx0J+KZoCcsXG5cdFx0XHQn4pmjJyxcblx0XHRcdCfimaYnLFxuXHRcdFx0J+KZpSdcblx0XHRdO1xuXG5cdFx0cmV0dXJuIHN1aXRzW251bWJlci0xXTtcblx0fSxcblx0Z2V0Q2FyZE5hbWU6IGZ1bmN0aW9uKG51bWJlcikge1xuXHRcdHN3aXRjaChudW1iZXIpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cmV0dXJuICdBJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDExOlxuXHRcdFx0XHRyZXR1cm4gJ0onO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTI6XG5cdFx0XHRcdHJldHVybiAnUSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxMzpcblx0XHRcdFx0cmV0dXJuICdLJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbnVtYmVyO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGg7XG4iXX0=
