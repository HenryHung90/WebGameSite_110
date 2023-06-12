class Bear extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, x1, x2, v, right) {
        super(scene, x, y);
        this.setTexture('bear');
        this.setPosition(x, y);
        this.x1 = x1;
        this.x2 = x2;
        this.v = v;
        this.right = right;

        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('bear', { frames: [0, 1, 2] }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'move_right',
            frames: this.anims.generateFrameNumbers('bear_right', { frames: [0, 1, 2] }),
            frameRate: 8,
            repeat: -1
        });
        
    }


}
export default Bear;