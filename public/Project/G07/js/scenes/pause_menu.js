class pause_menu extends Phaser.Scene {
  constructor() {
    super({ key: "pause_menu" });
  }

  preload() {
    this.load.image("darkenBack", "./assets/image/independent/darkenBack.png");
    this.load.image("darkenFront", "./assets/image/independent/darkenFront.png");
    this.load.image("pauseSceneBackground", "./assets/image/independent/pauseSceneBackground.png");
  }

  //接收currentScene
  create(data) {
    console.log("=================");
    console.log("paused scene data");
    console.log(data.currentScene);
    console.log("=================");

    console.log("pause_menu on");

    //將pause_menu顯示於最上端
    this.scene.bringToTop();

    //增加背景暗化遮罩並設定alpha channel值為零
    let darkenBack = this.add.image(config.width / 2, config.height / 2, "darkenBack");
    Phaser.Actions.SetAlpha([darkenBack], 0);

    //動畫增加不透明度讓背景變暗
    this.tweens.add({
      targets: darkenBack,
      alpha: 0.6,
      duration: 400,
      ease: "Sine.easeInOut",
    });

    //pauseMenu的外框
    let pauseMenu = this.add.image(config.
      width / 2, config.height / 2, "pauseSceneBackground");

    //增加resumeBTN並設定alpha channel值為零
    let resumeBTN = this.add.text(config.width / 2, config.height / 2 - 40, "繼續遊戲", {
      fontFamily: "CustomFont",
      fontSize: "24px",
    })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on("pointerover", () => {
        resumeBTN.setTintFill("0xAAAAEE");//進入改色
      })
      .on("pointerout", () => {
        resumeBTN.setTintFill("0xFFFFFF");//出界改色
      });
    Phaser.Actions.SetAlpha([resumeBTN], 0);

    //增加backToMenuBTN並設定alpha channel值為零
    let backToMenuBTN = this.add.text(config.width / 2, config.height / 2 + 40, "回到選單", {
      fontFamily: "CustomFont",
      fontSize: "24px",
    })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on("pointerover", () => {
        backToMenuBTN.setTintFill("0xAAAAEE");//進入改色
      })
      .on("pointerout", () => {
        backToMenuBTN.setTintFill("0xFFFFFF");//出界改色
      });

    Phaser.Actions.SetAlpha([backToMenuBTN], 0);

    //pauseMenu的滑入動畫
    //且用onComplete讓pauseMenu的滑入動畫播完再把resumeBTN和backToMenuBTN不透明度變成1
    this.tweens.add({
      targets: pauseMenu,
      y: { from: config.height / 2 * 3, to: config.height / 2 },
      duration: 500,
      ease: "Sine.easeInOut",
      onComplete: () => {
        this.tweens.add({
          targets: resumeBTN,
          alpha: 1,
          duration: 400,
          ease: "Sine.easeInOut",
        });
        this.tweens.add({
          targets: backToMenuBTN,
          alpha: 1,
          duration: 400,
          ease: "Sine.easeInOut",
        });
      }
    });

    //定義resumeBTN左鍵放開事件
    resumeBTN.on("pointerup", () => {
      console.log("resumed");

      this.tweens.add({
        targets: resumeBTN,
        alpha: 0,
        duration: 400,
        ease: "Sine.easeInOut",
      });
      this.tweens.add({
        targets: backToMenuBTN,
        alpha: 0,
        duration: 400,
        ease: "Sine.easeInOut",
        onComplete: () => {
          //暗化背景遮這淡出
          this.tweens.add({
            targets: darkenBack,
            alpha: 0,
            duration: 400,
            ease: "Sine.easeInOut",
          });

          //pauseMenu滑出畫面
          this.tweens.add({
            targets: pauseMenu,
            y: { from: config.height / 2, to: config.height / -2 },
            duration: 500,
            ease: "Sine.easeInOut",
            onComplete: () => {
              console.log("pause_menu stopped");
              console.log("===============");
              this.scene.stop("pause_menu");
            }
          });
        }
      });
      //最後resume data.currentScene繼續遊戲
      this.scene.resume(data.currentScene);
    });
    
    //定義backToMenuBTN左鍵放開事件
    backToMenuBTN.on("pointerup", () => {
      //增加darkenFront並設定alpha channel值為零
      let darkenFront = this.add.image(config.width / 2, config.height / 2, "darkenFront");
      Phaser.Actions.SetAlpha([darkenFront], 0);

      //讓整個畫面黑掉並播完動畫時停止data.currentScene再進入主選單
      this.tweens.add({
        targets: darkenFront,
        alpha: 1,
        duration: 1500,
        ease: "Sine.easeInOut",
        onComplete: () => {
          console.log("===============");
          this.scene.stop(data.currentScene);
          console.log("back to main_menu");
          this.scene.start("main_menu");
        }
      });

    });
  }

  update() { }
}
