/**
 * Represents the player's character in the game.
 */
export class Player {
	
	/**
	 * Creates a new instance of Player at the given coordinates and a size of 10 by 10.
	 * @param x - The x coordinate of the player's location on the screen.
	 * @param y - They y coordinate of the player's location on the screen.
	 * @param maximumHeight - The vertical limit of movement for the Player.
	 */
	constructor(x, y, maximumHeight) {
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
		this.direction = -1;
		this.maximumHeight = maximumHeight;
	}
	
	/**
	 * Updates this Player's state.  <br>
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
