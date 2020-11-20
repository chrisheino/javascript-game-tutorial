/**
 * Represents an enemy character in the game.
 */
export default class Enemy {
	
	/**
	 * Creates a new instance of Enemy with a width and height of 10 and located at the given coordinates.
	 * @param x The x coordinate of the location for this Enemy.
	 * @param y The y coordinate of the location for this Enemy.
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
	 * Draws this Enemy at its location.
	 * @param context The drawing context, whose methods will be used to draw this instance.
	 */
	draw(context) {
		context.fillStyle = "red";
		context.fillRect(this.x, this.y, this.width, this.height);
	}
	
	update() {
		this.y = this.y + this.direction;
		if (this.y <= 0 || this.y + this.height >= this.maximumHeight) {
			this.direction *= -1;
		}
	}
}
