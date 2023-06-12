class Ice extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.setTexture('ice');
        this.setPosition(x, y);

        this.anims.create({
            key: 'ice',
            frames: this.anims.generateFrameNumbers('ice', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Ice;