class Bird extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, index) {
        super(scene, x, y);

        this.index = index;
        if (index === 1)
            this.setTexture('bird1');
        else
            this.setTexture('bird2');

        this.setPosition(x, y);

        this.anims.create({
            key: 'idle1',
            frames: this.anims.generateFrameNumbers('bird1', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'idle2',
            frames: this.anims.generateFrameNumbers('bird2', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 5,
            repeat: -1
        });

    }
}
export default Bird;
