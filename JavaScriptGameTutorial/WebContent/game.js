import {Enemy} from "./enemy.js";
import {Physics} from "./physics.js";
import {Player} from "./player.js";
import {Rectangle} from "./rectangle.js";
import {Renderer} from "./renderer.js";
import {Vector2D} from "./vector2d.js";

/**
 *  Represents the game as a whole; coordinates between all of the different objects in the game system.<br>
 *  <br>
 *  There should only be one instance of this class in the system.
 */
export class Game {
	
	/**
	 * Creates a new instance of the game that draws to the given canvas in the given window.
	 * @param window - The window that contains the game.
	 * @param canvas - The canvas on which the game's graphics are drawn.
	 */
	constructor(window, canvas) {
		this._window = window;
		this._entities = [];
		this._enemies = [];
		this._player = undefined;
		this._physics = new Physics(this._entities);
		this._gameBoundary = new Rectangle(0, 0, canvas.width, canvas.height);
		this._renderer = new Renderer(canvas, this._entities, this._gameBoundary);
		this._started = false;
	}
	
	/**
	 * Starts the game.  <br>
	 * <br>
	 * Only call this method once.
	 */
	start() {
		const player = new Player(
				new Vector2D(200, 175), 
				25, 
				new Vector2D(0, -1), 
				this._gameBoundary);
		this._addEntity(player);
		this._addEntity(new Enemy(
				new Vector2D(20, 25), 
				20, 
				new Vector2D(0, 1),
				0,
				this._gameBoundary));
		this._addEntity(new Enemy(
				new Vector2D(50, 25), 
				10, 
				new Vector2D(0, 1),
				1,
				this._gameBoundary));
		this._addEntity(new Enemy(
				new Vector2D(80, 25), 
				15, 
				new Vector2D(0, 1),
				2,
				this._gameBoundary));
		this._addEntity(new Enemy(
				new Vector2D(120, 25), 
				25, 
				new Vector2D(0, 1),
				3,
				this._gameBoundary));
		this._addEntity(new Enemy(
				new Vector2D(140, 25), 
				30, 
				new Vector2D(0, 1),
				4,
				this._gameBoundary));
		
		if (!this._started) {
			this._window.requestAnimationFrame(this._update.bind(this));
			this._started = true;
		}
	}
	
	/*
	 * Adds the entity to the game.<br>
	 * <br>
	 * The entity may be the player or an enemy.
	 * @param {Entity} - the Entity to add to the game.
	 */
	_addEntity(entity) {
		this._entities.push(entity);
		if (entity instanceof Player) {
			this._player = entity;
		} else if (entity instanceof Enemy) {
			this._enemies.push(entity);
		} else {
			throw new Error('Unimplemented type of entity being added to the game: ' + entity);
		}
	}
	
	/*
	 * Removes the entities from the game.<br>
	 * <br>
	 * The entities may include the Player.  
	 * @param {Entity[]} entities - the entities to remove.
	 */
	_removeEntities(entitiesToRemove) {
		if (!entitiesToRemove) {
			return;
		}
		
		function isNotInEntities(item) { return !entitiesToRemove.includes(item); }
		this._entities.filter(isNotInEntities);
		this._enemies.filter(isNotInEntities);
		
		if (entitiesToRemove.includes(this._player)) {
			this._player = undefined;
		}
	}
	
	/*
	 * Causes the game to update the game state and draw it to the canvas.
	 * 
	 * Private method.
	 */
	_update() {
		// Setting the speed to sixty frames per second.
		const changeOfTime = 1/60;
		
		this._physics.update(changeOfTime);
		for (let index = 0; index < this._entities.length; index++) {
			const currentEntity = this._entities[index];
			currentEntity.update(changeOfTime);
		}
		
		this._renderer.render(changeOfTime);
		
		this._window.requestAnimationFrame(this._update.bind(this));
	}
}