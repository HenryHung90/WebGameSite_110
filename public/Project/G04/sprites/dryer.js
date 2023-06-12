class Dryer extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.setTexture('dryer');
        this.setPosition(x, y);

        this.anims.create({
            key: 'dryer_idle',
            frames: this.anims.generateFrameNumbers('dryer', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Dryer;