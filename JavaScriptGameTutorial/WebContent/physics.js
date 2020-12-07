/**
 * Represents the movement of objects in the game.
 */
export class Physics {
	
	/** 
	 * Creates a new instance of Physics responsible for updating the given game entities.
	 * @param entities - Expected to be an indexable collection of Player and Enemy objects.
	 */
	constructor(entities) {
		this.entities = entities;
	}
	
	/**
	 * Updates the state of the entities given in the constructor in order to represent movement.
	 */
	update() {
		for (let index = 0; index < this.entities.length; index++) {
			const currentEntity = this.entities[index];
			currentEntity.y = currentEntity.y + currentEntity.direction;
		}
	}
}