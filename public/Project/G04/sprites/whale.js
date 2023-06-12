class Whale extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y,h) {
        super(scene, x, y);

        this.setTexture('whale');
        this.setPosition(x, y);
        this.h=h;
    }
}
export default Whale;