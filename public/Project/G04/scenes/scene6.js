import Ice from '../sprites/ice.js'
import Ice_cream from '../sprites/ice-cream.js'
import Ice_fire from '../sprites/ice-fire.js';
import Tool from '../sprites/tool.js';

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
let maxlive=3;
let heart;
let restartShape;
let restartText;
let levelText;
let Die;
let mainbtn;
let bgMusic;
let Congrat;

class scene6 extends Phaser.Scene {
    constructor() {
        super({ key: 'scene6' });
    }
    preload() {
        this.load.image('bg6', 'assets/png/Scene6.png');
        this.load.spritesheet('mofu_left', 'assets/spritesheet/mofu-left.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('mofu_right', 'assets/spritesheet/mofu-right.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('character_head', 'assets/png/character.png', { frameWidth: 75, frameHeight: 65 })
        this.load.image('short-platform', 'assets/png/shortPlatform.png');
        this.load.image('long-platform', 'assets/png/longPlatform.png');
        this.load.image('door', 'assets/png/door.png');
        
        this.load.spritesheet('ice-cream1-left', 'assets/spritesheet/ice-cream1-left.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('ice-cream2-left', 'assets/spritesheet/ice-cream2-left.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('ice-cream3-left', 'assets/spritesheet/ice-cream3-left.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('ice-cream1-right', 'assets/spritesheet/ice-cream1-right.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('ice-cream2-right', 'assets/spritesheet/ice-cream2-right.png', { frameWidth: 75, frameHeight: 100 });
        this.load.spritesheet('ice-cream3-right', 'assets/spritesheet/ice-cream3-right.png', { frameWidth: 75, frameHeight: 100 });
        
        this.load.spritesheet('ice-fire1-left', 'assets/spritesheet/ice-fire1-left.png', { frameWidth: 175, frameHeight: 100 });
        this.load.spritesheet('ice-fire2-left', 'assets/spritesheet/ice-fire2-left.png', { frameWidth: 175, frameHeight: 100 });
        this.load.spritesheet('ice-fire3-left', 'assets/spritesheet/ice-fire3-left.png', { frameWidth: 175, frameHeight: 100 });
        this.load.spritesheet('ice-fire4-left', 'assets/spritesheet/ice-fire4-left.png', { frameWidth: 175, frameHeight: 100 });
        this.load.spritesheet('ice-fire1-right', 'assets/spritesheet/ice-fire1-right.png', { frameWidth: 175, frameHeight: 100 });
        this.load.spritesheet('ice-fire2-right', 'assets/spritesheet/ice-fire2-right.png', { frameWidth: 175, frameHeight: 100 });
        this.load.spritesheet('ice-fire3-right', 'assets/spritesheet/ice-fire3-right.png', { frameWidth: 175, frameHeight: 100 });
        this.load.spritesheet('ice-fire4-right', 'assets/spritesheet/ice-fire4-right.png', { frameWidth: 175, frameHeight: 100 });

        this.load.spritesheet('tool', 'assets/spritesheet/tool.png', { frameWidth: 57.6, frameHeight: 100 });
        this.load.spritesheet('ice', 'assets/spritesheet/ice.png', { frameWidth: 100, frameHeight: 100 });
        this.load.image('heart', 'assets/png/heart.png');
        this.load.image('pause', 'assets/png/pause.png');
        this.load.image('start', 'assets/png/start.png');
        this.load.image('speaker', 'assets/png/speaker.jpg');
        this.load.image('mute', 'assets/png/mute.png');
        this.load.audio('bgMusic6', 'assets/audio/bgMusic6.mp3');
        this.load.audio('congrat', 'assets/audio/Congrat.mp3');
    }
    create(data) {
        if (data.Live)
        {
            live = data.Live;
            data.Live=null;
        }
        bgMusic = this.sound.add('bgMusic6',
            {
                volume: 1,
                loop: true
            }
        );
        Congrat = this.sound.add('congrat',
        {
            volume: 5,
            loop: false
        }
    );
        bgMusic.play();

        Die=false;
        this.setUI(heart);
        this.physics.world.collideBounds = true;
        this.physics.world.setBounds(0, 0, 800 * 6, 600);
        this.physics.world.setBoundsCollision(true, true, false, true);

        cam = this.cameras.main;
        this.cameras.main.setBounds(0, 0, 800 * 6, 600);

        for (let x = 0; x < 6; x++) {
            this.add.image(1105 * x, 0, 'bg6').setOrigin(0);
        }

        let ices = this.physics.add.staticGroup();
        platforms = this.physics.add.staticGroup();
        let ice_creams = this.physics.add.group();
        let ice_fires = this.physics.add.group();
        let tools = this.physics.add.staticGroup();
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

        platforms.create(700, 400, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(900, 200, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(1400, 400, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(1600, 200, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(1900, 400, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(2284, 200, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(2500, 400, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(2900, 400, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(3300, 200, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(3500, 400, 'long-platform').setOrigin(0).refreshBody();
        platforms.create(3900, 200, 'short-platform').setOrigin(0).refreshBody();
        platforms.create(3790, 400, 'short-platform').setOrigin(0).refreshBody();

        ice_creams.add(this.add.existing(new Ice_cream(this, 760, 300, 450, 640, Phaser.Math.Between(120, 135), true, 3)).setOrigin(0));
        ice_creams.add(this.add.existing(new Ice_cream(this, 1900, 300, 1730, 1840, Phaser.Math.Between(120, 135), true, 2)).setOrigin(0));
        ice_creams.add(this.add.existing(new Ice_cream(this, 2400, 100, 2284, 2400, 80, true, 1)).setOrigin(0));

        ices.add(this.add.existing(new Ice(this, 1000, 100)).setOrigin(0));
        ices.add(this.add.existing(new Ice(this, 1650, 100)).setOrigin(0));
        ices.add(this.add.existing(new Ice(this, 3980, 100)).setOrigin(0));

        ice_fires.add(this.add.existing(new Ice_fire(this, 1000, 500, 800, 1350, Phaser.Math.Between(130, 160), true, 1)).setOrigin(0));
        ice_fires.add(this.add.existing(new Ice_fire(this, 1650, 500, 1400, 2000, Phaser.Math.Between(130, 160), true, 2)).setOrigin(0));
        ice_fires.add(this.add.existing(new Ice_fire(this, 2050, 500, 2000, 2300, Phaser.Math.Between(130, 160), false, 3)).setOrigin(0));
        ice_fires.add(this.add.existing(new Ice_fire(this, 2550, 200, 2450, 2560, Phaser.Math.Between(50, 70), false, 4)).setOrigin(0));
        ice_fires.add(this.add.existing(new Ice_fire(this, 2900, 500, 2700, 3200, Phaser.Math.Between(130, 160), true, 3)).setOrigin(0));
        ice_fires.add(this.add.existing(new Ice_fire(this, 3700, 500, 3300, 3700, Phaser.Math.Between(130, 160), false, 2)).setOrigin(0));
        ice_fires.add(this.add.existing(new Ice_fire(this, 3600, 200, 3550, 3780, 140, true, 1)).setOrigin(0));
        ice_fires.add(this.add.existing(new Ice_fire(this, 3800, 500, 3750, 4300, Phaser.Math.Between(130, 160), false, 1)).setOrigin(0));


        tools.add(this.add.existing(new Tool(this, 2084, 300)).setOrigin(0));
        tools.add(this.add.existing(new Tool(this, 3000, 300)).setOrigin(0));
        tools.add(this.add.existing(new Tool(this, 4100, 300)).setOrigin(0));

        this.physics.add.collider(player, ice_fires, this.Lose.bind(this));
        this.physics.add.collider(player, ice_creams, this.Lose.bind(this));
        this.physics.add.collider(player, door, this.Clear.bind(this));
        this.physics.add.collider(player, ices, this.addLive.bind(this));
        this.physics.add.collider(player, tools, this.addMaxLive.bind(this));
        this.physics.add.collider(ice_creams, platforms);
        this.physics.add.collider(ice_fires, platforms);

        ice_creams.getChildren().forEach((child) => {
            child.setCollideWorldBounds(true);
            if (child.right) {
                child.anims.play('ice_move'+child.index);
                child.setVelocityX(child.v);
            }
            else {
                child.anims.play('ice_move_left'+child.index);
                child.setVelocityX(-child.v);
            }
        })

        ice_fires.getChildren().forEach((child) => {
            child.setCollideWorldBounds(true);
            if (child.right) {
                child.anims.play('fire_move'+child.index);
                child.setVelocityX(child.v);
            }
            else {
                child.anims.play('fire_move_left'+child.index);
                child.setVelocityX(-child.v);
            }
        })
        ices.getChildren().forEach((child) => {
            child.anims.play('ice');
        });
        tools.getChildren().forEach((child) => {
            child.anims.play('tool');
        });

        this.CameraMove();

        timer2 = setInterval(() => {

            ice_creams.getChildren().forEach((child) => {
                if (child.x < child.x1 || child.x > child.x2) {
                    child.setVelocityX(-child.body.velocity.x);
                    if(child.x < child.x1)
                    {
                        child.anims.play('ice_move'+child.index);
                    }
                    else
                    {
                        child.anims.play('ice_move_left'+child.index);
                    }
                }
            })
            ice_fires.getChildren().forEach((child) => {
                if (child.x < child.x1 || child.x > child.x2) {
                    child.setVelocityX(-child.body.velocity.x);
                    if(child.x < child.x1)
                    {
                        child.anims.play('fire_move'+child.index);
                    }
                    else
                    {
                        child.anims.play('fire_move_left'+child.index);
                    }
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
        mainbtn.setInteractive().on('pointerup',()=>{
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
        let keys = this.input.keyboard.addKeys('W,A,S,D,SPACE,E,R,Z,SIX');
        if(keys.Z.isDown && keys.SIX.isDown)
        {
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
                player.anims.play('mofu_idle',true);
                player.setVelocity(0);
            }
        }
        if (cursors.left.isDown || keys.A.isDown) {
            player.anims.play('mofu_left',true);
            player.setVelocityX(-400);
            return;
        }
        if (cursors.right.isDown || keys.D.isDown) {
            player.anims.play('mofu_right',true);
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
        heart.create(270, 40, 'heart').setDepth(1).setScrollFactor(0).setScale(0.08).setVisible(false);
        heart.create(315, 40, 'heart').setDepth(1).setScrollFactor(0).setScale(0.08).setVisible(false);
        this.checkLive(heart);

        pausebtn = this.add.image(750, 50, 'pause').setDepth(1).setScrollFactor(0).setScale(0.12);
        restartShape = this.add.rectangle(400, 300, 400, 250, 0x5A5AAD);
        restartShape.setStrokeStyle(4, 0x484891).setDepth(6).setScrollFactor(0).setVisible(false);

        levelText = this.add.text(800 / 2-50,0, '關卡:3-2', {
            fontSize: '25px 微軟正黑體',
            color: 'black',
            padding: 10,
        }).setDepth(5).setScrollFactor(0);

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
        for (let count = 0; count < maxlive; count++) {
            if (count < live)
                heart.getChildren()[count].setVisible(true);
            else
                heart.getChildren()[count].setVisible(false);
        }
    }
    resetLevel() {
        Die = false;
        this.scene.restart();
        clearInterval(timer);
        clearInterval(timer2);        
        bgMusic.setMute(true);
    }
    Clear() {
        clearInterval(timer);
        clearInterval(timer2);
        this.physics.pause();
        this.CameraStop();
        Congrat.play();
        restartText.setText('   你獲勝了!!');
        this.visible_restart();
        yesbtn.setVisible(false);
        mainbtn.setVisible(true);
    }
    Lose() {
        Die = true;
        live--;
        this.physics.pause();
        this.CameraStop();
        this.checkLive(heart);
        this.visible_restart();
        if (live == 0) {
            restartText.setText('   你鼠掉了!!');
            yesbtn.setVisible(false);
            mainbtn.setVisible(true);
        }
    }
    CameraMove() {
        timer = setInterval(() => {
            cam.scrollX += 8;
        }, 25);
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
    back_to_one()
    {
        clearInterval(timer);
        clearInterval(timer2);
        Die = false;
        live = 3;
        let data={Live:live};
        bgMusic.setMute(true);
        this.scene.start('scene1',data);
    }
    Skip()
    {
        player.body.x=4350;
        setTimeout(()=>{
            cam.scrollX=4200;
        },50);
    }
    addLive(player,ice)
    {
        if(live<maxlive)
            live++;
        if(ice)
        {
            ice.destroy();
        }
        this.checkLive(heart);
    }
    addMaxLive(player,tool)
    {
        if(maxlive==live &&maxlive<5)
            maxlive++;
        tool.destroy();
        this.addLive();
    }
}
export default scene6;