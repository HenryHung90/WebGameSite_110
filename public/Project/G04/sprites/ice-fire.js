class Ice_fire extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y, x1, x2, v, right, index) {
        super(scene, x, y);

        this.setTexture('ice-fire' + this.index + '-right');

        this.setPosition(x, y);
        this.x1 = x1;
        this.x2 = x2;
        this.v = v;
        this.right = right;
        this.index=index;
        this.setTexture('ice-fire' + this.index + '-right');

        this.anims.create({
            key: 'fire_move1',
            frames: this.anims.generateFrameNumbers('ice-fire1-right', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'fire_move2',
            frames: this.anims.generateFrameNumbers('ice-fire2-right', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'fire_move3',
            frames: this.anims.generateFrameNumbers('ice-fire3-right', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'fire_move4',
            frames: this.anims.generateFrameNumbers('ice-fire4-right', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'fire_move_left1',
            frames: this.anims.generateFrameNumbers('ice-fire1-left', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'fire_move_left2',
            frames: this.anims.generateFrameNumbers('ice-fire2-left', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'fire_move_left3',
            frames: this.anims.generateFrameNumbers('ice-fire3-left', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'fire_move_left4',
            frames: this.anims.generateFrameNumbers('ice-fire4-left', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        });
    }
}
export default Ice_fire;