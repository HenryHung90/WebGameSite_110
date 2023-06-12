const getRandom = (max, min) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const gamePlay = {
    key: 'gamePlay',
    preload: function(){

        this.load.image('bg2', 'images/bg/bg2.png');
        this.load.image('bg3', 'images/bg/bg3.png');
        this.load.image('bg4', 'images/bg/bg4.png');
        this.load.image('footer', 'images/bg/footer.png');
        this.load.image('rock1', 'images/item-level-1-rock.png');
        this.load.image('rock2', 'images/item-level-2-smoke-sm.png');
        this.load.image('rock3', 'images/item-level-1-branch.png');
        this.load.image('gameover', 'images/ui/txt-game-over.png');
        this.load.image('tryAgainBtn', 'images/ui/btn-try-again.png');
        this.load.image('congratulations', 'images/ui/txt-congratulations.png');
        this.load.image('playAgainBtn', 'images/ui/btn-play-again.png');

        this.load.audio('bg', 'assets/sounds/bg.mp3');
        


        this.load.image('NEXT', 'images/ui/btn-nextlevel.png');


        this.load.spritesheet('user', 'images/player.png', {frameWidth: 144, frameHeight: 120});

        this.iskeyJump = true;   
        this.monsterArr = [];    
        this.monsterArr2 = [];   
        this.masIdx = 0;         
        this.masIdx2 = 1;        
        this.gameStop = false;   
        this.bgSpeed = 1.2;      
        this.TimeStep = 30;      
    },
    create: function(){
        var soundManager = this.sound;
        soundManager.volume = 0.5;
        var sound = soundManager.add('bg');
        sound.play();



        this.bg4 = this.add.tileSprite(400, 225, cw, ch, 'bg4');
        this.bg3 = this.add.tileSprite(400, 225, cw, ch, 'bg3');
        this.bg2 = this.add.tileSprite(400, 225, cw, ch, 'bg2');
        this.footer = this.add.tileSprite(400, 395, 800, 90, 'footer');
        
        this.player = this.physics.add.sprite(150, 150, 'user');
        this.player.setCollideWorldBounds(true); 
        this.player.setBounce(0.6); 
        this.player.setScale(scale); 
        

        this.timeText = this.add.text(25, ch - 46, `TIME: ${this.TimeStep}`, { fontSize: '22px', fill: '#FFFFFF' })

        this.Level = this.add.text(25, ch -445, "Level 1", { fontSize: '22px', fill: '#000000' })


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
                    this.scene.start('Level2');
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
            {name: 'rock1', x: cw + 200, y: 320, w: 160, h: 83},
            {name: 'rock2', x: cw + 200, y: ch / 2 - 30 , w: 200, h: 94},
            {name: 'rock3', x: cw + 200, y: 70, w: 130, h: 160},
        ]


        const hittest = (player, rock) => {
            this.player.setBounce(0);
            this.player.setSize(110, 100, 0);
            this.player.anims.play('deel', true);
            clearInterval(gametime);
        
            setTimeout(() => {
                this.gameStop = true;
                let gameover = this.add.image(cw / 2, ch / 2 - 40, 'gameover');
                gameover.setScale(0.8);
                let tryAgainBtn = this.add.image(cw / 2, ch / 2 + 30, 'tryAgainBtn');
                tryAgainBtn.setScale(0.6);
                tryAgainBtn.setInteractive();
                tryAgainBtn.on('pointerdown', () => this.scene.start('gameStart'));
            }, 1000);
        }
        
            
        for (let i = 0; i < 10; i++) {
            let BoolIdx = getRandom(2, 0);
            let BoolIdx2 = getRandom(2, 0);
            this['monster'+ i] = this.add.tileSprite(masPos[BoolIdx].x, masPos[BoolIdx].y, masPos[BoolIdx].w, masPos[BoolIdx].h, masPos[BoolIdx].name);
            this['monsterB'+ i] = this.add.tileSprite(masPos[BoolIdx2].x, masPos[BoolIdx2].y, masPos[BoolIdx2].w, masPos[BoolIdx2].h, masPos[BoolIdx2].name);
            this.monsterArr.push(this['monster'+ i]);
            this.monsterArr2.push(this['monsterB'+ i]);
            addPhysics(this['monster'+i]);
            addPhysics(this['monsterB'+i]);
            this.physics.add.collider(this.player, this['monster'+i], hittest);
            this.physics.add.collider(this.player, this['monsterB'+i], hittest);
        }


        addPhysics(this.footer);


        this.physics.add.collider(this.player, this.footer);


        this.player.anims.play('run', true);
        
    },
    update: function(){
        if(this.gameStop) return;

        this.bg3.tilePositionX += 1 * this.bgSpeed;
        this.bg2.tilePositionX += 2 * this.bgSpeed;

        this.footer.tilePositionX += 3 * this.bgSpeed;

        this.monsterArr[this.masIdx].x -= 3 * this.bgSpeed;


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