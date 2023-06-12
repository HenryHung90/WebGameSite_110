class Sun extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.setTexture('sun');
        this.setPosition(x, y);

        this.anims.create({
            key: 'rotate',
            frames: this.anims.generateFrameNumbers('sun', { frames: [0, 1, 2, 1, 0] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Sun;