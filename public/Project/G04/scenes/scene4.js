import Dryer from '../sprites/dryer.js'
import Car from '../sprites/car.js'

let player;
let cam;
let cursors;
let platforms;
let timer;
let timer2;
let pausebtn;
let yesbtn;
let nobtn;
let live = 3;
let heart;
let restartShape;
let restartText;
let levelText;
let Die;
let mainbtn;
let bgMusic;
class scene4 extends Phaser.Scene {
    constructor() {
        super({ key: 'scene4' });
    }
    preload() {
        this.load.image('bg4', 'assets/png/Scene4.png');
        this.load.spritesheet('mofu_left', 'assets/spritesheet/mofu-left.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('mofu_right', 'assets/spritesheet/mofu-right.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('character_head', 'assets/png/character.png', { frameWidth: 75, frameHeight: 65 })
        this.load.image('short-platform', 'assets/png/shortPlatform.png');
        this.load.image('long-platform', 'assets/png/longPlatform.png');
        this.load.image('door', 'assets/png/door.png');
        this.load.spritesheet('dryer', 'assets/spritesheet/dryer.png', { frameWidth: 86, frameHeight: 75 });
        this.load.spritesheet('car', 'assets/spritesheet/car.png', { frameWidth: 200, frameHeight: 150 });
        this.load.image('heart', 'assets/png/heart.png');
        this.load.image('pause', 'assets/png/pause.png');
        this.load.image('start', 'assets/png/start.png');
        this.load.image('speaker', 'assets/png/speaker.jpg');
        this.load.image('mute', 'assets/png/mute.png');
        this.load.audio('bgMusic3', 'assets/audio/bgMusic3.mp3');
    }
    create(data) {
        if (data.Live) {
            live = data.Live;
            data.Live = null;
        }

        bgMusic = this.sound.add('bgMusic3',
            {
                volume: 1,
                loop: true
            }
        );
        bgMusic.play();

        this.setUI(heart);
        this.physics.world.collideBounds = true;
        this.physics.world.setBounds(0, 0, 800 * 6, 600);
        this.physics.world.setBoundsCollision(true, true, false, true);

        cam = this.cameras.main;
        this.cameras.main.setBounds(0, 0, 800 * 6, 600);
        Die = false;

        for (let x = 0; x < 6; x++) {
            this.add.image(1105 * x, 0, 'bg4').setOrigin(0);
        }

        let dryers = this.physics.add.staticGroup();
        platforms = this.physics.add.staticGroup();
        let cars = this.physics.add.group();
        let door = this.physics.add.image(4542, 400, 'door').setOrigin(0);
        door.setCollideWorldBounds(true);
        player = this.physics.add.sprite(300, 500, 'mofu_right', 0).setOrigin(0).setDepth(5);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'mofu_right',
            frames: this.anims.generateFrameNumbers('mofu_right', { frames: [0, 1, 2, 3] }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'mofu_left',
            frames: this.anims.generateFrameNumbers('mofu_left', { frames: [0, 1, 2, 3] }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'mofu_idle',
            frames: this.anims.generateFrameNumbers('mofu_right', { frames: [0] }),
            frameRate: 12,
            repeat: -1
        });

        player.anims.play('mofu_idle');

        platforms.create(600, 400, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(850, 220, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(1250, 220, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(1400, 400, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(1784, 400, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(2268, 220, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(2718, 220, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(3318, 400, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(3952, 220, 'long-platform').setOrigin(0).refreshBody();

        dryers.add(this.add.existing(new Dryer(this, 800, 325)).setOrigin(0));
        dryers.add(this.add.existing(new Dryer(this, 1450, 125)).setOrigin(0));
        dryers.add(this.add.existing(new Dryer(this, 1334, 525)).setOrigin(0));
        dryers.add(this.add.existing(new Dryer(this, 1834, 325)).setOrigin(0));
        dryers.add(this.add.existing(new Dryer(this, 3700, 325)).setOrigin(0));
        dryers.add(this.add.existing(new Dryer(this, 4300, 325)).setOrigin(0));

        cars.add(this.add.existing(new Car(this, 900, 450, 0, 1600, Phaser.Math.Between(200, 220), false)).setOrigin(0));
        cars.add(this.add.existing(new Car(this, 1700, 450, 800, 2000, Phaser.Math.Between(200, 220), true)).setOrigin(0));
        cars.add(this.add.existing(new Car(this, 2100, 450, 1600, 2400, Phaser.Math.Between(200, 220), false)).setOrigin(0));
        cars.add(this.add.existing(new Car(this, 2500, 450, 2000, 2800, Phaser.Math.Between(200, 220), false)).setOrigin(0));
        cars.add(this.add.existing(new Car(this, 3200, 450, 2300, 3100, Phaser.Math.Between(200, 220), true)).setOrigin(0));
        cars.add(this.add.existing(new Car(this, 3800, 450, 2700, 3800, Phaser.Math.Between(200, 220), true)).setOrigin(0));

        this.physics.add.collider(dryers, platforms);
        this.physics.add.collider(player, door, this.Clear.bind(this));
        this.physics.add.collider(player, cars, this.Lose.bind(this));
        this.physics.add.collider(player, dryers, this.Lose.bind(this));

        cars.getChildren().forEach((child) => {
            child.setImmovable();
            child.setCollideWorldBounds(true);
            child.anims.play('car_move');
            if (child.right) {
                child.setVelocityX(child.v);
            }
            else {
                child.setVelocityX(-child.v);
            }
        });

        dryers.getChildren().forEach((child) => {
            child.anims.play('dryer_idle');
        });

        this.CameraMove();

        timer2 = setInterval(() => {
            cars.getChildren().forEach((child) => {
                if (child.x < child.x1 || child.x > child.x2) {
                    child.setVelocityX(-child.body.velocity.x);
                }
            })
        }, 1000);

        pausebtn.setInteractive().on('pointerup', (pointer) => {
            if (pausebtn.texture.key == "pause") {
                pausebtn.setTexture('start');
                this.physics.pause();
                this.CameraStop();
            }
            else {
                pausebtn.setTexture('pause');
                this.physics.resume();
                this.CameraMove();
            }
        })

        yesbtn.setInteractive().on('pointerup', this.resetLevel.bind(this));
        nobtn.setInteractive().on('pointerup', this.back_to_one.bind(this));
        mainbtn.setInteractive().on('pointerup', () => {
            clearInterval(timer);
            clearInterval(timer2);
            bgMusic.setMute(true);
            this.scene.start('main');
        })
        let speaker = this.add.image(50, 150, 'speaker').setScale(0.1).setInteractive()
            .on('pointerdown', () => {
                if (speaker.texture.key == 'speaker') {
                    bgMusic.setMute(true);
                    speaker.setTexture('mute');
                }
                else {
                    bgMusic.setMute(false);
                    speaker.setTexture('speaker');
                }
            }
            ).setDepth(3).setScrollFactor(0);

        cursors = this.input.keyboard.createCursorKeys();
    }
    update() {
        let keys = this.input.keyboard.addKeys('W,A,S,D,SPACE,E,R,Z,FOUR');
        if (keys.Z.isDown && keys.FOUR.isDown) {
            this.Skip();
        }
        platforms.getChildren().forEach((child) => {
            const playerBottom = player.body.y + player.body.height;
            const platformTop = child.body.y;
            let collider = this.physics.add.collider(player, child);
            if (playerBottom > platformTop) {
                collider.destroy();
            }
            else {
                if (cursors.down.isDown || keys.S.isDown)
                    collider.destroy();
                else {
                    setTimeout(() => {
                        collider.destroy();
                    }, 50);
                }
            }
        })

        if (!Die) {
            if (player.x <= cam.scrollX) {
                this.Lose();
            }
        }
        if (player.body.blocked.down || player.body.touching.down) {
            if (cursors.up.isDown || keys.W.isDown || keys.SPACE.isDown) {
                player.setVelocityY(-500);
            }
            else {
                player.anims.play('mofu_idle', true);
                player.setVelocity(0);
            }
        }
        if (cursors.left.isDown || keys.A.isDown) {
            player.anims.play('mofu_left', true);
            player.setVelocityX(-400);
            return;
        }
        if (cursors.right.isDown || keys.D.isDown) {
            player.anims.play('mofu_right', true);
            player.setVelocityX(400);
            return;
        }
    }
    setUI() {
        let head = this.add.sprite(53, 50, 'character_head', 0).setDepth(3).setScrollFactor(0).setScale(1.1);
        let text = this.add.text(21, 87, 'MOFU')
            .setFontSize(20)
            .setFontStyle('bold')
            .setFontFamily('微軟正黑體')
            .setDepth(4)
            .setScrollFactor(0);

        let r2 = this.add.rectangle(52, 100, 77, 25, 0x9966ff);
        r2.setStrokeStyle(4, 0xefc53f).setDepth(3).setScrollFactor(0);
        let c2 = this.add.circle(52, 52, 50, 0x9966ff);
        c2.setStrokeStyle(5, 0xefc53f).setDepth(2).setScrollFactor(0);

        heart = this.add.group();
        heart.create(135, 40, 'heart').setDepth(1).setScrollFactor(0).setScale(0.08);
        heart.create(180, 40, 'heart').setDepth(1).setScrollFactor(0).setScale(0.08);
        heart.create(225, 40, 'heart').setDepth(1).setScrollFactor(0).setScale(0.08);
        this.checkLive(heart);

        levelText = this.add.text(800 / 2 - 50, 0, '關卡:2-2', {
            fontSize: '25px 微軟正黑體',
            color: 'black',
            padding: 10,
        }).setDepth(5).setScrollFactor(0);

        pausebtn = this.add.image(750, 50, 'pause').setDepth(1).setScrollFactor(0).setScale(0.12);
        restartShape = this.add.rectangle(400, 300, 400, 250, 0x5A5AAD);
        restartShape.setStrokeStyle(4, 0x484891).setDepth(6).setScrollFactor(0).setVisible(false);

        restartText = this.add.text(900 / 2 - 220, 900 / 2 - 210, '要再試一次嗎?', {
            fontSize: '50px 微軟正黑體',
            color: 'white',
            padding: 10,
        }).setDepth(7).setVisible(false).setScrollFactor(0);

        yesbtn = this.add.text(900 / 2 - 200, 900 / 2 - 115, '重新開始', {
            fontSize: '28px 微軟正黑體',
            color: 'white',
            stroke: 'white',
            padding: 10,
            backgroundColor: 'black',
        }).setDepth(7).setVisible(false).setScrollFactor(0);

        nobtn = this.add.text(900 / 2 - 33, 900 / 2 - 115, '全部重頭', {
            fontSize: '28px 微軟正黑體',
            color: 'white',
            stroke: 'white',
            padding: 10,
            backgroundColor: 'black',
        }).setDepth(7).setVisible(false).setScrollFactor(0);

        mainbtn = this.add.text(900 / 2 - 210, 900 / 2 - 115, '回到主畫面', {
            fontSize: '28px 微軟正黑體',
            color: 'white',
            stroke: 'white',
            padding: 10,
            backgroundColor: 'black',
        }).setDepth(7).setVisible(false).setScrollFactor(0);
    }
    checkLive(heart) {
        for (let count = 0; count < 3; count++) {
            if (count < live)
                heart.getChildren()[count].setVisible(true);
            else
                heart.getChildren()[count].setVisible(false);
        }
    }
    resetLevel() {
        Die = false;
        bgMusic.setMute(true);
        this.scene.restart();
        clearInterval(timer);
        clearInterval(timer2);
    }
    Clear() {
        clearInterval(timer);
        clearInterval(timer2);
        let data = { Live: live };
        bgMusic.setMute(true);
        this.scene.start('scene5', data);
    }
    Lose() {
        Die = true;
        live--;
        this.physics.pause();
        this.CameraStop();
        this.checkLive(heart);
        this.visible_restart();
        if (live == 0) {
            restartText.setText('   你死亡了!!');
            yesbtn.setVisible(false);
            mainbtn.setVisible(true);
        }
    }
    CameraMove() {
        timer = setInterval(() => {
            cam.scrollX += 11;
        }, 40);
    }
    CameraStop() {
        clearInterval(timer);
    }
    visible_restart() {
        restartShape.setVisible(true);
        restartText.setVisible(true);
        yesbtn.setVisible(true);
        nobtn.setVisible(true);
        pausebtn.disableInteractive();
    }
    invisible_restart() {
        restartShape.setVisible(false);
        restartText.setVisible(false);
        yesbtn.setVisible(false);
        nobtn.setVisible(false);
        pausebtn.setInteractive();
    }
    back_to_one() {
        clearInterval(timer);
        clearInterval(timer2);
        Die = false;
        live = 3;
        let data = { Live: live };
        bgMusic.setMute(true);
        this.scene.start('scene1', data);
    }
    Skip() {
        player.body.x = 4350;
        setTimeout(() => {
            cam.scrollX = 4200;
        }, 50);
    }
}
export default scene4;