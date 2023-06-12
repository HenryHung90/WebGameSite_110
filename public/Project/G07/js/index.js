const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  antialias: false,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  disableContextMenu: true,
  backgroundColor: "#999999",
  scene: [main_menu, pause_menu, stage1, stage2] //註冊scene
};

const game = new Phaser.Game(config);

game.scene.start("main_menu");