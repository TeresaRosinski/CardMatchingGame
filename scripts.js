//Access Elements
const section = document.querySelector("section");
section.className = "game-board";

const playerAttemptsCount = document.querySelector("span");
const playerAttempts = 0;

//Link Text
playerAttemptsCount.textContent = playerAttempts;

//data
const getCardData = () => [
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-1.png',
		id: 1,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-2.png',
		id: 2,
	},
	{
		back:'./IMG/card-back.jpg',
		front: './IMG/icon-3.png',
		id: 3,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-4.png',
		id: 4,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-5.png',
		id: 5,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-6.png',
		id: 6,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-7.png',
		id: 7,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-8.png',
		id: 8,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-1.png',
		id: 1,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-2.png',
		id: 2,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-3.png',
		id: 3,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-4.png',
		id: 4,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-5.png',
		id: 5,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-6.png',
		id: 6,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-7.png',
		id: 7,
	},
	{
		back: './IMG/card-back.jpg',
		front: './IMG/icon-8.png',
		id: 8,
	},
];

//Random Card Function

const randomizeCards = () => {
	const cardData = getCardData()
	cardData.sort(() => Math.random() - 0.5);
	return cardData;

}
randomizeCards(); 

function makeCards() {
	const randomCardData = randomizeCards();
	for (let data of randomCardData) {

		//create card holderz
		const card = document.createElement("DIV");
		const front = document.createElement("img");
		const back = document.createElement("DIV");
		card.classList = "card";
		front.classList = "front";
		back.classList = "back";
		card.id = data.id
		
		//attach data

		//on flip
		front.src = data.front;

		card.appendChild(front);
		card.appendChild(back);
		console.log(card);

		section.appendChild(card);
		card.addEventListener("click", (e) => {
			console.log('hello' + card.id);
			card.classList.toggle("toggleCard");
		})
	}
}

function pairChecker

makeCards();


