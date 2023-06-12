import { controller } from './controller.js'
import scene3 from './forest.js';//森林

//全域變數
//====keyboard====
let keyA, keyW, keyS, keyD;
let cursors;//按鍵

let panda, dog;
let bgm, audio_pick;
let crocus_count = 0, blueberry_count = 0;
let btn_re;

export default class scene1 extends Phaser.Scene {
    constructor() {
        super({ key: 'scene1' });
        this.collectedElements = 0;
    }

    preload() {
        // ====bg====

        this.load.image('bgHouse2', './assets/bg/bgHome2.png');
        this.load.image('bgHouse1', './assets/bg/bgHome1.png');
        this.load.image('bgGround', './assets/bg/ground.png');

        // ====object====
        //藍莓
        this.load.image('blueberrys', './assets/obj/blueberry.png');
        //蝶豆花
        this.load.image('crocus', './assets/obj/Crocus.png');
        //房子
        this.load.image('home', './assets/obj/home.png');
        //草叢
        this.load.image('bush1', './assets/obj/bush.png');
        //新草叢
        this.load.image('bush2', './assets/obj/Newbush.png');
        //鳥樹
        this.load.image('birdtree', './assets/obj/tree.png');
        //鸚鵡
        this.load.spritesheet('parrot', './assets/chara/parrotSprite.png', { frameWidth: 230, frameHeight: 210 });
        // 小石頭
        this.load.image('smallStone', './assets/obj/stone02.png');

        // ====player====
        //panda
        this.load.spritesheet('panda', './assets/Player/pandaSprite.png', { frameWidth: 724, frameHeight: 950 });
        //dog
        this.load.spritesheet('dog', './assets/Player/dogSprite.png', { frameWidth: 810, frameHeight: 950 });

        this.load.image('board', './assets/UI/board.png');

        this.load.image('restart', './assets/cover/restart.png');
        

        this.load.audio('bgm', './assets/BGM.mp3');
        this.load.audio('pick', './assets/pick.mp3');
        this.load.audio('win', './assets/Win.ogg');


    }


    create() {


      

        //====input keyboard====
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        cursors = this.input.keyboard.createCursorKeys();




        //====bg====
        let bgHouse2 = this.add.tileSprite(0, 0, 992, 272, 'bgHouse2').setOrigin(0).setDepth(0);//雲雲
        let bgHouse1 = this.add.tileSprite(0, 0, 992, 272, 'bgHouse1').setOrigin(0).setDepth(0);//雲雲

        //地面
        let bgGround = this.add.tileSprite(0, 258, 992, 272, 'bgGround').setOrigin(0).setDepth(0);//地面this.physics.add.existing(this.bgGround);//幫地面增加物理效果
        this.physics.add.existing(bgGround);//幫地面增加物理效果
        bgGround.body.immovable = true;//設定物件不會動
        bgGround.body.moves = false;//設定物件的位置和旋轉是否受其速度、加速度、阻力、重力的影響 moves => allowGravity


        //====object====
        //parrot
        let parrot = this.add.sprite(70, 190, 'parrot').setDepth(3);//用一個sprite裝parrot這個東西
        parrot.setScale(0.1);
        this.anims.create({
            key: 'animParrot',
            frames: this.anims.generateFrameNumbers('parrot', { start: 0, end: 3 }),//產生動畫
            frameRate: 3,
            repeat: -1
        })
        parrot.anims.play('animParrot', true);
        // parrot.setCollideWorldBounds(true);//物理世界的邊界

        //小石頭
        let smallStone = this.physics.add.image(380, 100, 'smallStone');
        smallStone.setCollideWorldBounds(true);//物理世界的邊界
        smallStone.setScale(0.5);

        //home
        let home = this.add.image(500, 75, 'home').setOrigin(0).setDepth(0);
        home.setScale(0.08);
        // home.setCollideWorldBounds(true);//物理世界的邊界

        //bush
        // let bush = this.physics.add.image(120, 100, 'bush');
        // bush.setCollideWorldBounds(true);//物理世界的邊界
        // bush.setScale(0.03);

        //蝶豆花草叢
        let bushe = this.physics.add.group({
            key: 'bush1',
            repeat: 4,
            setXY: { x: 30, y: 0, stepX: 205 },
        });
        bushe.children.iterate(function (child) {
            child.setScale(0.025).setDepth(0);
            child.setCollideWorldBounds(true);
        });

        //蝶豆花群組
        let crocus = this.physics.add.group();
        crocus.createMultiple([
            { key: 'crocus', repeat: 4, setXY: { x: 20, y: 245, stepX: 206 } },
            { key: 'crocus', repeat: 4, setXY: { x: 28, y: 229, stepX: 206 } },
            { key: 'crocus', repeat: 4, setXY: { x: 37, y: 245, stepX: 206 } },
        ]);

        crocus.children.iterate((child) => {
            child.setScale(0.35)
            this.physics.world.enable(child);
            child.body.setAllowGravity(false);
            child.body.setImmovable(true);
        });

        //藍莓草叢
        let bushes = this.physics.add.group({
            key: 'bush2',
            repeat: 4,
            setXY: { x: 170, y: 0, stepX: 195 },
        });
        bushes.children.iterate(function (child) {
            child.setScale(1.45);
            child.setCollideWorldBounds(true);
        });

        //藍莓群組
        let Blueberrys = this.physics.add.group();
        Blueberrys.createMultiple([
            { key: 'blueberrys', repeat: 4, setXY: { x: 158, y: 248, stepX: 195 } },
            { key: 'blueberrys', repeat: 4, setXY: { x: 170, y: 231, stepX: 195 } },
            { key: 'blueberrys', repeat: 4, setXY: { x: 180, y: 248, stepX: 195 } },
        ]);

        Blueberrys.children.iterate((child) => {
            child.setScale(1.2);
            this.physics.world.enable(child);
            child.body.setAllowGravity(false);
            child.body.setImmovable(true);
        });

        //birdtree
        let birdtree = this.add.image(80, 170, 'birdtree').setDepth(0);
        birdtree.setScale(2);
        // birdtree.setCollideWorldBounds(true);//物理世界的邊界

        // ====player====
        //panda 807
        panda = this.physics.add.sprite(498, 200, 'panda').setDepth(5);//用一個sprite裝panda這個東西
        panda.setScale(0.05);
        panda.setCollideWorldBounds(true);//物理世界的邊界

        // ==== 啟用世界邊界碰撞 ====
        panda.body.onWorldBounds = true;
        //console.log(panda.body);
        // 監聽與世界邊界碰撞事件
        this.physics.world.on('worldbounds', (body, up, down, left, right) => {
            if (right) {
                console.log("panda is collider!");
                this.scene.start('scene3');
            }
        }, this);

        //變換場景
        function boundsOn() {
            this.physics.world.on('worldbounds', collisionListener, this);
        }

        function collisionListener(body, up, down, left, right) {
            if (left) {
                console.log("panda right");
                this.scene.start('scene2');
            }
        }

        panda.body.onWorldBounds = false;
        setTimeout(() => {
            panda.body.onWorldBounds = true;
            boundsOn.call(this);
        }, 200);

        //dog
        dog = this.physics.add.sprite(600, 200, 'dog');//用一個sprite裝parrot這個東西
        dog.setScale(0.05);
        dog.setCollideWorldBounds(true);//物理世界的邊界


        //設定邊界
        this.physics.world.setBounds(0, 0, 992, 272);//物理世界
        this.cameras.main.setBounds(0, 0, 992, 272);//攝影機邊界
        // this.parrot.setCollideWorldBounds(true);//物理世界的邊界

        //攝影機
        this.cameras.main.startFollow(panda, true, 0.05, 0.05);//攝影機追蹤玩家
        this.cameras.main.setViewport(0, 0, 496, 272);//攝影機視線範圍

        //====collider====
        this.physics.add.collider(panda, bgGround);//ground 和 panda 的碰撞
        this.physics.add.collider(dog, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(birdtree, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(smallStone, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(crocus, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(bushe, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(bushes, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(Blueberrys, bgGround);

        //按S鍵熊貓採集藍莓
        this.input.keyboard.on('keydown-S', () => {
            this.physics.overlap(panda, Blueberrys, (panda, Blueberrys) => {
                Blueberrys.disableBody(true, true);
                blueberry_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againBlueberrys,
                    callbackScope: this,
                    args: [Blueberrys],
                });
                this.collectElement();
            }, null, this);
        }, this);

        //按S鍵熊貓採集蝶豆花
        this.input.keyboard.on('keydown-S', () => {
            this.physics.overlap(panda, crocus, (panda, crocus) => {
                crocus.disableBody(true, true);
                crocus_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againcrocus,
                    callbackScope: this,
                    args: [crocus],
                });
                this.collectElement();
            }, null, this);
        }, this);

        //按下鍵狗狗採集藍莓
        this.input.keyboard.on('keydown-DOWN', () => {
            this.physics.overlap(dog, Blueberrys, (dog, Blueberrys) => {
                Blueberrys.disableBody(true, true);
                blueberry_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againBlueberrys,
                    callbackScope: this,
                    args: [Blueberrys],
                });
                this.collectElement();
            }, null, this);
        }, this);

        //按下鍵狗狗採集蝶豆花
        this.input.keyboard.on('keydown-DOWN', () => {
            this.physics.overlap(dog, crocus, (dog, crocus) => {
                crocus.disableBody(true, true);
                crocus_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againcrocus,
                    callbackScope: this,
                    args: [crocus],
                });
                this.collectElement();
            }, null, this);
        }, this);




        //====panda animator====
        panda.anims.create({
            key: "A",
            frames: this.anims.generateFrameNumbers("panda", { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });
        panda.anims.create({
            key: "turn",
            frames: [{ key: "panda", frame: 4 }],
            frameRate: 20,
            repeat: -1,
        });
        panda.anims.create({
            key: "D",
            frames: this.anims.generateFrameNumbers("panda", { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,
        });
        panda.anims.create({
            key: "W",
            frames: this.anims.generateFrameNumbers("panda", { start: 10, end: 9 }),
            frameRate: 5,
            repeat: -1,
        });
        panda.anims.create({
            key: "S",
            frames: this.anims.generateFrameNumbers("panda", { start: 9, end: 10 }),
            frameRate: 5,
            repeat: -1,
        });

        //===================================
        //====dog animator====
        dog.anims.create({
            key: "left",
            frames: this.anims.generateFrameNumbers("dog", { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1,
        });
        dog.anims.create({
            key: "front",
            frames: [{ key: "dog", frame: 4 }],
            frameRate: 20,
            repeat: -1,
        });
        dog.anims.create({
            key: "right",
            frames: this.anims.generateFrameNumbers("dog", { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1,
        });

        //板子
        this.board = this.add.sprite(this.cameras.main.scrollX, this.cameras.main.scrollY, 'board')
            .setScale(1, 0.6);
        this.text0 = this.add.text(0, 0, ' NEED ', { fontSize: '16px', fill: '#ffffff' });
        this.text1 = this.add.text(0, 0, crocus_count + '/99 ', { fontSize: '12px', fill: '#ffffff' });
        this.text2 = this.add.text(0, 0, blueberry_count + '/99 ', { fontSize: '12px', fill: '#ffffff' });
        this.boardCrocus = this.add.image(0, 0, 'crocus')
            .setScale(0.35);
        this.boardBlueberry = this.add.image(0, 0, 'blueberrys')
            .setScale(1);
        this.board.setOrigin(0, 0);

        //音樂BGM
        audio_pick = this.sound.add('pick');
        if (!bgm || !bgm.isPlaying) {
            bgm = this.sound.add('bgm', {
                volume: 1,
                loop: true
            });
            bgm.play();
        }

        // console.log(this);
        // console.log(":)");

    }

    collectElement() {
        if(crocus_count===15&&blueberry_count===15)
        {
            this.collectedElements += 1;
            console.log(crocus_count);
            console.log(blueberry_count);
            console.log("check1");
        }
    }

    update() {
        this.board.setPosition(this.cameras.main.scrollX, this.cameras.main.scrollY);
        this.text0.setPosition(this.cameras.main.scrollX + 20, this.cameras.main.scrollY + 3);

        this.boardCrocus.setPosition(this.cameras.main.scrollX + 30, this.cameras.main.scrollY + 32);
        this.text1.setPosition(this.cameras.main.scrollX + 55, this.cameras.main.scrollY + 25);

        this.boardBlueberry.setPosition(this.cameras.main.scrollX + 30, this.cameras.main.scrollY + 55);
        this.text2.setPosition(this.cameras.main.scrollX + 55, this.cameras.main.scrollY + 50);

        this.text1.setText(crocus_count + '/15 ');if (crocus_count > 15) {crocus_count = 15};
        this.text2.setText(blueberry_count + '/15 ');if (blueberry_count > 15) {blueberry_count = 15};

        //====panda animation====
        if (keyA.isDown) {
            panda.setVelocityX(-200);//向左ww
            panda.anims.play('A', true);
            //console.log("key A is click!");

        }
        else if (keyD.isDown) {
            panda.setVelocityX(200);//向右
            panda.anims.play('D', true);
        }
        else {
            panda.setVelocityX(0);//沒有按就不會動
            panda.anims.play('turn', true);
            // console.log("key S is click!");

        }
        if (panda.body.touching.down && keyW.isDown) {//向上 this.body.blocked.down 另外一種寫法
            panda.setVelocityY(-500);
            console.log("key W is click!");
            panda.anims.play('W', true);
        }


        //====dog animation====
        if (cursors.left.isDown) {
            dog.setVelocityX(-200);//向左
            dog.anims.play('left', true);
            //console.log("left is click!");

        }
        else if (cursors.right.isDown) {
            dog.setVelocityX(200);//向右
            dog.anims.play('right', true);
            //console.log("right is click!");
        }
        else {
            dog.setVelocityX(0);//沒有按就不會動
            dog.anims.play('front', true);
            // console.log("key S is click!");

        }
        if (dog.body.blocked.down && cursors.up.isDown) {//向上 this.body.blocked.down 另外一種寫法
            dog.setVelocityY(-500);
            // dog.anims.play('up', true);
            //console.log("up is click!");
        }

        if (this.collectedElements === 1 &&
            this.scene.get('scene2').collectedElements === 1 &&
            this.scene.get('scene3').collectedElements === 1) {
                this.over = this.physics.add.staticSprite(240, 125, 'win');
                this.over.setScale(0.35);
                this.over.setDepth(6);

                btn_re = this.physics.add.staticSprite(248, 250, 'restart');
                btn_re.setScale(0.1);
                btn_re.setDepth(7);
                btn_re.setInteractive();
        
                btn_re.setInteractive()
                btn_re.on('pointerup', () => {
                    window.location.reload(); // 點擊按鈕後進入遊戲的第一個場景
                });
                console.log('check')
        }
    }
}

function againBlueberrys(Blueberrys) {
    Blueberrys.enableBody(true, Blueberrys.x, Blueberrys.y, true, true);
}

function againcrocus(crocus) {
    crocus.enableBody(true, crocus.x, crocus.y, true, true);
}


