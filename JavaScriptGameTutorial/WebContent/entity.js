import {Rectangle} from "./rectangle.js";
import {Vector2D} from "./vector2d.js";

/**
 * Represents an entity in the game, such as the player's character or an enemy.
 */
export class Entity {
	
	/**
	 * Creates a new entity with the given position, speed, and direction, at time zero.
	 * @param {Vector2D} position - The current location on the screen of this entity's upper-left-hand corner.
	 * @param {number} speed - The current speed of this entity.
	 * @param {Vector2D} direction - The direction of this entity's movement.
	 * @param {number} width - The width in pixels of this entity.
	 * @param {number} height - The height in pixels of this entity.
	 */
	constructor(position, speed, direction, width, height) {
		this._position = position;
		this._speed = speed;
		this._direction = direction;
		this._time = 0;
		this._width = width;
		this._height = height;
		this._hp = 1;
	}
	
	/**
	 * The position of this Entity.
	 * @return {Vector2D} the position of this Entity.
	 */
	getPosition() {
		return this._position;
	}
	
	/**
	 * The current direction this Entity is moving.
	 * @return {Vector2D} the direction of this Entity.
	 */
	getDirection() {
		return this._direction;
	}
	
	/**
	 * The current speed of this Entity.
	 * @return {number} The speed of this Entity.
	 */
	getSpeed() {
		return this._speed;
	}
	
	/** Change the position of this Entity.
	 * @param {number} x - The new x coordinate for this Entity's position.
	 * @param {number} y - The new y coordinate for this Entity's position.
	 */
	changePosition(x, y) {
		this._position = new Vector2D(x, y);
	}
	
	/** Change the direction of this Entity's movement.
	 * @param {Vector2d} direction - The new direction of this Entity's movement.
	 */
	changeDirection(direction) {
		this._direction = direction;
	}
	
	/**
	 * The width of this Entity.
	 * @return {number} the width of this Entity.
	 */
	getWidth() {
		return this._width;
	}
	
	/**
	 * The height of this Entity.
	 * @return {number} the height of this Entity.
	 */
	getHeight() {
		return this._height;
	}
	
	/**
	 * Updates this entity's current time.
	 * @param {number} changeOfTime - The amount of time that has occurred since the last call to this method.
	 */
	update(changeOfTime) {
		this.time += changeOfTime;
	}
	
	/**
	 * Creates a new Rectangle representing the collision rectangle of this entity.
	 * @return {Rectangle} A new Rectangle representing the collision rectangle of this entity at the current time.
	 */
	createCollisionRectangle() {
		return new Rectangle(
				this._position.getXCoordinate() - this._vidth / 2,
				this._position.getYCoordinate() - this._height / 2,
				this._width,
				this._height);
	}
}
