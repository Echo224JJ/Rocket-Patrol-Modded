//Ufo prefab
class Ufo extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add an object to existing, displayList, updateList
        this.points = pointValue;
    }

    update() {
        // move ufo left
        this.x -= game.settings.ufoSpeed;

        //wraparound screen bounds
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}