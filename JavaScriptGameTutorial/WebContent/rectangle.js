/**
 * Represents a rectangle.<br>
 * <br>
 * Rectangles are used in the game to detect collisions and to define boundaries.
 */
export class Rectangle {
	/**
	 * Creates a new instance of Rectangle with the dimensions given by the arguments.
	 * @param {number} x - The x coordinate of the upper-left corner of the rectangle.
	 * @param {number} y - The y coordinate of the upper-left corner of the rectangle.
	 * @param {number} width - The width (horizontal length) of the rectangle.
	 * @param {number} height - the height (vertical length) of the rectangle.
	 */
	constructor(x, y, width, height) {
		this._x = x;
		this._y = y;
		this._width = width;
		this._height = height;
	}
	
	/**
	 * Returns the left-most x coordinate in the rectangle.
	 * @return {number} The left-most x coordinate in the rectangle.
	 */
	left() {
		return this._x;
	}
	
	/**
	 * Returns the right-most x coordinate in the rectangle.
	 * @return {number} The left-most x coordinate in the rectangle.
	 */
	right() {
		return this._x + this._width;
	}
	
	/**
	 * Returns the top-most y coordinate in the rectangle.
	 * @return {number} The top-most y coordinate in the rectangle.
	 */
	top() {
		return this._y;
	}
	
	/**
	 * Returns the bottom-most y coordinate in the rectangle.
	 * @return {number} The bottom-most y coordinate in the rectangle.
	 */
	bottom() {
		// Not that, because we are using screen coordinates, greater y is down the screen.
		return this._y + this._height;
	}
	
	/**
	 * Returns true if the otherRectangle and this rectangle intersect; false otherwise.
	 * @param {Rectangle} otherRectangle The rectangle to compare.
	 * @return {boolean} True if the rectangles intersect; false otherwise.
	 */
	intersects(otherRectangle) {
		return this.right() >= otherRectangle.left() && 
		    this.left <= otherRectangle.right() && 
			// Again, greater y is down the screen.  Top has lesser y than bottom.
			this.bottom() >= otherRectangle.top() && 
			this.top() <= otherRectangle.bottom();
	}
	
	/**
	 * Returns a Rectangle that is the union of the two given rectangles.<br>
	 * <br>
	 * If one of the arguments is undefined, the other is returned as the result.  Otherwise, a new Rectangle is created.<br>
	 * <br>
	 * A union of rectangles is the smallest rectangle that contains all of the rectangles in the union.
	 * @param {Rectangle} firstRectangle A Rectangle in the union.
	 * @param {Rectangle} secondRectangle Another Rectangle in the union.
	 * @return {Rectangle} A Rectangle that is the union of the two rectangles given as arguments.
	 */
	union(firstRectangle, secondRectangle) {
		
		if (firstRectangle === undefined) {
			return secondRectangle;
		}
		
		if (secondRectangle === undefined) {
			return firstRectangle;
		}
		
		const x = Math.min(firstRectangle.left(), secondRectangle.left());
		const y = Math.min(firstRectangle.top(), secondRectangle.top());
		const width = Math.max(firstRectangle.right(), secondRectangle.right()) - x;
		const height = Math.max(firstRectangle.bottom(), secondRectangle.bottom()) - y;
		return new Rectangle(x, y, width, height);
	}
	
}
