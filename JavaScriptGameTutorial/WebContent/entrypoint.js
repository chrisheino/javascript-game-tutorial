import {Game} from "./game.js";

/*
 * Entry point to the game.
 */

/* globals document: false, window: false */

const canvas = document.getElementById("game-layer");
const game = new Game(window, canvas);
game.start();

