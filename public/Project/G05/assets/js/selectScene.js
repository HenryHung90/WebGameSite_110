class selectScene extends Phaser.Scene {
    constructor() {
        super({ key: "selectScene" });
    }

    preload() {
        this.load.image('selected_bg', './assets/selected/selected_bg.jpg');
        this.load.image('return_out', './assets/setting/return_out.png');
        this.load.image('return_over', './assets/setting/return_over.png');
        this.load.image('bagger', './assets/selected/beggar_select.png');
        this.load.image('student', './assets/selected/student_select.png');
        this.load.image('frog', './assets/selected/frog_select.png');
        this.load.image('text', './assets/selected/select_text.png');
        this.load.audio('mouseclick', './assets/audio/mouse.mp3');
    }
    create() {
        const selected = this.add.image(this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'selected_bg').setScale(1);

        //returnbtn
        let returnbtn = this.add.image(100, 50, 'return_out').setScale(0.7);

        let sound_mouseclick = this.sound.add('mouseclick', {
            volume: 1,
            loop: false
        });

        //return按鍵的mouseover mouseout圖片切換
        returnbtn.setInteractive();
        returnbtn.on("pointerover", () => {
            returnbtn.setTexture("return_over");
        });
        returnbtn.on("pointerout", () => {
            returnbtn.setTexture("return_out");
        });
        returnbtn.on('pointerdown', () => {
            this.scene.start('startScene');
            if (isEffectOn == true) sound_mouseclick.play();
        });

        //bagger
        const bagger = this.add.image((this.cameras.main.width / 2) - 250,
            this.cameras.main.height / 2,
            'bagger').setScale(0.7);
        bagger.setInteractive();

        bagger.on('pointerdown', () => {
            isBagger = true;
            isStudent = false;
            isFrog = false;
            this.scene.start('levelScene');
        });

        //student
        const student = this.add.image(this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'student').setScale(0.7);
        student.setInteractive();

        student.on('pointerdown', () => {
            isStudent = true;
            isBagger = false;
            isFrog = false;
            this.scene.start('levelScene');
        });

        //frog
        const frog = this.add.image(this.cameras.main.width / 2 + 250,
            this.cameras.main.height / 2,
            'frog').setScale(0.7);

        //選擇腳色文字
        this.add.image(selected.x, selected.y + 250, 'text');

    }
    update() {

    }
}