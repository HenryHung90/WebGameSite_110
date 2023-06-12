
class stage2 extends Phaser.Scene {
    constructor() {
        super({ key: "stage2" });
    }



    preload() {
        // this.load.image("hos_floor", "../../assets/image/spritesheets/hos_floor.png");
        this.load.image("hos_floor", "./assets/image/spritesheets/hos_floor.png");//地板
        this.load.image("bed1", "./assets/image/spritesheets/bed1.png");//床
        this.load.image("bed2", "./assets/image/spritesheets/bed2.png");//床
        this.load.image("bed3", "./assets/image/spritesheets/bed3.png");//床
        this.load.image("drip_state", "./assets/image/spritesheets/drip_stand.png");//點滴
        this.load.image("shelf", "./assets/image/spritesheets/shelf.png");//架子
        this.load.image("shelf2", "./assets/image/spritesheets/shelf2.png");//架子

        this.load.image("blood5", "./assets/image/spritesheets/blood5.png");//血跡5
        this.load.image("blood4", "./assets/image/spritesheets/blood4.png");//血跡4
        this.load.image("blood3", "./assets/image/spritesheets/blood3.png");//血跡3
        this.load.image("blood2", "./assets/image/spritesheets/blood2.png");//血跡2
        // this.load.spritesheet('player', '../../assets/image/spritesheets/dude.png', { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('player', './assets/image/spritesheets/hero.png', { frameWidth: 16, frameHeight: 16 })
        this.load.image("enemy", "./assets/image/spritesheets/enemy.png");//敵人
        this.load.image("redTan", "./assets/image/spritesheets/redTan59.png");//紅色方塊?
        this.load.image("Key", "./assets/image/spritesheets/Key.png");//鑰匙
        this.load.image("box", "./assets/image/spritesheets/box.png");//箱子
        this.load.image("magnet", "./assets/image/spritesheets/horseshoe-magnet.webp");//磁鐵
    }

    create() {
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

        this.physics.world.setBounds(0, 0, 1200, 720);

        console.log("Stage2");
        console.log(this);

        // this.add.text(50, 50, "Hello World", {
        //     fontFamily: "CustomFont",
        //     fontSize: "36px",
        // });
        // this.add.image(50, 50, "hos_floor");

        //Text

        let floorGroup = this.add.tileSprite(config.width, config.height, config.width*2, config.height*2, "hos_floor");



        //bed
        bed = this.physics.add.group({
            immovable: true
        });
        bed.createMultiple([
            { key: "bed1", repeat: 3, setXY: { x: 60, y: 60, stepX: 120 } }
        ]);
        bed.createMultiple([
            { key: "bed2", repeat: 3, setXY: { x: 1160, y: 60, stepY: 160 } }
        ]);
        bed.createMultiple([
            { key: "bed3", repeat: 3, setXY: { x: 40, y: 200, stepY: 160 } }
        ]);

        //drip
        drip_stand = this.physics.add.group();
        drip_stand.createMultiple([
            { key: "drip_state", repeat: 3, setXY: { x: 30, y: 30, stepX: 120 } },
            // {key: "drip_state", repeat: 3, setXY: {x: 20, y:30, setpY: 100}},
        ]);

        //shelf
        shelf = this.physics.add.group({
            immovable: true
        });
        shelf.createMultiple([
            { key: "shelf2", repeat: 5, setXY: { x: 250, y: 300, stepX: 40 } }
        ]);
        shelf.createMultiple([
            { key: "shelf2", repeat: 5, setXY: { x: 250, y: 340, stepY: 40 } }
        ]);
        shelf.createMultiple([
            { key: "shelf", repeat: 5, setXY: { x: 500, y: 60, stepX: 40 } }
        ]);
        shelf.createMultiple([
            { key: "shelf", repeat: 8, setXY: { x: 360, y: 520, stepX: 40 } }
        ]);
        shelf.createMultiple([
            { key: "shelf", repeat: 6, setXY: { x: 780, y: 300, stepY: 40 } }
        ]);
        shelf.createMultiple([
            { key: "shelf", repeat: 4, setXY: { x: 820, y: 420, stepX: 40 } }
        ]);

        //blood5
        blood = this.add.group();
        blood.createMultiple([
            { key: "blood5", repeat: 0, setXY: { x: 100, y: 240, stepY: 0 } }
        ]);
        blood.createMultiple([
            { key: "blood4", repeat: 0, setXY: { x: 700, y: 240, stepY: 0 } }
        ]);
        blood.createMultiple([
            { key: "blood3", repeat: 0, setXY: { x: 300, y: 680, stepY: 0 } }
        ]);
        blood.createMultiple([
            { key: "blood2", repeat: 0, setXY: { x: 900, y: 600, stepY: 0 } }
        ]);

        //enemy
        // enemy = this.physics.add.group({
        //     immovable: true
        // });
        // enemy.createMultiple([
        //     { key: "enemy", repeat: 2, setXY: { x: 400, y: 240, stepX: 100 } }
        // ]);

        //NextLevel
        Next = this.physics.add.group({
            immovable: true
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


        //Collider
        this.physics.add.collider(player, bed);
        this.physics.add.collider(player, shelf);
        this.physics.add.collider(player, enemy, Attack);
        this.physics.add.collider(player, Key, LevelWin);
        this.physics.add.collider(player, Next, NextLevel);
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

        // if(o.isDown) {
        //     Camera.shake(2000);
        // }
    }

}

function Attack() {
    PlayerBlood--;
    Camera.shake(200);
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
    }
    else {
        // this.add.text(20, 20, "Not Win", {
        //     fontFamily: "CustomFont",
        //     fontSize: "16px",
        //     color: "red"
        // })
        console.log("Change!!");
    }
}