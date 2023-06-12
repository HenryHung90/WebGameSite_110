class Bullet extends Phaser.Physics.Arcade.Sprite {

    constructor(scene, x, y) {
        super(scene, x, y);

        this.setTexture('bullet');
        this.setPosition(x + 60, y + 80);
    }

    fire_to_down(x, y) {
        this.setPosition(x + 30, y + 120);
        this.setActive(true);
        this.setVisible(true);
        this.setImmovable();
    }
}
export default Bullet;