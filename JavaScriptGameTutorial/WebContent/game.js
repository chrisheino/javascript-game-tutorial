import {Enemy} from "./enemy.js";
import {Physics} from "./physics.js";
import {Player} from "./player.js";
import {Renderer} from "./renderer.js";

/**
 *  Represents the game as a whole; coordinates between all of the different objects in the game system.<br>
 *  <br>
 *  There should only be one instance of this class in the system.
 */
export class Game {
	
	/**
	 * Creates a new instance of the game that draws to the given canvas in the given window.
	 * @param window - The window that contains the game.
	 * @param canvas - The canvas on which the game's graphics are drawn.
	 */
	constructor(window, canvas) {
		this._width = canvas.width;
		this._height = canvas.height;
		this._window = window;
		this._entities = [];
		this._physics = new Physics(this._entities);
		this._renderer = new Renderer(canvas, this._entities);
	}
	
	/**
	 * Starts the game.  
	 * 
	 * Only call this method once.
	 */
	start() {
		this._entities.push(new Player(100, 25, this._height));
		this._entities.push(new Enemy(20, 25, this._height));
		this._entities.push(new Enemy(80, 25, this._height));
		this._entities.push(new Enemy(160, 25, this._height));
		
		this._window.requestAnimationFrame(this._update.bind(this));
	}
	
	/*
	 * Causes the game to update the game state and draw it to the canvas.
	 * 
	 * Private method.
	 */
	_update() {
		this._physics.update();
		for (let index = 0; index < this._entities.length; index++) {
			const currentEntity = this._entities[index];
			currentEntity.update();
		}
		this._renderer.render();
		
		this._window.requestAnimationFrame(this._update.bind(this));
	}
}