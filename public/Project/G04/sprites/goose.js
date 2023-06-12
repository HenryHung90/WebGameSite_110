class Goose extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, x1, x2, v, right) {
        super(scene, x, y);
        this.setTexture('goose');
        this.setPosition(x, y);
        this.x1 = x1;
        this.x2 = x2;
        this.v = v;
        this.right = right;

        this.anims.create({
            key: 'goose_move',
            frames: this.anims.generateFrameNumbers('goose', { frames: [0, 1] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Goose;