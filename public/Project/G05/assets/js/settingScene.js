class settingScene extends Phaser.Scene {
    constructor() {
        super({ key: "settingScene" });
    }

    preload() {
        this.load.image('setting_bg', './assets/setting/setting_bg.jpg');
        this.load.image('setting_block', './assets/setting/setting_block.png');
        this.load.image('return_out', './assets/setting/return_out.png');
        this.load.image('return_over', './assets/setting/return_over.png');
        this.load.image('BGM_on_out', './assets/setting/BGM_on_out.png');
        this.load.image('BGM_on_over', './assets/setting/BGM_on_over.png');
        this.load.image('BGM_off_out', './assets/setting/BGM_off_out.png');
        this.load.image('BGM_off_over', './assets/setting/BGM_off_over.png');
        this.load.image('effect_on_out', './assets/setting/effect_on_out.png');
        this.load.image('effect_on_over', './assets/setting/effect_on_over.png');
        this.load.image('effect_off_out', './assets/setting/effect_off_out.png');
        this.load.image('effect_off_over', './assets/setting/effect_off_over.png');
        this.load.audio('mouseclick', './assets/audio/mouse.mp3');
    }

    create() {
        //背景
        this.add.image(this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'setting_bg').setScale(1);
        this.add.image(this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'setting_block').setScale(1);

        //宣告三個按鍵
        let returnbtn, BGMbtn, effectbtn;
        let sound_mouseclick = this.sound.add('mouseclick', {
            volume: 1,
            loop: false
        });

        //returnbtn
        returnbtn = this.add.image(this.cameras.main.width / 2,
            this.cameras.main.height / 2 - 200,
            'return_out').setScale(1);

        //BGMbtn
        if (isBGMOn == true) {
            BGMbtn = this.add.image(this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                'BGM_on_out').setScale(1);
        }
        else {
            BGMbtn = this.add.image(this.cameras.main.width / 2,
                this.cameras.main.height / 2,
                'BGM_off_out').setScale(1);
        }

        // effectbtn
        if (isEffectOn == true) {
            effectbtn = this.add.image(this.cameras.main.width / 2,
                this.cameras.main.height / 2 + 200,
                'effect_on_out').setScale(1);
        }
        else {
            effectbtn = this.add.image(this.cameras.main.width / 2,
                this.cameras.main.height / 2 + 200,
                'effect_off_out').setScale(1);
        }

        returnbtn.setInteractive();
        BGMbtn.setInteractive();
        effectbtn.setInteractive();

        //return按鍵的mouseover mouseout圖片切換
        returnbtn.on("pointerover", () => {
            returnbtn.setTexture("return_over");
        });
        returnbtn.on("pointerout", () => {
            returnbtn.setTexture("return_out");
        });
        returnbtn.on('pointerdown', () => {
            if (bgMusic.isPlaying) {
                isBGMOn = true;
            }
            else isBGMOn = false;
            this.scene.start('startScene');
            if (isEffectOn == true) sound_mouseclick.play();
        });

        //BGM按鍵的mouseover mouseout圖片切換
        BGMbtn.on("pointerover", () => {
            if (bgMusic.isPlaying)
                BGMbtn.setTexture("BGM_on_over");
            else
                BGMbtn.setTexture("BGM_off_over");
        });
        BGMbtn.on("pointerout", () => {
            if (bgMusic.isPlaying)
                BGMbtn.setTexture("BGM_on_out");
            else
                BGMbtn.setTexture("BGM_off_out");
        });
        BGMbtn.on("pointerdown", () => {
            if (bgMusic.isPlaying) {
                bgMusic.stop();
                isBGMOn = false;
                BGMbtn.setTexture("BGM_off_over");

            }
            else {
                bgMusic.play();
                isBGMOn = true;
                BGMbtn.setTexture("BGM_on_over");
            }
            if (isEffectOn == true) sound_mouseclick.play();
        });


        //effect按鍵的mouseover mouseout圖片切換
        effectbtn.on("pointerover", () => {
            if (isEffectOn == true)
                effectbtn.setTexture("effect_on_over");
            else
                effectbtn.setTexture("effect_off_over");
        });
        effectbtn.on("pointerout", () => {
            if (isEffectOn == true)
                effectbtn.setTexture("effect_on_out");
            else
                effectbtn.setTexture("effect_off_out");
        });
        effectbtn.on("pointerdown", () => {
            if (isEffectOn == true) {
                effectbtn.setTexture("effect_off_over");
                isEffectOn = false;
            }
            else {
                isEffectOn = true;
                effectbtn.setTexture("effect_on_over");
            }
            if (isEffectOn == true) sound_mouseclick.play();
        });
    }
    update() {

    }
}