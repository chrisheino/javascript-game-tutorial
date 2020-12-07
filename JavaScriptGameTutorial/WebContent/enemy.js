/**
 * Represents an enemy character in the game.
 */
export class Enemy {
	
	/**
	 * Creates a new instance of Enemy with a width and height of 10 and located at the given coordinates.<br>
	 * <br>
	 * Minimum height is assumed to be 0.
	 * @param x - The x coordinate of the location for this Enemy.
	 * @param y - The y coordinate of the location for this Enemy.
	 * @param maximumHeight - Represents the limit of vertical movement for this Enemy.
	 */
	constructor(x, y, maximumHeight) {
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
		this.direction = 1;
		this.maximumHeight = maximumHeight;
	}
	
	/**
	 * Updates this Enemy's state.  <br>
	 * <br>
	 * This should be called during each iteration of the game's event loop.
	 */
	update() {
		this.y = this.y + this.direction;
		if (this.y <= 0 || this.y + this.height >= this.maximumHeight) {
			this.direction *= -1;
		}
	}
}
