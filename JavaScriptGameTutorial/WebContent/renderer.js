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
	 * @param gameBoundary - The boundary of movement for entities in the game.
	 */
	constructor(canvas, entities, gameBoundary) {
		this._context = canvas.getContext("2d");
		this._entities = entities;
		this._gameBoundary = gameBoundary;
		this._enemyRankToColor = [
			"rgb(150, 7, 7)",
			"rgb(150, 89, 7)",
			"rgb(56, 150, 7)",
			"rgb(7, 150, 122)",
			"rgb(46, 7, 150)",
		];
	}
	
	/** 
	 * Clear the canvas and redraw the game entities on it.<br>
	 * <br>
	 * Note: changeOfTime is not used yet.
	 * @param {number} changeOfTime - The amount of time that has occurred since the last call to this method.
	 */
	render(changeOfTime) {
		this._context.fillStyle = "black";
		this._context.fillRect(this._gameBoundary.left(), this._gameBoundary.top(), this._gameBoundary.right(), this._gameBoundary.bottom());
		
		for (let index = 0; index < this._entities.length; index++) {
			const currentEntity = this._entities[index];
			if (currentEntity instanceof Player) {
				this._drawRectangle("rgb(255, 255, 0)", currentEntity);
			} else if (currentEntity instanceof Enemy) {
				this._drawRectangle(this._enemyRankToColor[currentEntity.getRank()], currentEntity);
			} else {
				throw new Error('Unimplemented type of entity being rendered: ' + currentEntity);
			}
		}
	}
	
	/*
	 * Draws the entity as a rectangle of the given color.<br>
	 * <br>
	 * Note: I am not sure what the type of the rgb() return value is.
	 * @param {Entity} A Player or Enemy to draw as a rectangle.
	 * @param {rgb} The color for this entity.
	 */
	_drawRectangle(color, entity) {
		this._context.fillStyle = color;
		const position = entity.getPosition();
		this._context.fillRect(
				position.getXCoordinate() - entity.getWidth() / 2,
				position.getYCoordinate() - entity.getHeight() / 2,
				entity.getWidth(),
				entity.getHeight());
	}
}