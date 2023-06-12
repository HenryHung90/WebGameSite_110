var bgMusic, play2Music, bossMusic;
var isBGMOn = false, isEffectOn = false;
var firstIn = true;
var isBagger, isStudent, isFrog = false;

var isTitleCreated = false;

/*升級及金幣數據*/
const baggerUpgrade = {
    attackLevel: 1,
    attack: 15,
    liveLevel: 1,
    live: 100,
    critLevel: 1,
    crit: 0,
    specialLevel: 1,
    special: 15
};
const studentUpgrade = {
    attackLevel: 1,
    attack: 10,
    liveLevel: 1,
    live: 100,
    critLevel: 1,
    crit: 0,
    specialLevel: 1,
    special: 15
};
const frogUpgrade = {
    attackLevel: 1,
    attack: 25,
    liveLevel: 1,
    live: 100,
    critLevel: 1,
    crit: 0.8,
    specialLevel: 1,
    special: 15
};

let thisLevel_coin = 0;
let total_coin = 0;

//-------------------------------------------------------------------以下未用
//怪物攻擊&動畫
window.enemyattackEvent = function (scene, attackEvent, character, enemy, attack, manblood, enemyblood) {
    attackEvent = scene.time.addEvent({
        delay: 2000,
        loop: true,
        callback: () => {
            startAttackEvent(attackEvent);
            // 怪物水平左移
            const originalX = enemy.x;
            const enemyMove = scene.tweens.add({
                targets: enemy,
                x: character.x,
                duration: 100,
                onComplete: () => {
                    // 等待 100 毫秒後執行向右移動的動畫
                    scene.time.delayedCall(100, () => {
                        const moveback = scene.tweens.add({
                            targets: enemy,
                            x: originalX,
                            duration: 100
                        });
                    });
                }
            });
            console.log(attackEvent.delay);
            // 判斷怪物和玩家是否重疊
            const distance = Phaser.Math.Distance.Between(character.x, character.y, enemy.x, enemy.y);
            const verticalDistance = Math.abs(character.y - enemy.y);

            if (distance < 900 && verticalDistance < 200 && parseInt(enemyblood.text, 10) > 0) {
                // 扣除玩家血量
                let currentManBlood = parseInt(manblood.text, 10);
                currentManBlood -= 30;
                manblood.setText(currentManBlood.toString());

                // 檢查玩家血量是否小於等於0
                if (currentManBlood <= 0) {
                    character.destroy();
                    attack.disableInteractive();
                    manblood.setText('');
                }
            } else if (parseInt(enemyblood.text, 10) <= 0) {
                attackEvent.remove();
            }

            if (this.isEnemyTouchingMan) {
                if (this.man) {
                    let currentManBlood = parseInt(this.manblood.text, 10);
                    currentManBlood -= 30;
                    this.manblood.setText(currentManBlood.toString());

                    // 檢查玩家血量是否小於等於0
                    if (currentManBlood <= 0) {
                        this.man.distroy();
                        this.attack.disableInteractive();
                        this.manblood.setText('');

                    }
                }

                // 將 isManTouchingEnemy 設置為 false
                this.isEnemyTouchingMan = false;
            }
        }
    })
};

//攻擊鍵
window.attackpointerdown = function (scene, canClick, character, enemy, isManTouchingEnemy) {
    if (canClick) {
        canClick = false;

        console.log(character.x / 2);
        console.log(character.y / 2);

        const originalX = character.x;
        // 設定 man 的移動動畫
        const moveRight = scene.tweens.add({
            targets: character,
            x: enemy.x,
            duration: 100,
            onComplete: () => {
                // 等待 100 毫秒後執行向左移動的動畫
                scene.time.delayedCall(100, () => {
                    const moveLeft = scene.tweens.add({
                        targets: character,
                        x: originalX,
                        duration: 100
                    });
                });
            }
        })

        scene.time.delayedCall(500, () => {
            canClick = true;
        })

        // 判斷 man 和 enemy 重疊
        const distance = Phaser.Math.Distance.Between(character.x, character.y, enemy.x, enemy.y);
        if (distance < 900) {
            // 如果 man 和 enemy 重疊，就設定 isManTouchingEnemy 為 true
            isManTouchingEnemy = true;
        } else {
            // 否則設定為 false
            isManTouchingEnemy = false;
        }
    }
};
//上移動
window.uppbuttonpointerdown = function (scene, canClick, character) {
    if (canClick) {
        canClick = false;

        const originalY = character.y;
        // 設定 man 的移動動畫
        const moveUp = scene.tweens.add({
            targets: character,
            y: character.y - 200,
            duration: 100,
            onComplete: () => {
                // 等待 100 毫秒後執行向左移動的動畫
                scene.time.delayedCall(300, () => {
                    const moveUp = scene.tweens.add({
                        targets: character,
                        y: originalY,
                        duration: 100
                    });
                });
            }
        })
        scene.time.delayedCall(500, () => {
            canClick = true;
        })
    }
};
//下移動
window.downbuttonpointerdown = function (scene, canClick, character) {
    if (canClick) {
        canClick = false;

        const originalY = character.y;
        // 設定 man 的移動動畫
        const moveUp = scene.tweens.add({
            targets: character,
            y: character.y + 200,
            duration: 100,
            onComplete: () => {
                // 等待 100 毫秒後執行向左移動的動畫
                scene.time.delayedCall(300, () => {
                    const moveUp = scene.tweens.add({
                        targets: character,
                        y: originalY,
                        duration: 100
                    });
                });
            }
        })
        scene.time.delayedCall(500, () => {
            canClick = true;
        })
    }
};
//左移動
window.leftbuttonpointerdown = function (scene, canClick, character) {
    if (canClick) {
        canClick = false;

        const originalx = character.x;
        // 設定 man 的移動動畫
        const moveUp = scene.tweens.add({
            targets: character,
            x: character.x - 200,
            duration: 100,
            onComplete: () => {
                // 等待 100 毫秒後執行向左移動的動畫
                scene.time.delayedCall(300, () => {
                    const moveUp = scene.tweens.add({
                        targets: character,
                        x: originalx,
                        duration: 100
                    });
                });
            }
        })
        scene.time.delayedCall(500, () => {
            canClick = true;
        })
    }
};
//// (update)  如果 isManTouchingEnemy 為 true，就發生某些功能
window.ifisManTouchingEnemy = function (isManTouchingEnemy, enemy, enemyblood, attack, isEnemyTouchingMan, character, manblood) {
    if (isManTouchingEnemy) {
        console.log("成功!");
        if (enemy) {
            let currentEnemyBlood = parseInt(enemyblood.text, 10);
            currentEnemyBlood -= 20;
            // console.log("目前怪物血量:"+currentEnemyBlood);
            enemyblood.setText(currentEnemyBlood.toString());

            // 檢查怪物血量是否小於等於0
            if (currentEnemyBlood <= 0) {
                // console.log('win!!');
                enemy.destroy();
                attack.disableInteractive();
                enemyblood.setText('');
            }
        }
        // manblood.setText('100');
        // 將 isManTouchingEnemy 設置為 false
        isManTouchingEnemy = false;
    } else {
        console.log("失敗!");
    }

    if (isEnemyTouchingMan) {
        if (character) {
            let currentManBlood = parseInt(manblood.text, 10);
            currentManBlood -= 30;
            manblood.setText(currentManBlood.toString());

            // 檢查玩家血量是否小於等於0
            if (currentManBlood <= 0) {
                character.destroy();
                attack.disableInteractive();
                manblood.setText('');

            }
        }

        // 將 isManTouchingEnemy 設置為 false
        isEnemyTouchingMan = false;
    }
};

//判斷是否有產生暴擊
window.isCritical = function (criticalRate) {
    //隨機生成0到1的數字
    var randomNum = Math.random();
    console.log("目前暴擊率為 : " + criticalRate);
    console.log("所產生的隨機數字為" + randomNum);

    // 判斷隨機數字有沒有小於暴擊率，小於的話就產生暴擊，大於的話就沒有
    if (randomNum < criticalRate) {
        console.log("產生暴擊");
        return true;
    }
    else return false;
};
