import {Enemy} from "./enemy.js";
import {Player} from  "./player.js";

/**
 * An instance of this class is responsible for drawing the objects to the screen.
 */
export class Renderer {
	
	/**
	 * Creates a new instance of a Renderer, responsible for drawing the given entities onto the given canvas.
	 * @param canvas - Provides the dimensions and context in which the game entities will be drawn.
	 * @param entities - The game entities to draw onto the canvas.
	 */
	constructor(canvas, entities) {
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext("2d");
		this.entities = entities;
	}
	
	/** 
	 * Clear the canvas and redraw the game entities on it.
	 */
	render() {
		this.context.fillStyle = "grey";
		this.context.fillRect(0, 0, this.width, this.height);
		
		for (let index = 0; index < this.entities.length; index++) {
			const currentEntity = this.entities[index];
			if (currentEntity instanceof Enemy) {
				this._drawEnemy(currentEntity);
			} else if (currentEntity instanceof Player) {
				this._drawPlayer(currentEntity);
			} else {
				throw new Error('Unimplemented type of entity being rendered: ' + currentEntity);
			}
		}
	}
	
	/*
	 * Draws the player at its location.  Internal use only.
	 * @access private
	 * @param {Player} player - The object to render on the screen represented by the context.
	 */
	_drawPlayer(player) {
		this.context.fillStyle = "blue";
		this.context.fillRect(player.x, player.y, player.width, player.height);
	}
	
	/*
	 * Draws the enemy at its location.  Internal use only.
	 * @access private
	 * @param {Enemy} enemy The object to render on the screen represented by the context.
	 */
	_drawEnemy(enemy) {
		this.context.fillStyle = "red";
		this.context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
	}
}