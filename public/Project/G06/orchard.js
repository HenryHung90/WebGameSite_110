import { controller } from "./controller.js"

//全域變數
// ====keyboard====
let keyA, keyW, keyS, keyD;
let cursors;//按鍵

let panda, dog;
let audio_pick;
let tomato_count = 0, pumpkin_count = 0;
let btn_re;

export default class scene2 extends Phaser.Scene {
    constructor() {
        super({ key: 'scene2' });
        this.collectedElements = 0;
    }


    preload() {
        // ====bg====

        this.load.image('bgHouse2', './assets/bg/bgHome2.png');
        this.load.image('bgHouse1', './assets/bg/bgHome1.png');
        this.load.image('bgGround', './assets/bg/ground.png');

        //==== obj ====
        this.load.image('bush', './assets/obj/Newbush.png');
        this.load.image('tree_2', './assets/obj/tree_2.png');
        this.load.image('tree_3', './assets/obj/tree_3.png');
        this.load.image('tomato', './assets/obj/tomato.png');
        this.load.image('pumpkin', './assets/obj/pumpkin.png');
        this.load.spritesheet('panda');
        this.load.spritesheet('dog');

        this.load.image('board', './assets/UI/board.png');

        this.load.audio('pick', './assets/pick.mp3');
        this.load.image('win', './assets/cover/WIN.png');

    }

    create() {
        // this.scene.stop('scene1');
        // this.scene.remove('scene1');

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

        //==== object ====
        //番茄草叢
        let bush = this.physics.add.group({
            key: 'bush',
            repeat: 4,
            setXY: { x: 170, y: 110, stepX: 200 },
        });
        bush.children.iterate(function (child) {
            child.setScale(1.45).setDepth(1);
            child.setCollideWorldBounds(true);
        });
        this.physics.add.collider(bush, bgGround);//ground 和 dog 的碰撞 

        //Tomatos
        let Tomatos = this.physics.add.group();
        Tomatos.createMultiple([
            { key: 'tomato', repeat: 4, setXY: { x: 160, y: 247, stepX: 198 } },
            { key: 'tomato', repeat: 4, setXY: { x: 170, y: 231, stepX: 198 } },
            { key: 'tomato', repeat: 4, setXY: { x: 180, y: 247, stepX: 198 } },
        ]);

        Tomatos.children.iterate((child) => {
            child.setDepth(2);
            this.physics.world.enable(child);
            child.body.setAllowGravity(false);
            child.body.setImmovable(true);
        });

        //tree_2
        let tree_2 = this.physics.add.group({
            key: 'tree_2',
            repeat: 2,
            setXY: { x: 100, y: 100, stepX: 390 },
        });
        tree_2.children.iterate(function (child) {
            child.setScale(1.4);
            child.setCollideWorldBounds(true);
            child.setDepth(3);
        });

        //Pumpkins
        this.Pumpkins = this.physics.add.group({
            key: 'pumpkin',
            repeat: 4,
            setXY: { x: 50, y: 100, stepX: 200 },
        });
        this.Pumpkins.children.iterate(function (child) {
            child.setScale(1.5);
            child.setCollideWorldBounds(true);
            child.setDepth(3);
        });

        //tree_3
        let tree_3 = this.physics.add.group({
            key: 'tree_3',
            repeat: 1,
            setXY: { x: 300, y: 100, stepX: 400 },
        });
        tree_3.children.iterate(function (child) {
            child.setScale(1.2);
            child.setCollideWorldBounds(true);
            child.setDepth(3);
        });


        //==== player obj ====
        panda = this.physics.add.sprite(0, 200, 'panda').setDepth(5);//用一個sprite裝panda這個東西
        panda.setScale(0.05);
        panda.setCollideWorldBounds(true);//物理世界的邊界

        //dog
        dog = this.physics.add.sprite(325, 200, 'dog');//用一個sprite裝parrot這個東西
        dog.setScale(0.05);
        dog.setDepth(3);
        dog.setCollideWorldBounds(true);//物理世界的邊界


        //==== 碰撞 ====
        this.physics.add.collider(panda, bgGround);//ground 和 panda 的碰撞
        this.physics.add.collider(dog, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(Tomatos, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(this.Pumpkins, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(tree_2, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(tree_3, bgGround);//ground 和 dog 的碰撞 

        //按S鍵熊貓採集番茄
        this.input.keyboard.on('keydown-S', () => {
            this.physics.overlap(panda, Tomatos, (panda, Tomatos) => {
                Tomatos.disableBody(true, true);
                tomato_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againTomatos,
                    callbackScope: this,
                    args: [Tomatos],
                });
                this.collectElement();
            }, null, this);
        }, this);

        //按下鍵狗狗採集番茄
        this.input.keyboard.on('keydown-DOWN', () => {
            this.physics.overlap(dog, Tomatos, (dog, Tomatos) => {
                Tomatos.disableBody(true, true);
                tomato_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againTomatos,
                    callbackScope: this,
                    args: [Tomatos],
                });
                this.collectElement();
            }, null, this);
        }, this);

        //設定邊界
        this.physics.world.setBounds(0, 0, 992, 272);//物理世界
        this.cameras.main.setBounds(0, 0, 992, 272);//攝影機邊界

        //攝影機
        this.cameras.main.startFollow(panda, true, 0.05, 0.05);//攝影機追蹤玩家
        this.cameras.main.setViewport(0, 0, 496, 272);//攝影機視線範圍

        //變換場景
        function boundsOn() {
            this.physics.world.on('worldbounds', collisionListener, this);
        }

        function collisionListener(body, up, down, left, right) {
            if (right) {
                console.log("panda right");
                this.scene.start('scene1');
            }
        }

        panda.body.onWorldBounds = false;
        setTimeout(() => {
            panda.body.onWorldBounds = true;
            boundsOn.call(this);
        }, 200);

        //console.log(panda.body);
        // 監聽與世界邊界碰撞事件
        this.physics.world.on('worldbounds', collisionListener, this);

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
        this.text1 = this.add.text(0, 0, tomato_count + '/15 ', { fontSize: '12px', fill: '#ffffff' });
        this.text2 = this.add.text(0, 0, pumpkin_count + '/5 ', { fontSize: '12px', fill: '#ffffff' });
        this.boardTomato = this.add.image(0, 0, 'tomato')
            .setScale(0.9);
        this.boardPumpkin = this.add.image(0, 0, 'pumpkin')
            .setScale(0.85);
        this.board.setOrigin(0, 0);
        //音樂
        audio_pick = this.sound.add('pick');

    }

    //win
    collectElement() {
        if (tomato_count === 15 && pumpkin_count === 5) {
            this.collectedElements += 1;
            console.log(tomato_count);
            console.log(pumpkin_count);
            console.log("check2");
        }

    }

    update() {
        this.board.setPosition(this.cameras.main.scrollX, this.cameras.main.scrollY);
        this.text0.setPosition(this.cameras.main.scrollX + 20, this.cameras.main.scrollY + 3);

        this.boardTomato.setPosition(this.cameras.main.scrollX + 30, this.cameras.main.scrollY + 30);
        this.text1.setPosition(this.cameras.main.scrollX + 55, this.cameras.main.scrollY + 25);


        this.boardPumpkin.setPosition(this.cameras.main.scrollX + 30, this.cameras.main.scrollY + 55);
        this.text2.setPosition(this.cameras.main.scrollX + 55, this.cameras.main.scrollY + 50);

        this.text1.setText(tomato_count + '/15 '); if (tomato_count > 15) { tomato_count = 15 };
        this.text2.setText(pumpkin_count + '/5 '); if (pumpkin_count > 5) { pumpkin_count = 5 };
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

        //熊貓和狗狗一起採集南瓜
        if (keyS.isDown && cursors.down.isDown) {
            const touchingPumpkins = this.physics.overlap(panda, this.Pumpkins) && this.physics.overlap(dog, this.Pumpkins);
            if (touchingPumpkins) {
                let pumpkinToCollect = null;
                this.Pumpkins.children.each((pumpkin) => {
                    if (!pumpkinToCollect && this.physics.overlap(panda, pumpkin) && this.physics.overlap(dog, pumpkin)) {
                        pumpkinToCollect = pumpkin;
                    }
                });

                if (pumpkinToCollect) {
                    pumpkinToCollect.disableBody(true, true);
                    pumpkin_count += 1;
                    audio_pick.play();
                    this.time.addEvent({
                        delay: 5000,
                        callback: againPumpkins,
                        callbackScope: this,
                        args: [pumpkinToCollect],
                    });
                    this.collectElement();
                }
            }
        }

        //win
        if (this.collectedElements === 1 &&
            this.scene.get('scene1').collectedElements === 1 &&
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
            console.log()
        }

    }
}

function againTomatos(Tomatos) {
    Tomatos.enableBody(true, Tomatos.x, Tomatos.y, true, true);
}

function againPumpkins(Pumpkins) {
    Pumpkins.enableBody(true, Pumpkins.x, Pumpkins.y, true, true);
}
