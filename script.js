const gameBoard = document.querySelector('.game-board');
const grid1 = document.getElementById('grid1');
const grid2 = document.getElementById('grid2');
const grid3 = document.getElementById('grid3');
const grid4 = document.getElementById('grid4');
const grid5 = document.getElementById('grid5');
const grid6 = document.getElementById('grid6');
const grid7 = document.getElementById('grid7');
const grid8 = document.getElementById('grid8');
const grid9 = document.getElementById('grid9');
const modal = document.getElementById('modal');
const resetButton = document.getElementById('reset-button');
const popupMessage = document.querySelector('.popup-message');

const player = (weapon) => {
    let counter = 0;
    const getWeapon = () => weapon;

    const displayWeapon = (grid) => {
        switch (grid.id){
            case 'grid1':
                grid1.innerText = getWeapon();
                break;
            case 'grid2':
                grid2.innerText = getWeapon();
                break;
            case 'grid3':
                grid3.innerText = getWeapon();
                break;        
            case 'grid4':
                grid4.innerText = getWeapon();
                break;
            case 'grid5':
                grid5.innerText = getWeapon();
                break;
            case 'grid6':
                grid6.innerText = getWeapon();
                break;
            case 'grid7':
                grid7.innerText = getWeapon();
                break;
            case 'grid8':
                grid8.innerText = getWeapon();
                break;
            case 'grid9':
                grid9.innerText = getWeapon();
                break;
        }

    };
    const played = () => counter++;
    return {displayWeapon, getWeapon, played,};
};

function displayModal(){
    modal.showModal();
}

function resetGrid(){
    grid1.innerText = '';
    grid2.innerText = '';
    grid3.innerText = '';
    grid4.innerText = '';
    grid5.innerText = '';
    grid6.innerText = '';
    grid7.innerText = '';
    grid8.innerText = '';
    grid9.innerText = '';
}

function closeModal(){
    resetGrid();
    modal.close();
}

const getResult = () => {
    switch (true){
        case (grid1.innerText === player1.getWeapon() && grid2.innerText === player1.getWeapon() && grid3.innerText === player1.getWeapon()) :
            popupMessage.innerText = `${player1.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid4.innerText === player1.getWeapon() && grid5.innerText === player1.getWeapon() && grid6.innerText === player1.getWeapon()) :
            popupMessage.innerText = `${player1.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid7.innerText === player1.getWeapon() && grid8.innerText === player1.getWeapon() && grid9.innerText === player1.getWeapon()) :
            popupMessage.innerText = `${player1.getWeapon()} WON THE GAME`;
            displayModal();
            break;        
        case (grid1.innerText === player1.getWeapon() && grid4.innerText === player1.getWeapon() && grid7.innerText === player1.getWeapon()) :
            popupMessage.innerText = `${player1.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid2.innerText === player1.getWeapon() && grid5.innerText === player1.getWeapon() && grid8.innerText === player1.getWeapon()) :
            popupMessage.innerText = `${player1.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid3.innerText === player1.getWeapon() && grid6.innerText === player1.getWeapon() && grid9.innerText === player1.getWeapon()) :
            popupMessage.innerText = `${player1.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid1.innerText === player1.getWeapon() && grid5.innerText === player1.getWeapon() && grid9.innerText === player1.getWeapon()) :
            popupMessage.innerText = `${player1.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid3.innerText === player1.getWeapon() && grid5.innerText === player1.getWeapon() && grid7.innerText === player1.getWeapon()) :
            popupMessage.innerText = `${player1.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid1.innerText === player2.getWeapon() && grid2.innerText === player2.getWeapon() && grid3.innerText === player2.getWeapon()) :
            popupMessage.innerText = `${player2.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid4.innerText === player2.getWeapon() && grid5.innerText === player2.getWeapon() && grid6.innerText === player2.getWeapon()) :
            popupMessage.innerText = `${player2.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid7.innerText === player2.getWeapon() && grid8.innerText === player2.getWeapon() && grid9.innerText === player2.getWeapon()) :
            popupMessage.innerText = `${player2.getWeapon()} WON THE GAME`;
            displayModal();
            break;        
        case (grid1.innerText === player2.getWeapon() && grid4.innerText === player2.getWeapon() && grid7.innerText === player2.getWeapon()) :
            popupMessage.innerText = `${player2.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid2.innerText === player2.getWeapon() && grid5.innerText === player2.getWeapon() && grid8.innerText === player2.getWeapon()) :
            popupMessage.innerText = `${player2.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid3.innerText === player2.getWeapon() && grid6.innerText === player2.getWeapon() && grid9.innerText === player2.getWeapon()) :
            popupMessage.innerText = `${player2.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid1.innerText === player2.getWeapon() && grid5.innerText === player2.getWeapon() && grid9.innerText === player2.getWeapon()) :
            popupMessage.innerText = `${player2.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        case (grid3.innerText === player2.getWeapon() && grid5.innerText === player2.getWeapon() && grid7.innerText === player2.getWeapon()) :
            popupMessage.innerText = `${player2.getWeapon()} WON THE GAME`;
            displayModal();
            break;
        default:
            if (grid1.innerText !== '' && grid2.innerText !== '' && grid3.innerText !== '' &&
                grid4.innerText !== '' && grid5.innerText !== '' && grid6.innerText !== '' &&
                grid7.innerText !== '' && grid8.innerText !== '' && grid9.innerText !== ''){
                popupMessage.innerText = `DRAW GAME`;
                displayModal();
            }
            break;   
    }
};


const player1 = player('x');
const player2 = player('o');


gameBoard.addEventListener('click', (e) => {
    const target = e.target;

    if (target.innerText !== player1.getWeapon() && target.innerText !== player2.getWeapon() && player1.played() === player2.played()){
        player1.displayWeapon(target);
        player1.played();
    }else if (target.innerText !== player1.getWeapon() && target.innerText !== player2.getWeapon() && player1.played() > player2.played()){
        player2.displayWeapon(target);
        player2.played();
    }
    getResult();
});

resetButton.addEventListener('click', closeModal);
