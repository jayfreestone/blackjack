let h = {
	getSuitIcon: function(number) {
		const suits = [
			'♠',
			'♣',
			'♦',
			'♥'
		];

		return suits[number-1];
	},
	getCardName: function(number) {
		switch(number) {
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

export default h;
