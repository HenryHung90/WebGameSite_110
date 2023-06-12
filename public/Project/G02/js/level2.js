const Level2 = {
    key: 'Level2',
    preload: function(){
        this.load.image('bg1', 'images/bg/bg1.png');
        this.load.image('bg2', 'images/bg/bg2.png');
        this.load.image('bg3', 'images/bg/bg3.png');
        this.load.image('bg4', 'images/bg/bg4.png');
        this.load.image('footer', 'images/bg/footer.png');
        this.load.image('rock1', 'images/item-level-1-rock.png');
        this.load.image('rock2', 'images/item-level-2-smoke-sm.png');
        this.load.image('rock3', 'images/item-level-1-branch.png');
        this.load.image('mounster2', 'images/mounster_flower.png');
        this.load.image('mounster1', 'images/mounster_Bee.png');

        this.load.image('gameover', 'images/ui/txt-game-over.png');
        this.load.image('tryAgainBtn', 'images/ui/btn-try-again.png');
        this.load.image('congratulations', 'images/ui/txt-congratulations.png');
        this.load.image('playAgainBtn', 'images/ui/btn-play-again.png');
        this.load.spritesheet('user', 'images/player.png', {frameWidth: 144, frameHeight: 120});

        this.load.image('NEXT', 'images/ui/btn-nextlevel.png');

        this.iskeyJump = true;   
        this.monsterArr = [];    
        this.monsterArr2 = [];   
        this.masIdx = 0;         
        this.masIdx2 = 1;        
        this.gameStop = false;   
        this.bgSpeed = 1.2;      
        this.TimeStep = 2;      
    },
    create: function(){



        this.bg4 = this.add.tileSprite(400, 225, cw, ch, 'bg4');
        this.bg3 = this.add.tileSprite(400, 225, cw, ch, 'bg3');
        this.bg2 = this.add.tileSprite(400, 225, cw, ch, 'bg2');
        this.bg1 = this.add.tileSprite(400, 225, cw, ch, 'bg1');
        this.footer = this.add.tileSprite(400, 395, 800, 90, 'footer');
        

        this.player = this.physics.add.sprite(150, 150, 'user');
        this.player.setCollideWorldBounds(true); 
        this.player.setBounce(0.6); 
        this.player.setScale(scale); 
        

        this.timeText = this.add.text(25, ch - 46, `TIME: ${this.TimeStep}`, { fontSize: '22px', fill: '#FFFFFF' })


        this.Level = this.add.text(25, ch -445, "Level 2", { fontSize: '22px', fill: '#000000' })

        let gametime = setInterval(()=>{
            this.TimeStep--;
            this.timeText.setText(`TIME: ${this.TimeStep}`);
            if(this.TimeStep < 20 && this.TimeStep > 10 ){
                this.bgSpeed = 1.8;
            }else if(this.TimeStep < 10 && this.TimeStep > 0 ){
                this.bgSpeed = 2.5;
            }else if(this.TimeStep <= 0){
                this.gameStop = true;
                clearInterval(gametime);

                let congratulations = this.add.image(cw / 2, ch / 2 - 50, 'congratulations');
                congratulations.setScale(0.8);
                let playNextBtn = this.add.image(cw / 2, ch / 2 + 80, 'NEXT');
                playNextBtn.setScale(0.6);
                playNextBtn.setInteractive();
                playNextBtn.on('pointerdown', () => {
                    this.sound.play('button');
                    this.scene.start('Level3');
                });
            }
        }, 1000);

        

        keyFrame(this);


        const addPhysics = GameObject =>{
            this.physics.add.existing(GameObject);
            GameObject.body.immovable = true;
            GameObject.body.moves = false;
        }

 
        const masPos = [
            {name: 'mounster2', x: cw + 200, y: 300, w: 150, h: 152},
            {name: 'mounster1', x: cw + 200, y: ch / 2 - 30 , w: 140, h: 135},
            {name: 'rock3', x: cw + 200, y: 50, w: 130, h: 100},
        ]

 
        const hittest = (player, rock) => {
            this.gameStop = true;
            this.player.setBounce(0);
            this.player.setSize(110, 100, 0);
            this.player.anims.play('deel', true);
            clearInterval(gametime);
            let gameover = this.add.image(cw / 2, ch / 2 - 40, 'gameover');
            gameover.setScale(0.8);
            let tryAgainBtn = this.add.image(cw / 2, ch / 2 + 30, 'tryAgainBtn');
            tryAgainBtn.setScale(0.6);
            tryAgainBtn.setInteractive();
            tryAgainBtn.on('pointerdown', () => this.scene.start('Level2'));
        }
        
            

        for (let i = 0; i < 10; i++) {
            let BoolIdx = getRandom(2, 0);
            let BoolIdx2 = getRandom(2, 0);
            this['rock'+ i] = this.add.tileSprite(masPos[BoolIdx].x, masPos[BoolIdx].y, masPos[BoolIdx].w, masPos[BoolIdx].h, masPos[BoolIdx].name);
            this['rockB'+ i] = this.add.tileSprite(masPos[BoolIdx2].x, masPos[BoolIdx2].y, masPos[BoolIdx2].w, masPos[BoolIdx2].h, masPos[BoolIdx2].name);
            this.monsterArr.push(this['rock'+ i]);
            this.monsterArr2.push(this['rockB'+ i]);
            addPhysics(this['rock'+i]);
            addPhysics(this['rockB'+i]);
            this.physics.add.collider(this.player, this['rock'+i], hittest);
            this.physics.add.collider(this.player, this['rockB'+i], hittest);
        }


        addPhysics(this.footer);


        this.physics.add.collider(this.player, this.footer);


        this.player.anims.play('run', true);
        
    },
    update: function(){
        if(this.gameStop) return;

        this.bg3.tilePositionX += 1 * this.bgSpeed;
        this.bg2.tilePositionX += 2 * this.bgSpeed;
        this.bg1.tilePositionX += 3 * this.bgSpeed;
        this.footer.tilePositionX += 3 * this.bgSpeed;

        this.monsterArr[this.masIdx].x -= 3 * this.bgSpeed;
        this.monsterArr2[this.masIdx2].x -= 3 * this.bgSpeed;

        for (let i = 0; i < this.monsterArr.length; i++) {
            if(this.monsterArr[i].x <= -100){
                this.monsterArr[i].x = cw + 200;
                this.masIdx = getRandom(this.monsterArr.length - 1, 0);
            }
            if(this.monsterArr2[i].x <= -100){
                this.monsterArr2[i].x = cw + getRandom(400, 200);
                this.masIdx2 = getRandom(this.monsterArr2.length - 1, 0);
            }
        }


        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.setSize(144, 120, 0); 
            this.player.anims.play('speed', true);
            this.player.flipX = false;
        } else if (cursors.left.isDown) {
            this.player.setVelocityX(-300);
            this.player.anims.play('speed', true);
            this.player.flipX = true;
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('run', true);
            this.player.setSize(110, 90, 0); 
            this.player.flipX = false;
        }
        if (cursors.up.isDown) {
            if(this.iskeyJump){
                this.iskeyJump = false;
                this.player.setVelocityY(-300);
            }
        }else{
            this.iskeyJump = true;
        }
    }
}