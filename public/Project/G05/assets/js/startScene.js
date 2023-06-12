class startScene extends Phaser.Scene {
    constructor() {
        super({ key: "startScene" });
    }

    preload() {
        this.load.image('start_bg', './assets/menu/start_bg.png');
        this.load.image('title', './assets/menu/title.png');
        this.load.image('start_out', './assets/menu/start_out.png');
        this.load.image('start_over', './assets/menu/start_over.png');
        this.load.image('setting_out', './assets/menu/setting_out.png');
        this.load.image('setting_over', './assets/menu/setting_over.png');
        this.load.audio('mouseclick', './assets/audio/mouse.mp3');
        this.load.audio('bgMusic', './assets/audio/play.mp3');
    }

    create() {

        if (firstIn == true) {
            //宣告並設定背景音樂
            bgMusic = this.sound.add('bgMusic', {
                volume: 1,
                loop: true
            });
            firstIn = false;
        }

        if (isBGMOn == true) bgMusic.play();

        this.add.image(0, 0, 'start_bg').setOrigin(0);
        this.add.image(600, 400, 'title').setScale(2.5);

        var startButton = this.add.image(600, 550, 'start_out');
        var settingButton = this.add.image(1100, 70, 'setting_out').setScale(0.15);

        let sound_mouseclick = this.sound.add('mouseclick', {
            volume: 1,
            loop: false
        });

        startButton.setInteractive();
        settingButton.setInteractive();


        //開始按鍵及設定按鍵的mouseover mouseout圖片切換
        startButton.on("pointerover", () => {   
            startButton.setTexture("start_over");
        });
        startButton.on("pointerout", () => {
            startButton.setTexture("start_out");
        });

        settingButton.on("pointerover", () => {
            settingButton.setTexture("setting_over");
        });
        settingButton.on("pointerout", () => {
            settingButton.setTexture("setting_out");
        });

        startButton.on('pointerdown', () => {
            
            if (isEffectOn == true) sound_mouseclick.play();
            
            this.scene.start('selectScene');
        });

        settingButton.on('pointerdown', () => {
            this.scene.start('settingScene');
            if (isEffectOn == true) sound_mouseclick.play();
        });

    }
    update() {

    }
}