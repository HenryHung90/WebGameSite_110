class gameoverScene extends Phaser.Scene {
    constructor() {
        super({ key: "gameoverScene" });
    }

    preload() {
        this.load.image('bg', './assets/gameover/gameover_bg.png');
        this.load.image('goToStartPage_out', './assets/btn/goToStartPage_out.png');
        this.load.image('goToStartPage_over', './assets/btn/goToStartPage_over.png');
        this.load.audio('mouseclick', './assets/audio/mouse.mp3');
        this.load.audio('gameovermusic', './assets/audio/gameover.mp3');
    }

    create() {
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg').setScale(1);

        this.add.text(420, 450, "關卡所得金幣 : " + thisLevel_coin.toString(), { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });

        //returnbtn
        let return_to_startPage_btn = this.add.image(600, 600, 'goToStartPage_out').setScale(1);
        let sound_mouseclick = this.sound.add('mouseclick', {
            volume: 1,
            loop: false
        });

        let gameover = this.sound.add('gameovermusic', {
            volume: 1,
            loop: false
        });
        if (isBGMOn == true) gameover.play();

        //return按鍵的mouseover mouseout圖片切換
        return_to_startPage_btn.setInteractive();

        return_to_startPage_btn.on("pointerover", () => {
            return_to_startPage_btn.setTexture("goToStartPage_over");
        });
        return_to_startPage_btn.on("pointerout", () => {
            return_to_startPage_btn.setTexture("goToStartPage_out");
        });
        return_to_startPage_btn.on('pointerdown', () => {
            total_coin += thisLevel_coin;
            if (isEffectOn == true) sound_mouseclick.play();
            gameover.stop();
            this.scene.start("startScene");
        });
    }
}