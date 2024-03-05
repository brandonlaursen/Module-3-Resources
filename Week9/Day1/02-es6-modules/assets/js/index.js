import {Game} from './game.js'

window.onload = () => {
    console.log(Game);
    const game = new Game();
    game.start();
};
