class Scene2 extends Phaser.Scene {
    constructor() {
        super({ key: "Scene2" })
        this.player = null;
        this.heart = null;
        this.lose = null;
        this.enemy = null;
        this.attackRangeSprite = null;
        this.teleporter = null;
        this.teleporter1 = null;
        
    }


    preload() {
        this.load.audio('lose', 'music/lose.mp3');
        this.load.audio('pick', 'music/pick.mp3');

        this.load.image("heart", 'assets/heart.png');
        this.load.image("lose", 'assets/lose.png');
        this.load.image("bgnight", 'image/background/Environment/bg-night2.png');
        this.load.image("stone1", 'image/background/Environment/stone1.png');
        this.load.image("stone2", 'image/background/Environment/stone2.png');
        this.load.image("stone3", 'image/background/Environment/stone3.png');
        this.load.image("stone4", 'image/background/Environment/stone4.png');
        this.load.image("stone5", 'image/background/Environment/stone5.png');
        this.load.image("gress1", 'image/background/Environment/Foreground/grass1.png');
        this.load.image("gress2", 'image/background/Environment/Foreground/grass2.png');
        this.load.image("gress3", 'image/background/Environment/Foreground/grass3.png');
        this.load.image("gress4", 'image/background/Environment/Foreground/grass4.png');
        this.load.image("gress5", 'image/background/Environment/Foreground/grass5.png');
        this.load.image("high_grass1", 'image/background/Environment/Foreground/high_grass1.png');
        this.load.image("high_grass2", 'image/background/Environment/Foreground/high_grass2.png');
        this.load.image("high_grass3", 'image/background/Environment/Foreground/high_grass3.png');
        this.load.image("high_grass4", 'image/background/Environment/Foreground/high_grass4.png');




    
        this.load.spritesheet('player2', 'image/Player-fix.png', { frameWidth: 16, frameHeight: 22 });


        this.load.spritesheet("enemy", "assets/enemy1.png", { frameWidth: 43.6, frameHeight: 65 });

        this.load.spritesheet("bat", "assets/bat1.png", { frameWidth: 48.2, frameHeight: 39 });

        this.load.spritesheet('tp', 'image/transporter.png', { frameWidth: 50, frameHeight: 100 });


    }
    create() {

        this.add.image(0,0,"bgnight").setOrigin(0);
        this.add.image(480,0,"bgnight").setOrigin(0);
        this.add.image(0,270,"bgnight").setOrigin(0);
        this.add.image(480,270,"bgnight").setOrigin(0);
        this.add.image(0,540,"bgnight").setOrigin(0);
        this.add.image(480,540,"bgnight").setOrigin(0);



        this.score = 0;

        this.scoreText = this.add.text(10, 10, "這裡是scene 2 Score:", {
            fontSize: 50,
            fill: "white"
        });
        const attackRangeOffsetX = 20; 
        const attackRangeOffsetY = 10; 





        this.player = new Player(this, 400, 165);

        this.enemy1 = new Enemy(this, 100, 570, "enemy");
        this.enemy2 = new Enemy(this, 200, 570, "enemy");
        this.enemybat = new Enemy(this, 300, 610, "bat");


        this.enemys = [this.enemy1, this.enemy2, this.enemybat];


        this.anims.create({
            key: 'eleft',
            frames: this.anims.generateFrameNumbers('enemy', { start: 13, end: 25 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'eright',
            frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 12 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'bat_flap',
            frames: this.anims.generateFrameNumbers('bat', { start: 0, end: 4 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('player2', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'turn',
            frames: [{ key: 'player2', frame: 0 }],
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('player2', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('player2', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('player2', { start: 1, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'action',
            frames: this.anims.generateFrameNumbers('tp', { start: 1, end: 20 }),
            frameRate: 10,
            repeat: -1
        });


        this.stones = this.physics.add.staticGroup();
        this.stones.create(300, 214, 'stone1');
        this.stones.create(400, 108, 'stone2'); 
        this.stones.create(500, 312, 'stone3'); 
        this.stones.create(600, 405, 'stone4'); 
        this.stones.create(700, 103, 'stone5');
        this.stones.create(300, 207, 'stone5'); 
        this.stones.create(400, 511, 'stone5');
        this.stones.create(300, 401, 'stone2'); 
        this.stones.create(200, 221, 'stone3');

        this.gresses = this.physics.add.staticGroup();
        this.gresses.create(300, 214, 'gress1');
        this.gresses.create(400, 108, 'gress2');
        this.gresses.create(500, 312, 'gress3');
        this.gresses.create(600, 405, 'gress4');
        this.gresses.create(700, 103, 'gress5');
        this.stones.create(300, 207, 'gress5'); 
        this.stones.create(400, 511, 'gress5');
        this.stones.create(300, 401, 'gress2'); 
        this.stones.create(200, 221, 'gress3');





        this.heart = this.physics.add.staticGroup();
        this.heart.create(270, 170, 'heart').setScale(0.5);
        this.heart.create(320, 170, 'heart').setScale(1);
        this.heart.create(220, 170, 'heart').setScale(2);

        this.physics.add.collider(this.player, this.stones);


        this.teleporter = this.add.sprite(50, 500,"tp");

        this.teleporter1 = this.add.sprite(750, 500,"tp");




        this.physics.add.overlap(
            this.heart,
            this.player,
            this.player_touch_heart,
            null,
            this
        );

        this.physics.add.overlap(
            this.enemys,
            this.player,
            this.player_touch_enemy,
            null,
            this
        );


        const switchscene1 = () => {
            this.scene.stop('Scene2');
            this.scene.start("Scene1");
        }
        const switchscene3 = () => {
            this.scene.stop('Scene2');
            this.scene.start("Scene3");
        }
        //鍵盤
        this.cursors = this.input.keyboard.createCursorKeys();

        this.switchSc = this.input.keyboard.addKey("L"); 
        this.attack = this.input.keyboard.addKey("J");
        this.events.on('update', () => {
            const distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.teleporter.x, this.teleporter.y);
            const radiusSum = (this.teleporter.width) / 2;

            const distance1 = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.teleporter1.x, this.teleporter1.y);
            const radiusSum1 = (this.teleporter1.width) / 2;
          


            if (distance <= radiusSum) {

                this.switchSc.on('down', () => { 
                    switchscene1();
                });
            }
            if (distance1 <= radiusSum1) {

                this.switchSc.on('down', () => { 
                    switchscene3();
                });
            } 

            this.attack.on('down', () => {

            })
        });

    }

    restart() {
        this.scene.start();
    }
    player_touch_enemy(enemys, player) {
        player.disableBody(true, true);
        this.sound.play("lose");

        this.add.text(250, 150, "Gameover!", {
            fontSize: "64px",
            color: "#ff0000"
        });
        this.clickButton = this.add.text(300, 250, '[Restart GAME]', { fontSize: '25px', color: '#FF8000' }).setInteractive({ useHandCursor: true }).on('pointerup', () => {
            this.restart();
        });
    }
    player_touch_heart(player, hearts) {
        hearts.disableBody(true, true);
        this.sound.play('pick');
        this.score++;
    }


    update() {


        this.teleporter.anims.play("action",true)
        this.teleporter1.anims.play("action",true) 
        this.scoreText.setText("Score:" + this.score);
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-250);
            this.player.anims.play("left", true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(250);
            this.player.anims.play("right", true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play("turn");
        }
        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-250);
            this.player.anims.play("up", true);

        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(250);
            this.player.anims.play("down", true);
        } else {
            this.player.setVelocityY(0);
        }
        for (let enemy of this.enemys) {  
            enemy.update();
            if (enemy.directionX == 1 && enemy.animationKey == "enemy") {
                enemy.anims.play("eright", true);
            }
            else if (enemy.directionX == -1 && enemy.animationKey == "enemy") {
                enemy.anims.play("eleft", true);

            }
            else if (enemy.directionX == 1 && enemy.animationKey == "bat") {
                enemy.anims.play("bat_flap", true);
            }
            else if (enemy.directionX == -1 && enemy.animationKey == "bat") {
                enemy.anims.play("bat_flap", true);
            }
            
            if (Math.abs(enemy.x - this.player.x) > 50 && Math.abs(enemy.y - this.player.y) > 50) {
            }
            else {
                if (enemy.x <= this.player.x) {
                    enemy.directionX = 1;
                }
                if (enemy.x > this.player.x) {
                    enemy.directionX = -1;
                }
                if (enemy.y > this.player.y) {
                    enemy.directionY = -1;
                }
            }
        }
    }
}