//Access Elements
const section = document.querySelector("section");
section.className='game-board';

const playerAttemptsCount = document.querySelector("span");
const playerAttempts = 0;

//Link Text
playerAttemptsCount.textContent = playerAttempts;

//data
const cardsData = [
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-1.png')`,
		id: 1,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-2.png')`,
		id: 2,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-3.png')`,
		id: 3,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-4.png')`,
		id: 4,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-5.png')`,
		id: 5,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-6.png')`,
		id: 6,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-7.png')`,
		id: 7,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-8.png')`,
		id: 8,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-1.png')`,
		id: 1,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-2.png')`,
		id: 2,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-3.png')`,
		id: 3,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-4.png')`,
		id: 4,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-5.png')`,
		id: 5,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-6.png')`,
		id: 6,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-7.png')`,
		id: 7,
	},
	{
		background: `url('./IMG/card-back.jpg')`,
		front: `url('./IMG/icon-8.png')`,
		id: 8,
	},
];
function makeCards(data) {
	for (let d of data) {
		const cardHolder = document.createElement("DIV");
		const card = document.createElement("DIV");
		cardHolder.className = "card";
		card.className = "card-back";
		cardHolder.appendChild(card);
		section.appendChild(cardHolder);
	}
}
makeCards(cardsData);
