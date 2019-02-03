const game = document.querySelector('#game');
const pairGrid = document.querySelector('#pairGrid');
const grid = document.createElement('section');
const matchedGrid = document.createElement('section');
const guesses = document.querySelector('#guesses');

grid.setAttribute('class', 'grid');
game.appendChild(grid);
matchedGrid.setAttribute('class', 'grid');
pairGrid.appendChild(matchedGrid);

const aAoODeck = [
    {
        'character': 'a',
        'value': 'a　あ',
    },
    {
        'character': 'i',
        'value': 'i　い',
    },
    {
        'character': 'u',
        'value': 'u　う',
    },
    {
        'character': 'e',
        'value': 'e　え',
    },
    {
        'character': 'o',
        'value': 'o　お',
    },
    {
        'character': 'あ',
        'value': 'a　あ',
    },
    {
        'character': 'い',
        'value': 'i　い',
    },
    {
        'character': 'う',
        'value': 'u　う',
    },
    {
        'character': 'え',
        'value': 'e　え',
    },
    {
        'character': 'お',
        'value': 'o　お',
    },

]

let playTable = aAoODeck;
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
})

let cardCount = 0;
let card1 = '';
let firstSelected = '';
let card2 = '';
let card2Char = '';
guesses.textContent = 0;

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
    })
}
function match() {
    
    const matched = document.querySelectorAll('.selected');
    matched.forEach(card => {
        card.classList.add('match');
    });
    removeSelected();
    
};

function addCardsToGrid() {
    let answer = document.createElement('h1');
    answer.textContent = card1;
    pairGrid.appendChild(answer);
    
}

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
        } 

        if (card1 && card2){
            if (card1 === card2){
                setTimeout(match, 2000);
                addCardsToGrid();
                resetTurn();
            } else {
                setTimeout(removeSelected, 2000);
                resetTurn();
            }
        }
        
    };

    if (areaClicked.nodeName ==='DIV') {
        chooseTwoCards();
    } else if (areaClicked.nodeName === 'SECTION') {
        return;
    };
        
})