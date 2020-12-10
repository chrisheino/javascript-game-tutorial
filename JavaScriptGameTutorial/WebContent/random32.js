/**
 * Represents a seeded random number generator with 32-bit state.
 */
export class Random32 {
	
	/**
	 * Creates a new random number generator with the given seed.
	 * @param {number} seed - Initializes the generator; the same seed produces the same sequence of generated numbers.
	 */
	constructor(seed) {
		this._generator = Random32._mulberry32(seed);
	}
	
	/**
	 * Creates a new Random32 seeded automatically.
	 * @return {Random32} A new Random32 instance with an unpredictable seed.
	 */
	static create() {
		return new Random32(Random32._mulberry32(Math.floor(Math.random() * 0xFFFFFFFF)));
	}
	
	/**
	 * Generates and returns the next random integer.
	 * @return {number} The next randomly-generated number by the random number generator.
	 */
	nextInteger() {
		return this._generator();
	}
	
	/**
	 * Generates and returns the next random integer scaled to the given range.
	 * @param {number} ceiling - All generated numbers will be scaled to be in the range from 0 (inclusive) to ceiling (exclusive).
	 * @return {number} The next randomly-generated number by the random number generator.
	 */
	nextIntegerInRange(ceiling) {
		// The floor call is for safety.  This prevents a floating-point number from being returned.
		return Math.floor(this._generator() % ceiling);
	}
	
	/*
	 * Mulberry32 algorithm. Copied from: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
	 * Note that I made a couple of cosmetic changes for JSHint compatibility.
	 */
	static _mulberry32(a) {
	    return function() {
	      let t = a += 0x6D2B79F5;
	      /* jshint bitwise: false */
	      t = Math.imul(t ^ t >>> 15, t | 1);
	      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
	      return ((t ^ t >>> 14) >>> 0) / 4294967296;
	      /* jshint bitwise: true */
	    };
	}
}
