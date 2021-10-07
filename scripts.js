//data
const getCardData = () => [
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-1.png",
		id: 1,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-2.png",
		id: 2,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-3.png",
		id: 3,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-4.png",
		id: 4,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-5.png",
		id: 5,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-6.png",
		id: 6,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-7.png",
		id: 7,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-8.png",
		id: 8,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-1.png",
		id: 1,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-2.png",
		id: 2,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-3.png",
		id: 3,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-4.png",
		id: 4,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-5.png",
		id: 5,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-6.png",
		id: 6,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-7.png",
		id: 7,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-8.png",
		id: 8,
	},
];

//Access Elements
const section = document.querySelector("section");
section.className = "game-board";

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => restartGame());

const playerAttemptsCount = document.querySelector("span");
let playerAttempts = 0;
playerAttemptsCount.textContent = playerAttempts;

const playerMatchCount = document.querySelector(".playerMatchCount");
let playerMatches = 0;
playerMatchCount.textContent = playerMatches;

//Random Card Function
const randomizeCards = () => {
	const cardData = getCardData();
	cardData.sort(() => Math.random() - 0.5);
	return cardData;
};

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

		front.src = data.front;
		card.setAttribute("value", data.id);

		card.appendChild(front);
		card.appendChild(back);
		section.appendChild(card);

		card.addEventListener("click", (e) => {
			//animation
			card.classList.toggle("toggleCard");
			checkCards(e);
		});
	}
}

//Check Cards
const checkCards = (e) => {
	const clickedCard = e.target;
	clickedCard.classList.add("flipped");
	const flippedCards = document.querySelectorAll(".flipped");

	//Logic
	if (flippedCards.length === 2) {
		if (
			flippedCards[0].getAttribute("value") ===
			flippedCards[1].getAttribute("value")
		) {
			playerMatches += 1;
			playerMatchCount.textContent = playerMatches;
			if (playerMatches === 8) {
				console.log("WINNN");
				resetText();
			}
			flippedCards.forEach((card) => {
				card.classList.remove("flipped");
				card.style.pointerEvents = "none";
			});
		} else {
			flippedCards.forEach((card) => {
				card.classList.remove("flipped");
				setTimeout(() => card.classList.remove("toggleCard"), 1300);
			});
			playerAttempts += 1;
			playerAttemptsCount.textContent = playerAttempts;
		}
	}
};

const restartGame = () => {
	let cardData = randomizeCards();
	console.log("cardData restart", cardData);
	let faces = document.querySelectorAll(".front");
	let cards = document.querySelectorAll(".card");
	console.log(cards, "cards");
	console.log(faces, "faces");
	cardData.forEach((item, index) => {
		cards[index].classList.remove("toggleCard");
		cards[index].style.pointerEvents = "all";
		cards[index].setAttribute("value", item.id);
		faces[index].src = item.front;
	});
	resetText();
};

resetButton.addEventListener("click", () => restartGame());
makeCards();

const resetText = () => {
	playerMatches = 0;
	playerMatchCount.textContent = playerMatches;
	playerAttempts = 0;
	playerAttemptsCount.textContent = playerAttempts;
};
