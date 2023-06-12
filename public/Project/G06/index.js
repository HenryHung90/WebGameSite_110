//攝影機 動畫 畫布大小 按鍵 世界邊界 
import scene1 from './house.js';//住家
import scene2 from './orchard.js';//果園
import scene3 from './forest.js';//森林
let button;

//========
const cover = {
    key:'cover',
    preload(){ 
        // 在這裡加載遊戲進入畫面的資源，例如圖片、音效等
        this.load.image('sky', './assets/cover/bg.png');
        this.load.image('ground', './assets/cover/ground.png');
        this.load.image('btn', './assets/cover/btn.png');
        this.load.image('parrot_cover', './assets/cover/parrot.png');
        this.load.image('panda_cover', './assets/cover/panda.png');
        this.load.image('dog_cover', './assets/cover/dog.png');
        this.load.image('zebra', './assets/cover/zebra.png');
        this.load.image('logo', './assets/cover/logo.png');

        this.load.image('way', './assets/playway/way.png');
        this.load.image('way1', './assets/playway/way1.png');
        this.load.image('way2', './assets/playway/way2.png');
    },

    create(){
         // 在這裡建立遊戲進入畫面的封面
         this.add.image(config.width / 2, config.height / 2, 'sky')
            .setScale(1.5);
        this.add.image(80, config.height - 16, 'ground')
        this.add.image(80 + 160, config.height - 16, 'ground');
        this.add.image(80 + 160 * 2, config.height - 16, 'ground');
        this.add.image(80 + 160 * 3, config.height - 16, 'ground');

        this.add.image(50, config.height - 55, 'parrot_cover')
            .setScale(0.25)
        // .setAngle(-5)
        // .setSmooth(false);
        this.add.image(150, config.height - 80, 'dog_cover')
            .setScale(0.11);
        this.add.image(346, config.height - 80, 'panda_cover')
            .setScale(0.11);
        this.add.image(440, config.height - 80, 'zebra')
            .setScale(-1)
            .setScale(0.125);

        this.add.image(config.width/2, 55, 'logo')
            .setScale(0.25);

        const startButton = this.add.image(248, 200, 'btn', { fontSize: '32px', fill: '#ffffff' })
            .setOrigin(0.5)
            .setInteractive();
        startButton.on('pointerup', () => {
            this.way.visible = true;
        });

         // 顯示遊玩方式
        this.wayIndex = 0;
        this.way = this.physics.add.staticSprite(240, 125, 'way');
        this.way.setScale(0.35);
        this.way.visible = false;

        this.way.setInteractive()
        .on('pointerdown', function () {
            switchImage.call(this);
        }, this);

        button = this.physics.add.staticSprite(248, 250, 'btn');
        button.setInteractive();
        button.visible = false;

        button.setInteractive()
        button.on('pointerup', () => {
            this.scene.start('scene1'); // 點擊按鈕後進入遊戲的第一個場景
        });
        },

    update(){

    }
}
//========
function switchImage() {
    if (this.wayIndex < 2) {
        this.wayIndex++;
        // 根据新的索引加载对应的图片
        this.way.setTexture('way' + this.wayIndex);
    }

    if (this.wayIndex === 2) {
        button.visible = true; // 显示按钮
        this.way.disableInteractive(); // 禁用图片的交互功能
    }
}
//遊戲設定
const config = {
    type:Phaser.AUTO,
    width:496,
    height:272,

    // backgroundColor: '#000000',
    scale:{//畫面置中
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH

    },
    parent:'',
    physics:{
        default:'arcade',
        arcade:{
            gravity:{
                y: 1500
            },
            debug: false
        }
    },
    scene:[cover, scene1, scene2, scene3]
};
const game = new Phaser.Game(config);