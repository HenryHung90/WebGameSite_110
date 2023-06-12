// import('./common.js');
// import {aa} from './common.js';
class frogScene extends Phaser.Scene {
    constructor() {
        super({ key: "frogScene" });
        
    }


    preload() {
        this.load.image('frog_bg','./assets/frog/frog_bg.jpg');
        this.load.image('frog','./assets/frog/frog1.png');
        this.load.image('frog_enemy1','./assets/frog/frog_enemy1.png');
        this.load.image('frog_enemy2','./assets/frog/frog_enemy2.png');
        this.load.image('frog_enemy3','./assets/frog/frog_enemy3.png');
        this.load.image('frog_enemy4','./assets/frog/frog_enemy4.png');

        this.load.image('left_btn', './assets/btn/left_btn.png')
        this.load.image('attack_btn', './assets/btn/attack_btn.png')
        this.load.image('enemyattackhint', './assets/bagger/left_arrow.jpg');
        this.load.image('coin', './assets/bagger/coin.png');
        this.load.image('healing', './assets/bagger/healing.png')
    }


    create() {
        thisLevel_coin = 0;

        const bg = this.add.image(this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'frog_bg').setScale(1);
        this.attack = this.add.image((this.cameras.main.width / 2) + 220,
            this.cameras.main.height / 2 + 250, 'attack_btn').setScale(0.2);
        this.enemy1 = this.add.image((this.cameras.main.width / 2) + 400,
            this.cameras.main.height / 2, 'frog_enemy1').setScale(0.5);
        this.enemyblood = this.add.text(this.enemy1.x, this.enemy1.y - 120, '100',
            { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);
        this.man = this.add.image((this.cameras.main.width / 2) - 400,
            this.cameras.main.height / 2, 'man').setScale(0.7);
        this.manblood = this.add.text(this.man.x, this.man.y - 120, baggerUpgrade.live,
            { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);
        const leftbutton = this.add.image((this.cameras.main.width / 2) - 230,
            (this.cameras.main.height / 2) + 260,
            'left_btn').setScale(0.2);
        const upbutton = this.add.image((this.cameras.main.width / 2) - 140,
            (this.cameras.main.height / 2) + 200,
            'left_btn').setScale(0.2).setAngle(90).setInteractive();
        const downbutton = this.add.image((this.cameras.main.width / 2) - 140,
            (this.cameras.main.height / 2) + 320,
            'left_btn').setScale(0.2).setAngle(-90).setInteractive();
        this.coin = this.add.image(100, 50, 'coin').setScale(0.1);
        this.coinText = this.add.text(150, 35, '0', { fontSize: '32px', fill: '#ffffff' });
        this.dodgeText = this.add.text(600, 80, '150', { fontSize: '32px', fill: '#ffffff' });
        this.healing = this.add.image(630, 650, 'healing').setScale(0.07);
        this.healing.setInteractive();
    }

    update() {

    }
}