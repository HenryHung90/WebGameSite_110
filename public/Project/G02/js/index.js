const config = {
    type: Phaser.AUTO,
    width: cw,
    height: ch,
    parent: 'Game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 850
            },
            // debug: true,
        },
    },
    scene: [
        gameStart,
        gamePlay,
        Level2,
        Level3,
    ]
}

const game = new Phaser.Game(config);