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

function shuffleDeckAnimation() {
	gsap.from(".anim1", { x: 150, y: 500, delay: 1 });
	gsap.from(".anim2", { x: -200, y: 500, delay: 1 });
	gsap.from(".anim4", { x: 500, y: 150, delay: 1 });
	gsap.from(".anim5", { x: 150, y: 150, delay: 1 });
	gsap.from(".anim6", { x: -200, y: 150, delay: 1 });
	gsap.from(".anim7", { x: -550, y: 150, delay: 1 });
	gsap.from(".anim8", { x: 500, y: -200, delay: 1 });
	gsap.from(".anim9", { x: 150, y: -200, delay: 1 });
	gsap.from(".anim10", { x: -200, y: -200, delay: 1 });
	gsap.from(".anim11", { x: -550, y: -200, delay: 1 });
	gsap.from(".anim13", { x: 150, y: -550, delay: 1 });
	gsap.from(".anim14", { x: -200, y: -550, delay: 1 });

	//corners
	gsap.from(".anim12", { x: 500, y: -550, delay: 1.5 });
	gsap.from(".anim15", { x: -550, y: -550, delay: 1.5 });
	gsap.from(".anim3", { x: -550, y: 500, delay: 1.5 });
	gsap.from(".anim0", { x: 500, y: 500, delay: 1.5 });
}

//Access Elements
const section = document.querySelector(".game-board");

//Array for checking card pairs
let pairedArray = [];

//Restart Game
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => restartGame());

//Score Trackers
const playerAttemptsCount = document.querySelector(".player-attempts-count");
const playerMatchCount = document.querySelector(".player-match-count");

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
		frontImg.classList = "card-image";
		backImg.classList = "card-image";
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
			pushPairArray(e);
		});
	});
	setTimeout(() => shuffleDeckAnimation(), 1000);
}

//onclick function added to each card when they are created
const pushPairArray = (e) => {
	if (!pairedArray.includes(e.target)) {
		pairedArray.push(e.target);
	} else {
		alert("don't click the same box twice");
	}
	if (pairedArray.length === 2) {
		checkPairedArray(pairedArray);
		pairedArray = [];
	}
};

//invoked during pushPairArray function when array length === 2
function checkPairedArray(arr) {
	if (arr[0].getAttribute("value") === arr[1].getAttribute("value")) {
		arr.forEach((card) => {
			const gSelector = card.classList[1];
			gsap.from(`.${gSelector}`, {
				backgroundColor: "green",
				duration: 1,
				delay: 1,
			});
		});
		playerMatches -= 1;
		playerMatchCount.textContent = playerMatches;
		if (playerMatches === 0) {
			resetText();
		}
	} else {
		arr.forEach((card) => {
			const gSelector = card.classList[1];
			gsap.from(`.${gSelector}`, {
				backgroundColor: "red",
				duration: 1,
				delay: 1,
				pointerEvents: "none",
			});
			const backDiv = card.querySelector(".back");
			setTimeout(() => backDiv.classList.remove("hidden"), 1300);
		});
		playerAttempts += 1;
		playerAttemptsCount.textContent = playerAttempts;
	}
}

const restartGame = () => {
	let cardData = randomizeCards();
	let faces = document.querySelectorAll(".front");
	let cards = document.querySelectorAll(".card");
	let backs = document.querySelectorAll(".back");
	cardData.map((item, index) => {
		cards[index].style.pointerEvents = "all";
		cards[index].setAttribute("value", item.value);
		faces[index].children[0].src = item.front;
		backs[index].classList.remove("hidden");
	});
	resetText();
};

resetButton.addEventListener("click", () => restartGame());
makeCards();
