
let bed = null;
let drip_stand = null;
let shelf = null;
let blood5 = null;
let player = null;
let keyB = null;
let enemy = null;
let Camera = null;
var PlayerBlood = 50;
let PlayerLife = null;
let message = null;
let role = null;
// let 
let w, a, s, d, o, u;
let Next = null;
let Key = null;
let box = null;

//Boolean
var gameWin = false;
var boxPush = true;



let test = null;

var zuoyou = 0, shangxia = 0;

class stage1 extends Phaser.Scene {
    constructor() {
        super({ key: "stage1" });
    }

    preload() {
        // this.load.image("hos_floor", "../../assets/image/spritesheets/hos_floor.png");
        this.load.image("hos_floor", "./assets/image/spritesheets/hos_floor.png");
        this.load.image("bed", "./assets/image/spritesheets/bed3.png");
        this.load.image("drip_state", "./assets/image/spritesheets/drip_stand.png");
        this.load.image("shelf", "./assets/image/spritesheets/shelf.png");
        this.load.image("blood5", "./assets/image/spritesheets/blood5.png");
        this.load.spritesheet('player', './assets/image/spritesheets/Hero.png', { frameWidth: 16, frameHeight: 16 });
        this.load.image("enemy", "./assets/image/spritesheets/enemy.png");
        this.load.image("redTan", "./assets/image/spritesheets/redTan59.png");
        this.load.image("Key", "./assets/image/spritesheets/Key.png");
        this.load.image("box", "./assets/image/spritesheets/box.png");
        this.load.image("dialog", "./assets/image/spritesheets/dialog.png");
    }

    create() {
        this.physics.world.setBounds(0, 0, 1200, 720);

        console.log("Stage1");
        console.log(this);

        // this.add.text(50, 50, "Hello World", {
        //     fontFamily: "CustomFont",
        //     fontSize: "36px",
        // });
        // this.add.image(50, 50, "hos_floor");

        //Text

        let floorGroup = this.add.tileSprite(config.width, config.height, config.width*2, config.height*2, "hos_floor");
        //ColliderBox
        // Collider = this.physics.add.group({
        //     immovable: true,
        // });
        // Collider.createMultiple([
        //     {key: "coll", repeat: 17, setXY: {x: 1100, y: 40, stepY: 40}},
        // ])

        //bed
        bed = this.physics.add.group({
            immovable: true
        });
        bed.createMultiple([
            { key: "bed", repeat: 3, setXY: { x: 40, y: 40, stepY: 100 } }
        ]);


        //drip
        drip_stand = this.physics.add.group();
        drip_stand.createMultiple([
            { key: "drip_state", repeat: 3, setXY: { x: 20, y: 70, stepY: 100 } },
            // {key: "drip_state", repeat: 3, setXY: {x: 20, y:30, setpY: 100}},
        ]);

        //shelf
        shelf = this.physics.add.group({
            immovable: true
        });
        shelf.createMultiple([
            { key: "shelf", repeat: 5, setXY: { x: 200, y: 40, stepX: 40 } }
        ]);

        //blood5
        blood5 = this.add.group();
        blood5.createMultiple([
            { key: "blood5", repeat: 0, setXY: { x: 100, y: 240, stepY: 0 } }
        ]);

        //enemy
        enemy = this.physics.add.group({
            immovable: true,
            // CollideWorldBounds: true,
            // Bounce: 1
        });
        enemy.createMultiple([
            { key: "enemy", repeat: 2, setXY: { x: 400, y: 240, stepX: 100 } },
            { key: "enemy", repeat: 1, setXY: { x: 500, y: 300, stepY: 100 } },
        ]);
        // enemy.setCollideWorldBounds(true).setBounce(1);

        //NextLevel
        Next = this.physics.add.group({
            immovable: boxPush
        })
        // Next = this.physics.add.image(1100, 20, "redTan");
        Next.createMultiple([
            { key: "redTan", repeat: 0, setXY: { x: 1100, y: 20, stepX: 100 } }
        ]);


        // Key = this.physics.add.group({
        //     immovable: true,
        // });
        // Key.createMultiple([
        //     {key: "Key", repeat: 0, setXY: {x: 1100, y: 600}}
        // ]);



        //Key
        Key = this.physics.add.image(1100, 660, "Key").setScale(0.04);
        // Key.setScale(0.04);
        Key.setImmovable(true);

        //box
        box = this.physics.add.group({
            immovable: false,
            // immovable: boxPush,
        });
        box.createMultiple([
            { key: "box", repeat: 0, setXY: { x: 1050, y: 660 } },
            { key: "box", repeat: 0, setXY: { x: 1100, y: 700 } },
            { key: "box", repeat: 0, setXY: { x: 1150, y: 660 } },
        ]);
        // box.setImmovable(true);

        //player
        player = this.physics.add.sprite(200, 200, "player").setScale(2);
        player.setCollideWorldBounds(true);

        // Camera
        Camera = this.cameras.main;
        Camera.setBounds(0, 0, 1200, 720).startFollow(
            player, //要跟隨之變數物件
            true,
            1, //X軸延遲跟隨
            1, //Y軸延遲跟隨
            0, //X軸相對偏移
            0 //Y軸相對偏移
        );

        //keyboard
        w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        u = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
        // o = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

        // Animator
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'player', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });


        //Collider
        this.physics.add.collider(player, bed);
        this.physics.add.collider(player, shelf);
        this.physics.add.collider(player, enemy, Attack);
        this.physics.add.collider(player, Key, LevelWin);
        this.physics.add.collider(player, Next,  () => NextLevel());
        this.physics.add.collider(player, box);

        //Text(Blood)
        PlayerLife = this.add.text(50, 20, PlayerBlood, {
            fontFamily: "CustomFont",
            fontSize: "24px",
            color: "red",
        }).setScrollFactor(0);

        message = this.add.text(500, 20, " ", {
            fontFamily: "CustomFont",
            fontSize: "24px",
            color: "Blue",
        }).setScrollFactor(0);

        role = this.add.text(320, 10, "WASD移動", {
            fontFamily: "CustomFont",
            fontSize: "16px",
            color: "Black",
        }).setScrollFactor(0);

        keyEnable.call(this);
    }

    update() {
        if (w.isDown) {
            player.setVelocityY(-500);
            player.anims.play('up', true);
        }
        else if (a.isDown) {
            player.setVelocityX(-500);
            player.anims.play('left', true);
        }
        else if (s.isDown) {
            player.setVelocityY(500);
            player.anims.play('down', true);
        }
        else if (d.isDown) {
            player.setVelocityX(500);
            player.anims.play('right', true);
        }
        else {
            player.setVelocityX(0);
            player.setVelocityY(0);
            player.anims.play('turn');
        }

        if (u.isDown) {
            boxPush = false;
        }

        enemy.children.iterate(function (enemy) {
            if(player.x > enemy.x) {
                enemy.body.velocity.x += 5
            }
            if(player.x < enemy.x) {
                enemy.body.velocity.x -= 5
            }
            if(player.y > enemy.y) {
                enemy.body.velocity.y += 5
            }
            if(player.y < enemy.y) {
                enemy.body.velocity.y -= 5
            }
        });
        if (keyESC.isDown) {
            callPauseScene(this);
        }
    }

}

function Attack() {
    // var PlayerBlood = 50;
    PlayerBlood--;
    PlayerLife.setText(PlayerBlood);
    if (PlayerBlood < 0) {
        PlayerLife.setText("你輸了!!");
    }
    // PlayerBlood.add.text(550, 20, '50', {fontFamily: "CustomFont", fontSize: "24px", color: "red"})
    Camera.shake(200, 0.01);
}

function LevelWin() {
    message.setText("鑰匙!!");
    gameWin = true;
    console.log(gameWin);
}

function NextLevel() {
    if (gameWin == true) {
        // this.add.text(320, 240, "YouWin", {
        //     fontFamily: "CustomFont",
        //     fontSize: "36px",
        //     color: "red"
        // })
        message.setText("下一關");
        
        console.log("YouWin!!");
        this.scene.start("stage2");
    }
    else {
        // this.add.text(20, 20, "Not Win", {
        //     fontFamily: "CustomFont",
        //     fontSize: "16px",
        //     color: "red"
        // })
        // console.log("Change!!");
        message.setText("還沒結束喔!!");
    }
}