const game = document.querySelector('#game');
const grid = document.createElement('section');

grid.setAttribute('class', 'grid');
game.appendChild(grid);

const aAoODeck = [
    {
        'character': 'a',
        'value': '1',
    },
    {
        'character': 'i',
        'value': '2',
    },
    {
        'character': 'u',
        'value': '3',
    },
    {
        'character': 'e',
        'value': '4',
    },
    {
        'character': 'o',
        'value': '5',
    },
    {
        'character': 'あ',
        'value': '1',
    },
    {
        'character': 'い',
        'value': '2',
    },
    {
        'character': 'う',
        'value': '3',
    },
    {
        'character': 'え',
        'value': '4',
    },
    {
        'character': 'お',
        'value': '5',
    },

]

let playTable = aAoODeck;
playTable.sort(() => 0.5 - Math.random());
playTable.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = item.value;
    card.textContent = item.character;
    grid.appendChild(card);
})


let cardCount = 0;
let card1 = '';
let card2 = '';



grid.addEventListener('click', function (event) {
    let areaClicked = event.target;

    function chooseTwoCards() {
        if (cardCount === 0) {
            areaClicked.classList.add('selected');
            card1 = areaClicked.dataset.value;
            cardCount++;
        } else if (cardCount === 1) {
            areaClicked.classList.add('selected');
            card2 = areaClicked.dataset.value;
            cardCount++;

            if (card1 === card2){
                console.log('its a match');
                cardCount = 0;
            } else {
                console.log('not a match');
                cardCount = 0;
                card1 = '';
                card2 = '';
            }
        } else {
            cardCount = 0;
            card1 = '';
            card2 = '';
        }
    };

    if(areaClicked.nodeName ==='DIV') {
        chooseTwoCards();
    } else {
        return;
    };

    

    console.log('This is cardCount' + cardCount);
    console.log(card1);
        
})