class Cat extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.setTexture('cat');
        this.setPosition(x, y);

        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('cat', { frames: [0, 1, 2, 1, 0] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Cat;