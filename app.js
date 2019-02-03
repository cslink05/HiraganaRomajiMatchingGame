const game = document.querySelector('#game');
const pairGrid = document.querySelector('#pairGrid');
const grid = document.createElement('section');
const matchedGrid = document.createElement('section');
const guesses = document.querySelector('#guesses');
const matchOrNot = document.querySelector('#matchOrNot');
const aAButton = document.querySelector('#aA-button');
const kaButton = document.querySelector('#ka-button');

grid.setAttribute('class', 'grid');
game.appendChild(grid);
matchedGrid.setAttribute('class', 'grid');
pairGrid.appendChild(matchedGrid);

const aAoODeck = [
    {'character': 'a', 'value': 'a　あ'},
    {'character': 'i', 'value': 'i　い'},
    {'character': 'u', 'value': 'u　う'},
    {'character': 'e', 'value': 'e　え'},
    {'character': 'o', 'value': 'o　お'},
    {'character': 'あ', 'value': 'a　あ'},
    {'character': 'い', 'value': 'i　い'},
    {'character': 'う', 'value': 'u　う'},
    {'character': 'え', 'value': 'e　え'},
    {'character': 'お', 'value': 'o　お'},
];

const kaKoDeck = [
    {'character': 'ka', 'value': 'ka　か'},
    {'character': 'ki', 'value': 'ki　き'},
    {'character': 'ku', 'value': 'ku　く'},
    {'character': 'ke', 'value': 'ke　け'},
    {'character': 'ko', 'value': 'ko　こ'},
    {'character': 'か', 'value': 'ka　か'},
    {'character': 'き', 'value': 'ki　き'},
    {'character': 'く', 'value': 'ku　く'},
    {'character': 'け', 'value': 'ke　け'},
    {'character': 'こ', 'value': 'ko　こ'},
];



aAButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(aAoODeck);
});

kaButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(kaKoDeck);
});


let cardCount = 0;
let card1 = '';
let firstSelected = '';
let card2 = '';
let totalMatches = '';
guesses.textContent = 0;

function setUpGame(deck) {
    clearGrid();
    chooseDeck(deck);
    resetGame();
}

function chooseDeck(deck) {
    let playTable = deck;
    playTable.sort(() => 0.5 - Math.random());
    playTable.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = item.value;
        card.dataset.name = item.character;

        const front = document.createElement('div');
        front.classList.add('front');

        const back = document.createElement('div');
        back.classList.add('back');
        back.textContent = item.character;

        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });
};

function resetGame() {
    cardCount = 0;
    card1 = '';
    card2 = '';
    guesses.textContent = 0;
    matchOrNot.textContent = '';
};

function clearGrid() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    };
    while(pairGrid.firstChild) {
        pairGrid.removeChild(pairGrid.firstChild);
    }
};

function resetTurn() {
    cardCount = 0;
    card1 = '';
    card2 = '';
    guesses.textContent++;
};

function removeSelected() {
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
};

function match() {
    const matched = document.querySelectorAll('.selected');
    matched.forEach(card => {
        card.classList.add('match');
    });
    removeSelected();
    
};

function addCardsToGrid() {
    let answer = document.createElement('h3');
    answer.classList.add('matched-pairs')
    answer.textContent = card1;
    pairGrid.appendChild(answer);
};

grid.addEventListener('click', function (event) {
    let areaClicked = event.target;

    function chooseTwoCards() {
        if (cardCount === 0) {
            card1 = areaClicked.parentNode.dataset.value;
            firstSelected = areaClicked.parentNode.dataset.name;
            cardCount++;
            areaClicked.parentNode.classList.add('selected');
        } else if (cardCount === 1 && firstSelected !== areaClicked.parentNode.dataset.name) {
            card2 = areaClicked.parentNode.dataset.value;
            areaClicked.parentNode.classList.add('selected');
        };

        if (card1 && card2){
            if (card1 === card2){
                matchOrNot.textContent = "You found a match! Keep Going!"
                setTimeout(match, 1500);
                addCardsToGrid();
                resetTurn();
            } else {
                matchOrNot.textContent = "Not a match... Try again!"
                setTimeout(removeSelected, 1500);
                resetTurn();
            };
        };
        
    };

    if (areaClicked.nodeName ==='DIV') {
        chooseTwoCards();
    } else if (areaClicked.nodeName === 'SECTION') {
        return;
    };
        
})