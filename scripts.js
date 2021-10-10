
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

function shuffleDeckAnimation () {
	console.log('start');
	gsap.from(".anim0", { x: 500, y: 500, delay: 2 });
	gsap.from(".anim1", { x: 150, y: 500, delay: 2 });
	gsap.from(".anim2", { x: -200, y: 500, delay: 2 });
	gsap.from(".anim3", { x: -550, y: 500, delay: 2 });
	
	gsap.from(".anim4", { x: 500, y: 150, delay: 2 });
	gsap.from(".anim5", { x: 150, y: 150, delay: 2 });
	gsap.from(".anim6", { x: -200, y: 150, delay: 2 });
	gsap.from(".anim7", { x: -550, y: 150, delay: 2 });
	
	gsap.from(".anim8", { x: 500, y: -200, delay: 2 });
	gsap.from(".anim9", { x: 150, y: -200, delay: 2 });
	gsap.from(".anim10", { x: -200, y: -200, delay: 2 });
	gsap.from(".anim11", { x: -550, y: -200, delay: 2 });
	
	gsap.from(".anim12", { x: 500, y: -550, delay: 2 });
	gsap.from(".anim13", { x: 150, y: -550, delay: 2 });
	gsap.from(".anim14", { x: -200, y: -550, delay: 2 });
	gsap.from(".anim15", { x: -550, y: -550, delay: 2 });
};

//Access Elements
const section = document.querySelector("section");

//Restart Game
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => restartGame());

//Score Trackers
const playerAttemptsCount = document.querySelector(".playerAttemptsCount");
const playerMatchCount = document.querySelector(".playerMatchCount");
const resetText = () => {
	playerMatches = 8;
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
	randomCardData.map((item, index) => {
		const card = document.createElement("DIV");
		const front = document.createElement("DIV");
		const back = document.createElement("DIV");
		const frontImg = document.createElement("IMG");
		const backImg = document.createElement("IMG");

		card.classList = "card";
		card.classList.add(`anim${index}`);
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
		  back.classList.add("hidden");
		  checkCards(e);
		});
	});
	shuffleDeckAnimation();
}

//Check Cards
const checkCards = (e) => {
	const allCards = document.querySelectorAll('.card');
	//clicked div containing front and back
	const clickedCard = e.target;
	clickedCard.classList.add("flipped");
	
	const flippedCards = document.querySelectorAll(".flipped");
	flippedCards.length = 2;

	if (flippedCards.length === 2) {


		if (
			flippedCards[0].getAttribute("value") ===
			flippedCards[1].getAttribute("value")
		) {
			playerMatches -= 1;
			playerMatchCount.textContent = playerMatches;

			if (playerMatches === 8) {
				resetText();
			}
			flippedCards.forEach((card) => {
				card.classList.remove("flipped");
				
				
				setTimeout(() => card.classList.add("green"), 100);
				setTimeout(() => card.classList.remove("green"), 1000);
			});
		} else {
			flippedCards.forEach((card) => {
				console.log(card);
				const backDiv = card.querySelector(".back");
				console.log(backDiv);
				card.classList.remove("flipped");
				setTimeout(() => card.classList.add("red"), 200);
				setTimeout(() => card.classList.remove("red"), 1000);
				setTimeout(() => backDiv.classList.remove("hidden"), 1300);
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
	cards[index].style.pointerEvents = "all";
	cards[index].setAttribute("value", item.value);
	faces[index].src = item.front;
	});
	resetText();
};

resetButton.addEventListener("click", () => restartGame());
makeCards();
