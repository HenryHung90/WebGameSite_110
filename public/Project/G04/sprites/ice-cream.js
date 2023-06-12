class Ice_cream extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, x1, x2, v, right, index) {
        super(scene, x, y);

        this.setPosition(x, y);
        this.x1 = x1;
        this.x2 = x2;
        this.v = v;
        this.right = right;
        this.index = index;
        this.setTexture('ice-cream' + this.index + '-right');

        this.anims.create({
            key: 'ice_move1',
            frames: this.anims.generateFrameNumbers('ice-cream1-right', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'ice_move2',
            frames: this.anims.generateFrameNumbers('ice-cream2-right', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'ice_move3',
            frames: this.anims.generateFrameNumbers('ice-cream3-right', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'ice_move_left1',
            frames: this.anims.generateFrameNumbers('ice-cream1-left', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'ice_move_left2',
            frames: this.anims.generateFrameNumbers('ice-cream2-left', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'ice_move_left3',
            frames: this.anims.generateFrameNumbers('ice-cream3-left', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Ice_cream;