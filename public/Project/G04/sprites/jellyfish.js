class Jellyfish extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.setTexture('jellyfish');
        this.setPosition(x, y);
    }
}
export default Jellyfish;