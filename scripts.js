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

//Restart Game
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => restartGame());

//Score Trackers
const playerAttemptsCount = document.querySelector(".playerAttemptsCount");
const playerMatchCount = document.querySelector(".playerMatchCount");
const resetText = () => {
	playerMatches = 0;
	playerMatchCount.textContent = playerMatches;
	playerAttempts = 0;
	playerAttemptsCount.textContent = playerAttempts;
};
resetText();

//not an ideal shuffle function
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
		const front = document.createElement("DIV");
		const back = document.createElement("DIV");
		const frontImg = document.createElement("IMG");
		const backImg = document.createElement("IMG");

		card.classList = "card";
		front.classList = "front";
		back.classList = "back";
		frontImg.classList = "cardImage";
		backImg.classList = "cardImage";
		frontImg.src = item.front;
		backImg.src = item.back;

		card.setAttribute("value", item.value);
		front.appendChild(frontImg);
		back.appendChild(backImg);
		card.appendChild(front);
		card.appendChild(back);
		section.appendChild(card);

		card.addEventListener("click", (e) => {
			//animation

			back.classList.add("hidden");
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
			playerMatches -= 1;
			playerMatchCount.textContent = playerMatches;

			if (playerMatches === 8) {
				console.log("WINNN");
				resetText();
			}
			flippedCards.forEach((card) => {
				card.classList.remove("flipped");
				card.style.pointerEvents = "none";
				setTimeout(() => card.classList.add("green"), 500);
				setTimeout(() => card.classList.remove("green"), 3000);
			});
		} else {
			flippedCards.forEach((card) => {
				console.log(card);
				const backDiv = card.querySelector('.back');
				console.log(backDiv);
				card.classList.remove("flipped");
				setTimeout(() => card.classList.add("red"), 500);
				setTimeout(() => card.classList.remove("red"), 3000);
				setTimeout(() => backDiv.classList.remove("hidden"), 3000);
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

resetButton.addEventListener("click", () => restartGame());
makeCards();
