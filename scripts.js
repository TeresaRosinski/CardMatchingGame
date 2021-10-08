const cardData = [
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-1.png",
		value: 1,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-2.png",
		value: 2,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-3.png",
		value: 3,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-4.png",
		value: 4,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-5.png",
		value: 5,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-6.png",
		value: 6,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-7.png",
		value: 7,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-8.png",
		value: 8,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-1.png",
		value: 1,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-2.png",
		value: 2,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-3.png",
		value: 3,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-4.png",
		value: 4,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-5.png",
		value: 5,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-6.png",
		value: 6,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-7.png",
		value: 7,
	},
	{
		back: "./IMG/card-back.jpg",
		front: "./IMG/icon-8.png",
		value: 8,
	},
];

//Access Elements
const section = document.querySelector("section");
section.className = "game-board";

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => restartGame());

const playerAttemptsCount = document.querySelector(".playerAttemptsCount");
let playerAttempts = 0;
playerAttemptsCount.textContent = playerAttempts;

const playerMatchCount = document.querySelector(".playerMatchCount");
let playerMatches = 0;
playerMatchCount.textContent = playerMatches;

const randomizeCards = () => {
	cardData.sort(() => Math.random() - 0.5);
	return cardData;
};

function makeCards() {
	//creates random assorment of card data
	const randomCardData = randomizeCards();
	//create a playing card for each object in the randomCardData Array
	randomCardData.map((item) => {
		const card = document.createElement("DIV");
		const front = document.createElement("img");
		const back = document.createElement("DIV");

		card.classList = "card";
		front.classList = "front";
		back.classList = "back";

		front.src = item.front;
		card.setAttribute("value", item.value);

		card.appendChild(front);
		card.appendChild(back);
		section.appendChild(card);

		card.addEventListener("click", (e) => {
			//animation
			card.classList.toggle("toggleCard");
			checkCards(e);
		});
	});
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
				card.classList.add("red");
				setTimeout(() => card.classList.remove("toggleCard"), 1000);
			});
			playerAttempts += 1;
			playerAttemptsCount.textContent = playerAttempts;
		}
	}
};

const restartGame = () => {
	let cardData = randomizeCards();
	let faces = document.querySelectorAll(".front");
	let cards = document.querySelectorAll(".card");
	cardData.forEach((item, index) => {
		cards[index].classList.remove("toggleCard");
		cards[index].style.pointerEvents = "all";
		setTimeout(() => cards[index].setAttribute("value", item.value), 1300);
		setTimeout(() => (faces[index].src = item.front), 1300);
	});
	resetText();
};

const resetText = () => {
	playerMatches = 0;
	playerMatchCount.textContent = playerMatches;
	playerAttempts = 0;
	playerAttemptsCount.textContent = playerAttempts;
};

resetButton.addEventListener("click", () => restartGame());
makeCards();
