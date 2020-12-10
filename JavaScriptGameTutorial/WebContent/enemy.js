import {Entity} from "./entity.js";

/**
 * Represents an enemy character in the game.
 */
export class Enemy extends Entity {
	
	/**
	 * Creates a new instance of Enemy with a width of 13 and height of 10.
	 * @param {Vector2D} position - The current location on the screen of this enemy's upper-left-hand corner.
	 * @param {number} speed - The current speed of this enemy
	 * @param {Vector2D} direction - The direction of this enemy's movement.
	 * @param {number} rank - Determines this enemy's screen position and score value.
	 * @param {Rectangle} boundary - This enemy is not allowed to move outside of the dimensions defined by this Rectangle.
	 */
	constructor(position, speed, direction, rank, boundary) {
		super(position, speed, direction, 13, 10);
		this._rank = rank;
		this._boundary = boundary;
	}
	
	/**
	 * The rank of this enemy.
	 * @return {number} The rank of this enemy.
	 */
	getRank() {
		return this._rank;
	}
	
	/**
	 * Updates this Enemy's state. 
	 * @param {number} changeOfTime - The amount of time that has occurred since the last call to this method.
	 */
	update(changeOfTime) {
		super.update(changeOfTime);
		const currentCollisionRectangle = this.createCollisionRectangle();
		if (currentCollisionRectangle.top() <= this._boundary.top() ||
				currentCollisionRectangle.bottom() >= this._boundary.bottom()) {
			this.changeDirection(this.getDirection().scalarMultipliedBy(-1));
		}
	}
}
