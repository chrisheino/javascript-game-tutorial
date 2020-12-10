/**
 * A two-dimensional vector with relevant operations.
 */
export class Vector2D {
	
	/**
	 * Creates a new instance of Vector2D from the origin to the given coordinates.
	 * @param {number} x - The x coordinate of the vector's end point.
	 * @param {number} y - The y coordinate of the vector's end point.
	 */
	constructor(x, y) {
		this._x = x;
		this._y = y;
	}
	
	/**
	 * Returns the x coordinate of this vector.
	 * @return {number} The x coordinate of this vector.
	 */
	getXCoordinate() {
		return this._x;
	}
	
	/**
	 * Returns the y coordinate of this vector.
	 * @return {number} The y coordinate of this vector.
	 */
	getYCoordinate() {
		return this._y;
	}
	
	/**
	 * Creates and returns a new vector that is the result of vector-adding this to other.<br>
	 * <br>
	 * Does not modify this.
	 * @param {Vector2D} other - The second vector in the addition.
	 * @return {Vector2D} A new vector that is the result of the addition.
	 */
	addedTo(other) {
		return new Vector2D(this._x + other._x, this._y + other._y);
	}
	
	/**
	 * Creates and returns a new vector that is the result of vector-subtracting other from this (this - other).<br>
	 * <br>
	 * Does not modify this.
	 * @param {Vector2D} other - The second vector in the subtraction.
	 * @return {Vector2D} A new vector that is the result of the subtraction.
	 */
	subtractedFrom(other) {
		return new Vector2D(this._x - other._x, this._y - other._y);
	}
	
	/**
	 * Creates and returns a new vector that is this vector scaled by the argument.<br>
	 * <br>
	 * Does not modify this.
	 * @param {number} scalar - The amount by which this vector is scaled.
	 * @return {Vector2D} A new vector that is the result of the scaling.
	 */
	scalarMultipliedBy(scalar) {
		return new Vector2D(this._x * scalar, this._y * scalar);
	}
	
	/**
	 * Returns the length of this vector.
	 * @return {number} The length of this vector (cannot be negative).
	 */
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y);
	}
	
	/**
	 * Returns a new vector that is the normalization (length of 1, but in the same direction) as this vector. <br>
	 * <br>
	 * The result is undefined, but will not error, if the length is 0.
	 * @return {Vector2D} A new vector whose length is 1 (or really close to 1) and in the same direction as this vector.
	 */
	normalize() {
		// Note that the addition of a very-small number to the length ensures that division-by-zero is not possible.
		const reciprocal  = 1.0 / (this.length() + 1.0e-037);
		return this.scalarMultipledBy(reciprocal);
	}
}