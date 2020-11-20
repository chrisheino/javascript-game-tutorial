import Enemy from "./enemy.js";
import Player from "./player.js";

/* globals document: false, window: false */

const canvas = document.getElementById("game-layer");
const context = canvas.getContext("2d");

const player = new Player(100, 175, canvas.height);
const enemy1 = new Enemy(20, 25, canvas.height);
const enemy2 = new Enemy(80, 25, canvas.height);
const enemy3 = new Enemy(160, 25, canvas.height);

function frameUpdate() {
	
	"use strict";

	context.fillStyle = "grey";
	context.fillRect(0, 0, canvas.width, canvas.height);

	player.update();
	player.draw(context);
	
	enemy1.update();
	enemy1.draw(context);
	
	enemy2.update();
	enemy2.draw(context);
	
	enemy3.update();
	enemy3.draw(context);

	window.requestAnimationFrame(frameUpdate);
}

frameUpdate();

