class Tool extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.setTexture('tool');
        this.setPosition(x, y);

        this.anims.create({
            key: 'tool',
            frames: this.anims.generateFrameNumbers('tool', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Tool;