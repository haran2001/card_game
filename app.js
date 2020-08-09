// console.log('hello world')


document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		
		{
			name: 'fries',
			img: 'images/fries.png'
		},
		
		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},

		{
			name: 'cheeseburger',
			img: 'images/cheeseburger.png'
		},

		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},

		{
			name: 'hotdog',
			img: 'images/hotdog.png'
		},

		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},

		{
			name: 'ice-cream',
			img: 'images/ice-cream.png'
		},

		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},

		{
			name: 'milkshake',
			img: 'images/milkshake.png'
		},

		{
			name: 'pizza',
			img: 'images/pizza.png'
		},

		{
			name: 'pizza',
			img: 'images/pizza.png'
		}

	]


	//create your board
cardArray.sort(() => 0.5 - Math.random())
// createBoard()
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

var   cardsChosen = []
var	  cardsChosenId = []
var   cardsWon = []

function createBoard() {
	for(let i = 0; i < cardArray.length; i++) {
		var card = document.createElement('img')
		card.setAttribute('src', 'images/blank.png')
		card.setAttribute('data-id', i)
		card.addEventListener('click', flipCard)
		grid.appendChild(card)
	}
}

// console.log('hello world')

createBoard()

//check for match

function checkForMatch() {
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]
	
	if(cardsChosen[0] === cardsChosen[1]){
		alert("You Have Found a Match!!")
		cards[optionOneId].setAttribute('img', 'white.png')
		cards[optionTwoId].setAttribute('img', 'white.png')
		cardsWon.push(cardsChosen)
	}else{
		cards[optionOneId].setAttribute('img', 'blank.png')
		cards[optionTwoId].setAttribute('img', 'blank.png')
		alert('Oops! Try Again!')
	}

	cardsChosen = []
	cardsChosenId = []
	// resultDisplay = []
	resultDisplay.textContent = cardsWon.length
	if(cardsWon.length === cardArray.length/2){
		resultDisplay.textContent = "Congratutations!! You found them all!!"
	}
}


// flip your card

function flipCard() {
	var cardId = this.getAttribute('data-id')
	cardsChosen.push(cardArray[cardId ].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src', cardArray[cardId].img)
	if(cardsChosen.length === 2){
		setTimeout(checkForMatch, 500)
	}
}








})
