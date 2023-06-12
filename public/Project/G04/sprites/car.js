class Car extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, x1, x2, v, right) {
        super(scene, x, y);
        this.setTexture('car');
        this.setPosition(x, y);
        this.x1 = x1;
        this.x2 = x2;
        this.v = v;
        this.right = right;

        this.anims.create({
            key: 'car_move',
            frames: this.anims.generateFrameNumbers('car', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Car;