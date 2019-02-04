const game = document.querySelector('#game');
const pairGrid = document.querySelector('#pairGrid');
const grid = document.createElement('section');
const matchedGrid = document.createElement('section');
const guesses = document.querySelector('#guesses');
const matchOrNot = document.querySelector('#matchOrNot');
const aAButton = document.querySelector('#aA-button');
const kaButton = document.querySelector('#ka-button');
const saButton = document.querySelector('#sa-button');
const taButton = document.querySelector('#ta-button');
const naButton = document.querySelector('#na-button');
const haButton = document.querySelector('#ha-button');
const maButton = document.querySelector('#ma-button');
const raButton = document.querySelector('#ra-button');
const yaButton = document.querySelector('#ya-button');
const allButtons = document.querySelectorAll('.buttons--choice');

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

const saSoDeck = [
    {'character': 'sa', 'value': 'sa　さ'},
    {'character': 'shi', 'value': 'shi　し'},
    {'character': 'su', 'value': 'su　す'},
    {'character': 'se', 'value': 'se　せ'},
    {'character': 'so', 'value': 'so　そ'},
    {'character': 'さ', 'value': 'sa　さ'},
    {'character': 'し', 'value': 'shi　し'},
    {'character': 'す', 'value': 'su　す'},
    {'character': 'せ', 'value': 'se　せ'},
    {'character': 'そ', 'value': 'so　そ'},
];

const taToDeck = [
    {'character': 'ta', 'value': 'ta　た'},
    {'character': 'chi', 'value': 'chi　ち'},
    {'character': 'tsu', 'value': 'tsu　つ'},
    {'character': 'te', 'value': 'te　て'},
    {'character': 'to', 'value': 'to　と'},
    {'character': 'た', 'value': 'ta　た'},
    {'character': 'ち', 'value': 'chi　ち'},
    {'character': 'つ', 'value': 'tsu　つ'},
    {'character': 'て', 'value': 'te　て'},
    {'character': 'と', 'value': 'to　と'},
];

const naNoDeck = [
    {'character': 'na', 'value': 'na　な'},
    {'character': 'ni', 'value': 'ni　に'},
    {'character': 'nu', 'value': 'nu　ぬ'},
    {'character': 'ne', 'value': 'ne　ね'},
    {'character': 'no', 'value': 'no　の'},
    {'character': 'な', 'value': 'na　な'},
    {'character': 'に', 'value': 'ni　に'},
    {'character': 'ぬ', 'value': 'nu　ぬ'},
    {'character': 'ね', 'value': 'ne　ね'},
    {'character': 'の', 'value': 'no　の'},
];

const haHoDeck = [
    {'character': 'ha', 'value': 'ha　は'},
    {'character': 'hi', 'value': 'hi　ひ'},
    {'character': 'hu', 'value': 'hu　ふ'},
    {'character': 'he', 'value': 'he　へ'},
    {'character': 'ho', 'value': 'ho　ほ'},
    {'character': 'は', 'value': 'ha　は'},
    {'character': 'ひ', 'value': 'hi　ひ'},
    {'character': 'ふ', 'value': 'hu　ふ'},
    {'character': 'へ', 'value': 'he　へ'},
    {'character': 'ほ', 'value': 'ho　ほ'},
];

const maMoDeck = [
    {'character': 'ma', 'value': 'ma　ま'},
    {'character': 'mi', 'value': 'mi　み'},
    {'character': 'mu', 'value': 'mu　む'},
    {'character': 'me', 'value': 'me　め'},
    {'character': 'mo', 'value': 'mo　も'},
    {'character': 'ま', 'value': 'ma　ま'},
    {'character': 'み', 'value': 'mi　み'},
    {'character': 'む', 'value': 'mu　む'},
    {'character': 'め', 'value': 'me　め'},
    {'character': 'も', 'value': 'mo　も'},
];

const raRoDeck = [
    {'character': 'ra', 'value': 'ra　ら'},
    {'character': 'ri', 'value': 'ri　り'},
    {'character': 'ru', 'value': 'ru　る'},
    {'character': 're', 'value': 're　れ'},
    {'character': 'ro', 'value': 'ro　ろ'},
    {'character': 'ら', 'value': 'ra　ら'},
    {'character': 'り', 'value': 'ri　り'},
    {'character': 'る', 'value': 'ru　る'},
    {'character': 'れ', 'value': 're　れ'},
    {'character': 'ろ', 'value': 'ro　ろ'},
];

const yaNDeck = [
    {'character': 'ya', 'value': 'ya　や'},
    {'character': 'yu', 'value': 'yu　ゆ'},
    {'character': 'yo', 'value': 'yo　よ'},
    {'character': 'wa', 'value': 'wa　わ'},
    {'character': 'wo', 'value': 'wo　を'},
    {'character': 'n', 'value': 'n　ん'},
    {'character': 'や', 'value': 'ya　や'},
    {'character': 'ゆ', 'value': 'yu　ゆ'},
    {'character': 'よ', 'value': 'yo　よ'},
    {'character': 'わ', 'value': 'wa　わ'},
    {'character': 'を', 'value': 'wo　を'},
    {'character': 'ん', 'value': 'n　ん'},
];

aAButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(aAoODeck);
});

kaButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(kaKoDeck);
});

saButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(saSoDeck);
});

taButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(taToDeck);
});

naButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(naNoDeck);
});

haButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(haHoDeck);
});

maButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(maMoDeck);
});

raButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(raRoDeck);
});

yaButton.addEventListener('click', function(event) {
    event.preventDefault();
    setUpGame(yaNDeck);
});

let cardCount = 0;
let card1 = '';
let firstSelected = '';
let card2 = '';
let totalMatches = '';
let currentDeck = '';
guesses.textContent = 0;

function setUpGame(deck) {
    clearGrid();
    removeHighlight();
    chooseDeck(deck);
    resetGame();
}

allButtons.forEach(button => {
    button.addEventListener('click', function (event){
        button.classList.add('clicked-button');
    });
});

function removeHighlight() {
    allButtons.forEach(button => {
        if(button.classList.contains('clicked-button')) {
            button.classList.remove('clicked-button');
        } 
    });   
};

function chooseDeck(deck) {
    let playTable = deck;
    currentDeck = deck;
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
    matchOrNot.textContent = 'Match the Japanese and English characters';
    totalMatches = 0;
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
                matchOrNot.textContent = "You found a match!"
                totalMatches++;
                setTimeout(match, 1500);
                addCardsToGrid();
                resetTurn();
            } else {
                matchOrNot.textContent = "Try again!"
                setTimeout(removeSelected, 1500);
                resetTurn();
            };
        };

        if(currentDeck !== yaNDeck && totalMatches === 5) {
            matchOrNot.textContent = "You found all the pairs! Choose another deck to reset"
        } else if (currentDeck === yaNDeck && totalMatches === 6) {
            matchOrNot.textContent = "You found all the pairs! Choose another deck to reset"
        }
        
    };

    if (areaClicked.nodeName ==='DIV') {
        chooseTwoCards();
    } else if (areaClicked.nodeName === 'SECTION') {
        return;
    };
        
})