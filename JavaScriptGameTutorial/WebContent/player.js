import {Entity} from "./entity.js";

/**
 * Represents the player's character in the game.
 */
export class Player extends Entity {
	
	/**
	 * Creates a new instance of Player at the given coordinates and a size of 10 by 10.
	 * @param {Vector2D} position - The current location on the screen of the Player's upper-left-hand corner.
	 * @param {number} speed - The current speed of the Player.
	 * @param {Vector2D} direction - The direction of the Player's movement.
	 * @param {number} rank - Determines the Player's screen position and score value.
	 * @param {Rectangle} boundary - The Player is not allowed to move outside of the dimensions defined by this Rectangle.
	 */
	constructor(position, speed, direction, boundary) {
		super(position, speed, direction, 20, 10);
		this._boundary = boundary;
	}
	
	/**
	 * Updates this Player's state.
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
