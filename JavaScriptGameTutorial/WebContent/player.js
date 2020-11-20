/**
 * Represents the player's character in the game.
 */
export default class Player {
	
	/**
	 * Creates a new instance of Player at the given coordinates and a size of 10 by 10.
	 * @param x The x coordinate of the player's location on the screen.
	 * @param y They y coordinate of the player's location on the screen.
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
	}
	
	/**
	 * Draws the player at its location.
	 * @param context The drawing context, whose methods will be used to draw this instance.
	 */
	draw(context) {
		context.fillStyle = "blue";
		context.fillRect(this.x, this.y, this.width, this.height);
	}
}
