import Enemy from "./enemy.js";
import Player from "./player.js";

/* globals document: false */

const canvas = document.getElementById("game-layer");
const context = canvas.getContext("2d");

const player = new Player(100, 175);
const enemy1 = new Enemy(20, 25);
const enemy2 = new Enemy(80, 25);
const enemy3 = new Enemy(160, 25);

context.fillStyle = "grey";
context.fillRect(0, 0, canvas.width, canvas.height);

player.draw(context);
enemy1.draw(context);
enemy2.draw(context);
enemy3.draw(context);

