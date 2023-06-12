import { controller } from "./controller.js"

//全域變數
// ====keyboard====
let keyA, keyW, keyS, keyD;
let cursors;//按鍵

let panda, dog;
let audio_pick;
let leaf_count = 0, mulberry_count = 0;
let btn_re;

export default class scene3 extends Phaser.Scene {
    constructor() {
        super({ key: 'scene3' });
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
        this.load.image('leaf', './assets/obj/leaf.png');
        this.load.image('mulberry', './assets/obj/mulberries.png');
        this.load.spritesheet('panda');
        this.load.spritesheet('dog');

        this.load.image('board', './assets/UI/board.png');

        this.load.audio('pick', './assets/pick.mp3');

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
        let bush = this.physics.add.group({
            key: 'bush',
            repeat: 4,
            setXY: { x: 75, y: 110, stepX: 200 },
        });
        bush.children.iterate(function (child) {
            child.setScale(1.45).setDepth(0);
            child.setCollideWorldBounds(true);
        });
        this.physics.add.collider(bush, bgGround);//ground 和 dog 的碰撞 


        //tree
        let tree_2 = this.add.image(120, 132, 'tree_2').setDepth(0);
        tree_2.setScale(2);

        let tree_3 = this.add.image(600, 132, 'tree_2').setDepth(0);
        tree_3.setScale(2);


        //leaf
        let leaf = this.physics.add.group({
            key: 'leaf',
            repeat: 4,
            setXY: { x: 350, y: 100, stepX: 148 },
        });
        leaf.children.iterate(function (child) {
            child.setScale(0.05);
            child.setCollideWorldBounds(true);
            child.setDepth(3);
        });

        //桑葚群組
        let mulberry = this.physics.add.group();
        mulberry.createMultiple([
            { key: 'mulberry', repeat: 4, setXY: { x: 65, y: 248, stepX: 198 } },
            { key: 'mulberry', repeat: 4, setXY: { x: 78, y: 231, stepX: 198 } },
            { key: 'mulberry', repeat: 4, setXY: { x: 90, y: 248, stepX: 198 } },
        ]);

        mulberry.children.iterate((child) => {
            child.setScale(1.2);
            this.physics.world.enable(child);
            child.body.setAllowGravity(false);
            child.body.setImmovable(true);
        });



        //==== player obj ====
        panda = this.physics.add.sprite(498, 200, 'panda').setDepth(5);//用一個sprite裝panda這個東西
        panda.setScale(0.05);
        panda.setCollideWorldBounds(true);//物理世界的邊界

        //dog
        dog = this.physics.add.sprite(600, 200, 'dog');//用一個sprite裝parrot這個東西
        dog.setScale(0.05);
        dog.setCollideWorldBounds(true);//物理世界的邊界


        //==== 碰撞 ====
        this.physics.add.collider(panda, bgGround);//ground 和 panda 的碰撞
        this.physics.add.collider(dog, bgGround);//ground 和 dog 的碰撞 
        this.physics.add.collider(leaf, bgGround);//ground 和 dog 的碰撞 



        //設定邊界
        this.physics.world.setBounds(0, 0, 992, 272);//物理世界
        this.cameras.main.setBounds(0, 0, 992, 272);//攝影機邊界

        //攝影機
        this.cameras.main.startFollow(panda, true, 0.05, 0.05);//攝影機追蹤玩家
        this.cameras.main.setViewport(0, 0, 496, 272);//攝影機視線範圍


        function boundsOn() {
            this.physics.world.on('worldbounds', collisionListener, this);
        }

        function collisionListener(body, up, down, left, right) {
            if (left) {
                console.log("panda left");
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


        //按S鍵熊貓採集葉子
        this.input.keyboard.on('keydown-S', () => {
            this.physics.overlap(panda, leaf, (panda, leaf) => {
                leaf.disableBody(true, true);
                leaf_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againleaf,
                    callbackScope: this,
                    args: [leaf],
                });
                this.collectElement();
            }, null, this);
        }, this);

        //按S鍵熊貓採集蝶葉子
        this.input.keyboard.on('keydown-S', () => {
            this.physics.overlap(panda, mulberry, (panda, mulberry) => {
                mulberry.disableBody(true, true);
                mulberry_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againmulberry,
                    callbackScope: this,
                    args: [mulberry],
                });
                this.collectElement();
            }, null, this);
        }, this);

        //按下鍵狗狗採集桑葚
        this.input.keyboard.on('keydown-DOWN', () => {
            this.physics.overlap(dog, leaf, (dog, leaf) => {
                leaf.disableBody(true, true);
                leaf_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againleaf,
                    callbackScope: this,
                    args: [leaf],
                });
                this.collectElement();
            }, null, this);
        }, this);

        //按下鍵狗狗採集桑葚
        this.input.keyboard.on('keydown-DOWN', () => {
            this.physics.overlap(dog, mulberry, (dog, mulberry) => {
                mulberry.disableBody(true, true);
                mulberry_count += 1;
                audio_pick.play();
                this.time.addEvent({
                    delay: 5000,
                    callback: againmulberry,
                    callbackScope: this,
                    args: [mulberry],
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

        this.board = this.add.sprite(this.cameras.main.scrollX, this.cameras.main.scrollY, 'board')
        .setScale(1, 0.6);
        this.text0 = this.add.text(0, 0, ' NEED ', { fontSize: '16px', fill: '#ffffff' });
        this.text1 = this.add.text(0, 0, leaf_count + '/10 ', { fontSize: '12px', fill: '#ffffff' });
        this.text2 = this.add.text(0, 0, mulberry_count + '/15 ', { fontSize: '12px', fill: '#ffffff' });
        this.boardLeaf = this.add.image(0, 0, 'leaf')
        .setScale(0.04);
        this.boardMulberry = this.add.image(0, 0, 'mulberry')
        .setScale(1);
        this.board.setOrigin(0, 0);


        //音樂
        audio_pick = this.sound.add('pick');
    }

    collectElement() {
        if(leaf_count===10&&mulberry_count===15)
        {
            this.collectedElements += 1;
            console.log(leaf_count);
            console.log(mulberry_count);
            console.log("check3");
        }
    }

    update() {
        this.board.setPosition(this.cameras.main.scrollX, this.cameras.main.scrollY);
        this.text0.setPosition(this.cameras.main.scrollX + 20, this.cameras.main.scrollY + 3);

        this.boardLeaf.setPosition(this.cameras.main.scrollX + 30, this.cameras.main.scrollY + 30);
        this.text1.setPosition(this.cameras.main.scrollX + 55, this.cameras.main.scrollY + 25);

        this.boardMulberry.setPosition(this.cameras.main.scrollX + 30, this.cameras.main.scrollY + 55);
        this.text2.setPosition(this.cameras.main.scrollX + 55, this.cameras.main.scrollY + 50);
        
        this.text1.setText(leaf_count + '/10 ');if (leaf_count > 10) {leaf_count = 10};
        this.text2.setText(mulberry_count + '/15 ');if (mulberry_count > 15) {mulberry_count = 15};

        
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
            this.scene.get('scene1').collectedElements === 1 &&
            this.scene.get('scene2').collectedElements === 1) {
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

function againleaf(leaf) {
    leaf.enableBody(true, leaf.x, leaf.y, true, true);
}

function againmulberry(mulberry) {
    mulberry.enableBody(true, mulberry.x, mulberry.y, true, true);
}
