class main_menu extends Phaser.Scene {
  constructor() {
    super({ key: "main_menu" });

  }

  preload() {
    this.load.image("woodFloor", "./assets/image/independent/wood_floor.png");
  }

  create() {
    //create start
    console.log("===============");
    console.log("main_menu start");
    console.log("===============");

    //tileSprite重複生成地板
    let floorGroup = this.add.tileSprite(config.width / 2, config.height / 2, config.width, config.height, "woodFloor");

    //新增text"開始遊戲"作為按鈕
    let startBTN = this.add
      .text(config.width / 2, config.height / 3, "開始遊戲", {
        fontFamily: "CustomFont",
        fontSize: "36px",
      })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on("pointerover", () => {
        startBTN.setTintFill("0xAAAAEE");//進入改色
      })
      .on("pointerout", () => {
        startBTN.setTintFill("0xFFFFFF");//出界改色
      })
      .on("pointerup", () => {
        console.log("start stage1 scene");
        this.scene.start("stage1");//放開左鍵進入stage1
      });

    //新增text"選擇關卡"作為按鈕
    let chooseStageBTN = this.add
      .text(config.width / 2, config.height / 2, "選擇關卡", {
        fontFamily: "CustomFont",
        fontSize: "36px",
      })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on("pointerover", () => {
        chooseStageBTN.setTintFill("0xAAAAEE");//進入改色
      })
      .on("pointerout", () => {
        chooseStageBTN.setTintFill("0xFFFFFF");//出界改色
      })
      .on("pointerup", () => {
        console.log("start chooseStage scene");//放開左鍵進入chooseStage
        //this.scene.start("chooseStage");
      });

    //新增text"選擇關卡"作為按鈕
    let quitBTN = this.add
      .text(config.width / 2, config.height / 3 * 2, "結束遊戲", {
        fontFamily: "CustomFont",
        fontSize: "36px",
      })
      .setOrigin(0.5, 0.5)
      .setInteractive()
      .on("pointerover", () => {
        quitBTN.setTintFill("0xAAAAEE");//進入改色
      })
      .on("pointerout", () => {
        quitBTN.setTintFill("0xFFFFFF");//出界改色
      })
      .on("pointerup", () => {
        console.log("window.close()")
        //之後最好加個確定離開scene
        window.close();//放開左鍵關閉視窗
      });
  }

  update() {}
}
