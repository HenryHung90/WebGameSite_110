class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, tag) {
        super(scene, x, y, tag);
        this.scene = scene;
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.setBounce(1);
        this.setCollideWorldBounds(true);
        this.directionX = Phaser.Math.Between(0, 1) === 0 ? -1 : 1; 
        this.directionY = Phaser.Math.Between(0, 1) === 0 ? -1 : 1; 
        this.speedX = Phaser.Math.Between(1, 2); 
        this.speedY = Phaser.Math.Between(1, 2); 
        this.rangeX = { minX: 350, maxX: 700 };
        this.rangeY = { minY: 300, maxY: 450 };
        this.animationKey = tag;
        this.AGRESSOR_RADIUS = 100;
    }
    update() {
        this.x += this.directionX * this.speedX;

        if (this.x <= this.rangeX.minX) {
            this.directionX = 1; 
        } else if (this.x >= this.rangeX.maxX) {
            this.directionX = -1; 
        }

        this.y += this.directionY * this.speedY;

        if (this.y <= this.rangeY.minY) {
            this.directionY = 1; 
        } else if (this.y >= this.rangeY.maxY) {
            this.directionY = -1; 
        }
    }

}
