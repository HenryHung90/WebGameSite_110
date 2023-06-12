
let bgMusic;
class main extends Phaser.Scene {
    constructor() {
        super({ key: 'main' });
    }

    preload() {
        this.load.image('cover', 'assets/png/Cover.png');
        this.load.audio('mainMusic', 'assets/audio/mainMusic.mp3');

    }
    create() {
        this.add.image(400, 300, 'cover');
        bgMusic = this.sound.add('mainMusic',
            {
                volume: 1,
                loop: true
            }
        );
        bgMusic.play();
        this.setUI();
    }
    update() {

    }
    setUI() {
        let restartShape = this.add.rectangle(400, 300, 720, 450, 0x5A5AAD);
        restartShape.setStrokeStyle(4, 0x484891).setDepth(2).setScrollFactor(0).setAlpha(0).setVisible(false).setInteractive().on('pointerup', () => {
            if (controllText1.visible) {
                controllText1.setVisible(false);
                controllText2.setVisible(true);
            }
            else if (controllText2.visible) {
                controllText2.setVisible(false);
                restartShape.setVisible(false);
                restartShape.setAlpha(0);
            }
        });;

        let titleText = this.add.text(600 / 2 - 120, 50, '奔跑吧MOFU!!', {
            fontSize: '70px 微軟正黑體',
            color: '#230183',
            padding: 10,
        }).setDepth(1);

        let controllText1 = this.add.text(600 / 2 - 230, 150, '【遊戲說明】\n\n被驅逐出冰淇淋王國的冰淇淋Mofu\n很想要回到溫暖的家裡\n請幫助冰淇淋Mofu找到回家的道路！', {
            fontSize: '40px 微軟正黑體',
            color: 'white',
            padding: 10,
        }).setDepth(2).setVisible(false);

        let controllText2 = this.add.text(600 / 2 - 240, 130, '【遊玩方式】\n遊戲一共有六張地圖\n如果碰到怪物或被畫面追到\n都會造成Mofu受到傷害; v ;\n一次遊戲有三條生命，\n如果全部都扣完會從頭開始ㄛ\n按下上下左右鍵跟WASD鍵控制MOFU移動\n努力跑到最後吧！\n*空白鍵也可以跳躍', {
            fontSize: '36px 微軟正黑體',
            color: 'white',
            padding: 10,
        }).setDepth(2).setVisible(false);

        let yesbtn = this.add.text(600 / 2 - 200, 900 / 2 - 230, '開始遊戲', {
            fontSize: '45px 微軟正黑體',
            color: 'white',
            stroke: 'white',
            padding: 20,
            backgroundColor: 'black',
        }).setDepth(1).setInteractive()
            .on('pointerup', () => {
                let data = { Live: 3 };
                bgMusic.setMute(true);
                this.scene.start('scene1', data);
            });

        let nobtn = this.add.text(600 / 2 - 200, 900 / 2 - 80, '遊戲玩法', {
            fontSize: '45px 微軟正黑體',
            color: 'white',
            stroke: 'white',
            padding: 20,
            backgroundColor: 'black',
        }).setDepth(1).setInteractive()
            .on('pointerup', () => {
                controllText1.setVisible(true);
                restartShape.setVisible(true);
                this.tweens.add({
                    targets: restartShape,
                    alpha: 1, // 目標透明度
                    duration: 200, // 持續時間（毫秒）
                    ease: 'Linear', // 緩動函式（可選）
                });
            });
    }
}
export default main;