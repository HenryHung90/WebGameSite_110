// import('./common.js');
// import {aa} from './common.js';
class baggerScene extends Phaser.Scene {
    constructor() {
        super({ key: "baggerScene" });
        this.isManTouchingEnemy = false;
        this.isManTouchingEnemy2 = false;
        this.isManTouchingEnemy3 = false;
        this.isEnemyTouchingMan = false;
        this.isEnemyTouchingMan2 = false;
        this.isEnemyTouchingMan3 = false;
        this.isEnemyDie = false;
        this.man;
        this.enemy1;
        this.enemy2;
        this.enemy3;
        this.enemyblood;
        // this.enemyblood2;
        // this.enemyblood3;
        this.manblood;
        this.attack;
        this.coin;
        this.coinText;
        this.picture = true;
        this.dodgeText;
        let enemyAttackHint;
        // 在函數外宣告一個空陣列用於存儲隨機值
        this.randomValues = [];
        this.i = 0;
    }


    preload() {
        this.load.image('bagger_bg', './assets/bagger/bagger_bg.jpg')
        this.load.image('man', './assets/bagger/man.png')
        this.load.image('bagger_enemy1', './assets/bagger/bagger_enemy1.png')
        this.load.image('bagger_enemy2', './assets/bagger/bagger_enemy2.png')
        this.load.image('bagger_enemy3', './assets/bagger/bagger_enemy3.png')
        this.load.image('left_btn', './assets/btn/left_btn.png')
        this.load.image('attack_btn', './assets/btn/attack_btn.png')
        this.load.image('enemyattackhint', './assets/bagger/left_arrow.jpg');
        this.load.image('coin', './assets/bagger/coin.png');
        this.load.image('healing', './assets/bagger/healing.png')
        this.load.audio('bagger_hit', './assets/audio/bagger.mp3')
        this.load.audio('bagger_enemy1_hit', './assets/audio/bagger_enemy1.mp3')
        this.load.audio('bagger_enemy2_hit', './assets/audio/bagger_enemy2.mp3')
        this.load.audio('bagger_enemy3_hit', './assets/audio/bagger_enemy3.mp3')
        this.load.audio('play2', './assets/audio/play2.mp3')
        this.load.audio('boss', './assets/audio/boss.mp3')
    }

    createEnemy2() {

        let attackMode;
        this.enemy3 = this.add.image((this.cameras.main.width / 2) + 400,
            this.cameras.main.height / 2, 'bagger_enemy3').setScale(0.5);
        this.enemyblood3 = this.add.text(this.enemy3.x, this.enemy3.y - 120, '600',
            { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);

        let bagger_hit = this.sound.add('bagger_hit', {
            volume: 1,
            loop: false
        });
        let bagger_enemy3_hit = this.sound.add('bagger_enemy3_hit', {
            volume: 1,
            loop: false
        });

        this.picture3 = true;

        let attackEvent3;

        let hasFlashed = true;

        this.hasEnemy3CausedDamage = false;
        this.hasDodgedEnemy3 = false;
        this.isEnemyAttacking = false;

        this.cameras.main.setBounds(0, 0, 1200, 800);
        this.shake = this.cameras.add(0, 0, 1200, 800);
        this.shake.shakeEffect.start(1500, 0.05);


        this.enemy3AttackHint = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'enemyattackhint').setScale(0.2);
        this.enemy3AttackHint.setVisible(false);
        this.enemy3AttackHint2 = this.add.image(this.cameras.main.width / 2, (this.cameras.main.height / 2) + 200, 'enemyattackhint').setScale(0.2);
        this.enemy3AttackHint2.setVisible(false);
        this.enemy3AttackHint3 = this.add.image(this.cameras.main.width / 2, (this.cameras.main.height / 2) - 200, 'enemyattackhint').setScale(0.2);
        this.enemy3AttackHint3.setVisible(false);
        this.enemy3AttackHint4 = this.add.image(this.cameras.main.width / 2, (this.cameras.main.height / 2), 'enemyattackhint').setScale(0.2);
        this.enemy3AttackHint4.setVisible(false);
        this.enemy3AttackHint4.setAngle(45);
        this.enemy3AttackHint5 = this.add.image(this.cameras.main.width / 2, (this.cameras.main.height / 2), 'enemyattackhint').setScale(0.2);
        this.enemy3AttackHint5.setVisible(false);
        this.enemy3AttackHint5.setAngle(-45);

        function startAttackEvent3() {
            const randomDelay = Phaser.Math.Between(3000, 4500);
            attackEvent3.delay = randomDelay; // 更新attackEvent的delay属性
        }

        let self = this;
        function enemy3attackMode() {
            attackMode = Phaser.Math.Between(1, 4);

            // 儲存隨機值到陣列中
            self.randomValues.push(attackMode); // Use 'self' instead of 'this'
        }

        // if (!hasFlashed) {
        //     // 在攻擊前0.5秒閃爍enemy2attackhint圖片
        //     const flashDelay = 1500;
        //     this.time.delayedCall(flashDelay, () => {
        //         this.enemy3AttackHint.setVisible(true);
        //         this.time.delayedCall(500, () => {
        //             this.enemy3AttackHint.setVisible(false);
        //         });
        //     });
        //     this.time.delayedCall(flashDelay, () => {
        //         this.enemy2AttackHint3.setVisible(true);
        //         this.time.delayedCall(500, () => {
        //             this.enemy2AttackHint3.setVisible(false);
        //         });
        //     });


        //     hasFlashed = true; // 設置已經閃爍過
        // }

        //怪物攻擊&動畫
        attackEvent3 = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {

                this.isAttacked = false;
                this.isEnemyAttacking = true;
                startAttackEvent3();
                enemy3attackMode();

                if (this.picture3) {
                    // 在攻擊前0.5秒閃爍enemy3attackhint圖片
                    const flashDelay3 = attackEvent3.delay - 500;
                    const attackDelay = 700; // 攻擊延遲時間

                    if (this.randomValues[this.i] == 1) {
                        // 由上至中的攻击
                        // 在攻擊前0.5秒閃爍enemy3attackhint圖片
                        if (flashDelay3 > 0) {
                            this.time.delayedCall(-1000, () => {
                                this.enemy3AttackHint3.setVisible(true);
                                this.time.delayedCall(500, () => {
                                    this.enemy3AttackHint3.setVisible(false);
                                });
                            });

                            hasFlashed = false;
                        }
                        if (flashDelay3 > 0) {
                            this.time.delayedCall(-1000, () => {
                                this.enemy3AttackHint.setVisible(true);
                                this.time.delayedCall(500, () => {
                                    this.enemy3AttackHint.setVisible(false);
                                });
                            });

                            hasFlashed = false;
                        }

                        this.i++;

                        if (!hasFlashed) {
                            this.time.delayedCall(attackDelay, () => {
                                // 由上至中的攻击
                                const move1 = this.tweens.add({
                                    targets: this.enemy3,
                                    y: 250,
                                    duration: 100,
                                    onUpdate: () => {
                                        // 在 enemy3 的移动过程中进行碰撞检测
                                        const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy3.x, this.enemy3.y);
                                        const verticalDistance = Math.abs(this.man.y - this.enemy3.y);
                                        if (distance < 1000 && verticalDistance < 200 && this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
                                            if (!this.hasEnemy3CausedDamage) {
                                                let currentManBlood = parseInt(this.manblood.text, 10);
                                                currentManBlood -= 40;
                                                this.manblood.setText(currentManBlood.toString());


                                                thisLevel_coin = parseInt(this.coinText.text);
                                                console.log(thisLevel_coin);

                                                if (currentManBlood <= 0) {
                                                    this.man.destroy();
                                                    this.attack.disableInteractive();
                                                    this.manblood.setText('');

                                                    thisLevel_coin = parseInt(this.coinText.text);
                                                    console.log(thisLevel_coin);
                                                    setTimeout(() => {
                                                        play2Music.stop();
                                                        bossMusic.stop();
                                                        this.scene.start('gameoverScene');
                                                    }, 1000)
                                                }
                                                this.hasEnemy3CausedDamage = true;
                                                this.isAttacked = true; // 新添加的代碼
                                            }
                                        }

                                    },
                                    onComplete: () => {
                                        if (isEffectOn == true) bagger_enemy3_hit.play();
                                        this.time.delayedCall(100, () => {
                                            const moveBack1 = this.tweens.add({
                                                targets: this.enemy3,
                                                x: 100,
                                                duration: 100,
                                                onComplete: () => {
                                                    this.time.delayedCall(100, () => {
                                                        const moveBack1 = this.tweens.add({
                                                            targets: this.enemy3,
                                                            x: 1000,
                                                            y: 400,
                                                            duration: 100
                                                        });

                                                    });
                                                }
                                            });
                                        });
                                        this.hasEnemy3CausedDamage = false;
                                        this.hasDodgedEnemy3 = false;

                                        if (this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0 && !this.isAttacked) {
                                            let dodgekings = parseInt(this.dodgeText.text, 10); // 未被攻击时增加dodgeking
                                            if (!this.hasDodgedEnemy3 && dodgekings < 200) {
                                                dodgekings += Phaser.Math.Between(20, 30);
                                                if (dodgekings > 200) {
                                                    dodgekings = 200;
                                                }
                                                this.dodgeText.setText(dodgekings.toString());
                                                this.hasDodgedEnemy3 = true;
                                            }
                                        }
                                        this.isAttacked = false; // 新添加的代碼
                                    }
                                });
                            });
                            hasFlashed = true;

                        }


                    }
                    else if (this.randomValues[this.i] == 2) {
                        // 由下至中的攻击
                        // 在攻擊前0.5秒閃爍enemy3attackhint圖片
                        if (flashDelay3 > 0) {
                            this.time.delayedCall(-1000, () => {
                                this.enemy3AttackHint2.setVisible(true);
                                this.time.delayedCall(500, () => {
                                    this.enemy3AttackHint2.setVisible(false);
                                });
                            });
                            hasFlashed = false;
                        }
                        if (flashDelay3 > 0) {
                            this.time.delayedCall(-1000, () => {
                                this.enemy3AttackHint.setVisible(true);
                                this.time.delayedCall(500, () => {
                                    this.enemy3AttackHint.setVisible(false);
                                });
                            });
                            hasFlashed = false;
                        }
                        this.i++;


                        if (!hasFlashed) {
                            this.time.delayedCall(attackDelay, () => {
                                // 由下至中的攻击
                                const move2 = this.tweens.add({
                                    targets: this.enemy3,
                                    y: 550,
                                    duration: 100,
                                    onUpdate: () => {
                                        // 在 enemy3 的移动过程中进行碰撞检测
                                        const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy3.x, this.enemy3.y);
                                        const verticalDistance = Math.abs(this.man.y - this.enemy3.y);
                                        if (distance < 1000 && verticalDistance < 200 && this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
                                            if (!this.hasEnemy3CausedDamage) {
                                                let currentManBlood = parseInt(this.manblood.text, 10);
                                                currentManBlood -= 40;
                                                this.manblood.setText(currentManBlood.toString());



                                                thisLevel_coin = parseInt(this.coinText.text);
                                                console.log(thisLevel_coin);

                                                if (currentManBlood <= 0) {
                                                    this.man.destroy();
                                                    this.attack.disableInteractive();
                                                    this.manblood.setText('');

                                                    thisLevel_coin = parseInt(this.coinText.text);
                                                    console.log(thisLevel_coin);
                                                    setTimeout(() => {
                                                        play2Music.stop();
                                                        bossMusic.stop();
                                                        this.scene.start('gameoverScene');
                                                    }, 1000)
                                                }
                                                this.hasEnemy3CausedDamage = true;
                                                this.isAttacked = true; // 新添加的代碼
                                            }
                                        }

                                    },
                                    onComplete: () => {
                                        this.time.delayedCall(100, () => {
                                            const moveBack2 = this.tweens.add({
                                                targets: this.enemy3,
                                                x: 100,
                                                duration: 100,
                                                onComplete: () => {
                                                    if (isEffectOn == true) bagger_enemy3_hit.play();
                                                    this.time.delayedCall(100, () => {
                                                        const moveBack2 = this.tweens.add({
                                                            targets: this.enemy3,
                                                            x: 1000,
                                                            y: 400,
                                                            duration: 100
                                                        });
                                                    });
                                                }
                                            });
                                        });
                                        this.hasEnemy3CausedDamage = false;
                                        this.hasDodgedEnemy3 = false;

                                        if (this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0 && !this.isAttacked) {
                                            let dodgekings = parseInt(this.dodgeText.text, 10); // 未被攻击时增加dodgeking
                                            if (!this.hasDodgedEnemy3 && dodgekings < 200) {
                                                dodgekings += Phaser.Math.Between(20, 30);
                                                if (dodgekings > 200) {
                                                    dodgekings = 200;
                                                }
                                                this.dodgeText.setText(dodgekings.toString());
                                                this.hasDodgedEnemy3 = true;
                                            }
                                        }
                                        this.isAttacked = false; // 新添加的代碼
                                    }

                                });
                            });
                            hasFlashed = true;
                        }

                        //     // 由下至中的攻击
                        // const move2 = this.tweens.add({
                        //     targets: this.enemy3,
                        //     y: 550,
                        //     duration: 100,
                        //     onComplete: () => {
                        //         this.time.delayedCall(100, () => {
                        //             const moveBack2 = this.tweens.add({
                        //                 targets: this.enemy3,
                        //                 x: 200,
                        //                 duration: 100,
                        //                 onComplete: () => {
                        //                     this.time.delayedCall(100, () => {
                        //                         const moveBack2 = this.tweens.add({
                        //                             targets: this.enemy3,
                        //                             x: 1000,
                        //                             y: 400,
                        //                             duration: 100
                        //                         });
                        //                     });
                        //                 }
                        //             });
                        //         });
                        //     }
                        // });
                    }
                    else if (this.randomValues[this.i] == 3) {
                        // 由下至上的攻击
                        // 在攻擊前0.5秒閃爍enemy3attackhint圖片
                        if (flashDelay3 > 0) {
                            this.time.delayedCall(-1000, () => {
                                this.enemy3AttackHint4.setVisible(true);
                                this.time.delayedCall(500, () => {
                                    this.enemy3AttackHint4.setVisible(false);
                                });
                            });
                            hasFlashed = false;
                        }
                        this.i++;


                        if (!hasFlashed) {
                            this.time.delayedCall(attackDelay, () => {
                                // 由下至上的攻击
                                const move3 = this.tweens.add({
                                    targets: this.enemy3,
                                    x: 1100,
                                    y: 600,
                                    duration: 100,
                                    onUpdate: () => {
                                        // 在 enemy3 的移动过程中进行碰撞检测
                                        const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy3.x, this.enemy3.y);
                                        const verticalDistance = Math.abs(this.man.y - this.enemy3.y);
                                        if (distance < 1000 && verticalDistance < 100 && this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
                                            if (this.isEnemyAttacking && !this.hasEnemy3CausedDamage) {

                                                
                                                let currentManBlood = parseInt(this.manblood.text, 10);
                                                currentManBlood -= 40;
                                                this.manblood.setText(currentManBlood.toString());


                                                thisLevel_coin = parseInt(this.coinText.text);
                                                console.log(thisLevel_coin);

                                                if (currentManBlood <= 0) {
                                                    this.man.destroy();
                                                    this.attack.disableInteractive();
                                                    this.manblood.setText('');

                                                    thisLevel_coin = parseInt(this.coinText.text);
                                                    console.log(thisLevel_coin);
                                                    
                                                    setTimeout(() => {
                                                        play2Music.stop();
                                                        bossMusic.stop();
                                                        this.scene.start('gameoverScene');
                                                    }, 1000)
                                                }
                                                this.hasEnemy3CausedDamage = true;
                                                this.isAttacked = true; // 新添加的代碼
                                            }
                                        }

                                    },
                                    onComplete: () => {
                                        if (isEffectOn == true) bagger_enemy3_hit.play();
                                        this.time.delayedCall(100, () => {
                                            const moveBack3 = this.tweens.add({
                                                targets: this.enemy3,
                                                x: 100,
                                                y: 200,
                                                duration: 100,
                                                onComplete: () => {
                                                    if (isEffectOn == true) bagger_enemy3_hit.play();
                                                    this.time.delayedCall(100, () => {
                                                        const moveBack2 = this.tweens.add({
                                                            targets: this.enemy3,
                                                            x: 1000,
                                                            y: 400,
                                                            duration: 100
                                                        });
                                                    });
                                                }
                                            });
                                        });
                                        this.hasEnemy3CausedDamage = false;
                                        this.hasDodgedEnemy3 = false;
                                        this.isEnemyAttacking = false;

                                        if (this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0 && !this.isAttacked) {
                                            let dodgekings = parseInt(this.dodgeText.text, 10); // 未被攻击时增加dodgeking
                                            if (!this.hasDodgedEnemy3 && dodgekings < 200) {
                                                dodgekings += Phaser.Math.Between(20, 30);
                                                if (dodgekings > 200) {
                                                    dodgekings = 200;
                                                }
                                                this.dodgeText.setText(dodgekings.toString());
                                                this.hasDodgedEnemy3 = true;
                                            }
                                        }
                                        this.isAttacked = false; // 新添加的代碼

                                    }
                                });
                                hasFlashed = true;
                            });
                        }

                        //      // 由下至上的攻击
                        // const move3 = this.tweens.add({
                        //     targets: this.enemy3,
                        //     x: 200,
                        //     y: 250,
                        //     duration: 100,
                        //     onComplete: () => {
                        //         this.time.delayedCall(100, () => {
                        //             const moveBack3 = this.tweens.add({
                        //                 targets: this.enemy3,
                        //                 x: 1000,
                        //                 y: 400,
                        //                 duration: 100
                        //             });
                        //         });
                        //     }
                        // });
                    }
                    else if (this.randomValues[this.i] == 4) {
                        // 由下至上的攻击
                        // 在攻擊前0.5秒閃爍enemy3attackhint圖片
                        if (flashDelay3 > 0) {
                            this.time.delayedCall(-1000, () => {
                                this.enemy3AttackHint5.setVisible(true);
                                this.time.delayedCall(500, () => {
                                    this.enemy3AttackHint5.setVisible(false);
                                });
                            });
                            hasFlashed = false;
                        }
                        this.i++;


                        if (!hasFlashed) {
                            this.time.delayedCall(attackDelay, () => {
                                // 由下至上的攻击
                                const move4 = this.tweens.add({
                                    targets: this.enemy3,
                                    x: 1100,
                                    y: 200,
                                    duration: 100,
                                    onUpdate: () => {
                                        // 在 enemy3 的移动过程中进行碰撞检测
                                        const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy3.x, this.enemy3.y);
                                        const verticalDistance = Math.abs(this.man.y - this.enemy3.y);
                                        if (distance < 1000 && verticalDistance < 100 && this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
                                            if (!this.hasEnemy3CausedDamage) {
                                                let currentManBlood = parseInt(this.manblood.text, 10);
                                                currentManBlood -= 40;
                                                this.manblood.setText(currentManBlood.toString());


                                                thisLevel_coin = parseInt(this.coinText.text);
                                                console.log(thisLevel_coin);

                                                if (currentManBlood <= 0) {
                                                    this.man.destroy();
                                                    this.attack.disableInteractive();
                                                    this.manblood.setText('');

                                                    thisLevel_coin = parseInt(this.coinText.text);
                                                    console.log(thisLevel_coin);
                                                    setTimeout(() => {
                                                        play2Music.stop();
                                                        bossMusic.stop();
                                                        this.scene.start('gameoverScene');
                                                    }, 1000)
                                                }
                                                this.hasEnemy3CausedDamage = true;
                                                this.isAttacked = true; // 新添加的代碼
                                            }
                                        }

                                    },
                                    onComplete: () => {
                                        if (isEffectOn == true) bagger_enemy3_hit.play();
                                        this.time.delayedCall(100, () => {
                                            const moveBack4 = this.tweens.add({
                                                targets: this.enemy3,
                                                x: 200,
                                                y: 550,
                                                duration: 100,
                                                onComplete: () => {
                                                    if (isEffectOn == true) bagger_enemy3_hit.play();
                                                    this.time.delayedCall(100, () => {
                                                        const moveBack4 = this.tweens.add({
                                                            targets: this.enemy3,
                                                            x: 1000,
                                                            y: 400,
                                                            duration: 100
                                                        });
                                                    });
                                                }
                                            });
                                        });
                                        this.hasEnemy3CausedDamage = false;
                                        this.hasDodgedEnemy3 = false;

                                        if (this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0 && !this.isAttacked) {
                                            let dodgekings = parseInt(this.dodgeText.text, 10); // 未被攻击时增加dodgeking
                                            if (!this.hasDodgedEnemy3 && dodgekings < 200) {
                                                dodgekings += Phaser.Math.Between(20, 30);
                                                if (dodgekings > 200) {
                                                    dodgekings = 200;
                                                }
                                                this.dodgeText.setText(dodgekings.toString());
                                                this.hasDodgedEnemy3 = true;
                                            }
                                        }
                                        this.isAttacked = false; // 新添加的代碼
                                    }
                                });
                            });
                            hasFlashed = true;
                        }


                        //         // 由下至上的攻击
                        // const move4 = this.tweens.add({
                        //     targets: this.enemy3,
                        //     x: 200,
                        //     y: 550,
                        //     duration: 100,
                        //     onComplete: () => {
                        //         this.time.delayedCall(100, () => {
                        //             const moveBack4 = this.tweens.add({
                        //                 targets: this.enemy3,
                        //                 x: 1000,
                        //                 y: 400,
                        //                 duration: 100
                        //             });
                        //         });
                        //     }
                        // });
                    }





                }



                // switch (attackMode) {
                //     case 1:
                //         // 由上至中的攻击
                //         const move1 = this.tweens.add({
                //             targets: this.enemy3,
                //             y: 250,
                //             duration: 100,
                //             onComplete: () => {
                //                 this.time.delayedCall(100, () => {
                //                     const moveBack1 = this.tweens.add({
                //                         targets: this.enemy3,
                //                         x: 200,
                //                         duration: 100,
                //                         onComplete: () => {
                //                             this.time.delayedCall(100, () => {
                //                                 const moveBack1 = this.tweens.add({
                //                                     targets: this.enemy3,
                //                                     x: 1000,
                //                                     y: 400,
                //                                     duration: 100
                //                                 });
                //                             });
                //                         }
                //                     });
                //                 });
                //             }
                //         });
                //         break;
                //     case 2:
                //         // 由下至中的攻击
                //         const move2 = this.tweens.add({
                //             targets: this.enemy3,
                //             y: 550,
                //             duration: 100,
                //             onComplete: () => {
                //                 this.time.delayedCall(100, () => {
                //                     const moveBack2 = this.tweens.add({
                //                         targets: this.enemy3,
                //                         x: 200,
                //                         duration: 100,
                //                         onComplete: () => {
                //                             this.time.delayedCall(100, () => {
                //                                 const moveBack2 = this.tweens.add({
                //                                     targets: this.enemy3,
                //                                     x: 1000,
                //                                     y: 400,
                //                                     duration: 100
                //                                 });
                //                             });
                //                         }
                //                     });
                //                 });
                //             }
                //         });
                //         break;
                //     case 3:
                //         // 由下至上的攻击
                //         const move3 = this.tweens.add({
                //             targets: this.enemy3,
                //             x: 200,
                //             y: 250,
                //             duration: 100,
                //             onComplete: () => {
                //                 this.time.delayedCall(100, () => {
                //                     const moveBack3 = this.tweens.add({
                //                         targets: this.enemy3,
                //                         x: 1000,
                //                         y: 400,
                //                         duration: 100
                //                     });
                //                 });
                //             }
                //         });
                //         break;
                //     case 4:
                //         // 由下至上的攻击
                //         const move4 = this.tweens.add({
                //             targets: this.enemy3,
                //             x: 200,
                //             y: 550,
                //             duration: 100,
                //             onComplete: () => {
                //                 this.time.delayedCall(100, () => {
                //                     const moveBack4 = this.tweens.add({
                //                         targets: this.enemy3,
                //                         x: 1000,
                //                         y: 400,
                //                         duration: 100
                //                     });
                //                 });
                //             }
                //         });
                //         break;
                // }
                // 攻击范围判断部分
                // if (this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
                //     bagger_enemy3_hit.play();
                // }
                console.log("-----");
                console.log(this.man.x);
                console.log(this.man.y);
                console.log(this.enemy3.x);
                console.log(this.enemy3.y);
                console.log("-----");

                // const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy3.x, this.enemy3.y);
                // const verticalDistance = Math.abs(this.man.y - this.enemy3.y);
                // if (distance < 50 && verticalDistance < 50 && this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
                //     // this.isEnemyTouchingMan3 = true;
                // }
                // else {
                //     this.isEnemyTouchingMan3 = false;

                //     if (this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
                //         let dodgekings = parseInt(this.dodgeText.text, 10); // 未被攻击时增加dodgeking
                //         if (dodgekings < 200) {
                //             dodgekings += Phaser.Math.Between(20, 30);
                //             if (dodgekings > 200) {
                //                 dodgekings = 200;
                //             }
                //             this.dodgeText.setText(dodgekings.toString());
                //         }
                //     }

                // }

                this.attack.setInteractive();
                let canClick = true;
                this.attack.on('pointerdown', () => {
                    if (canClick) {
                        canClick = false;

                        // 設定 man 的移動動畫
                        const moveRight = this.tweens.add({
                            targets: this.man,
                            x: 1000,
                            duration: 100,
                            onComplete: () => {
                                // 等待 100 毫秒後執行向左移動的動畫
                                this.time.delayedCall(100, () => {
                                    const moveLeft = this.tweens.add({
                                        targets: this.man,
                                        x: 200,
                                        duration: 100
                                    });
                                });
                            }
                        })
                        if (isEffectOn == true) bagger_hit.play();

                        this.time.delayedCall(500, () => {
                            canClick = true;
                        })

                        // 判斷 man 和 enemy 重疊
                        const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy3.x, this.enemy3.y);
                        const verticalDistance = Math.abs(this.man.y - this.enemy3.y);

                        if (distance < 900 && verticalDistance < 200 && parseInt(this.manblood.text, 10) > 0) {
                            // 如果 man 和 enemy 重疊，就設定 isManTouchingEnemy2 為 true

                            this.isManTouchingEnemy3 = true;
                        } else {
                            // 否則設定為 false
                            this.isManTouchingEnemy3 = false;
                        }
                    }
                });
            }
        });
    }




    createEnemy() {
        this.enemy2 = this.add.image((this.cameras.main.width / 2) + 400,
            this.cameras.main.height / 2, 'bagger_enemy2').setScale(1.3);
        this.enemyblood2 = this.add.text(this.enemy2.x, this.enemy2.y - 120, '200',
            { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);

        let bagger_hit = this.sound.add('bagger_hit', {
            volume: 1,
            loop: false
        });
        let bagger_enemy2_hit = this.sound.add('bagger_enemy2_hit', {
            volume: 1,
            loop: false
        });

        this.picture2 = true;

        let attackEvent2;

        let hasFlashed = false;

        this.enemy2AttackHint = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'enemyattackhint').setScale(0.2);
        this.enemy2AttackHint.setVisible(false);
        this.enemy2AttackHint2 = this.add.image(this.cameras.main.width / 2, (this.cameras.main.height / 2) + 200, 'enemyattackhint').setScale(0.2);
        this.enemy2AttackHint2.setVisible(false);
        this.enemy2AttackHint3 = this.add.image(this.cameras.main.width / 2, (this.cameras.main.height / 2) - 200, 'enemyattackhint').setScale(0.2);
        this.enemy2AttackHint3.setVisible(false);

        function startAttackEvent2() {
            const randomDelay = Phaser.Math.Between(2000, 5000);
            attackEvent2.delay = randomDelay; // 更新attackEvent的delay属性
        }

        if (!hasFlashed) {
            // 在攻擊前0.5秒閃爍enemy2attackhint圖片
            const flashDelay1 = 1500;
            this.time.delayedCall(flashDelay1, () => {
                this.enemy2AttackHint.setVisible(true);
                this.time.delayedCall(500, () => {
                    this.enemy2AttackHint.setVisible(false);
                });
            });
            this.time.delayedCall(flashDelay1, () => {
                this.enemy2AttackHint2.setVisible(true);
                this.time.delayedCall(500, () => {
                    this.enemy2AttackHint2.setVisible(false);
                });
            });
            this.time.delayedCall(flashDelay1, () => {
                this.enemy2AttackHint3.setVisible(true);
                this.time.delayedCall(500, () => {
                    this.enemy2AttackHint3.setVisible(false);
                });
            });


            hasFlashed = true; // 設置已經閃爍過
        }


        //怪物攻擊&動畫
        attackEvent2 = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {

                startAttackEvent2();

                if (this.picture2) {
                    console.log('win!!');
                    // 在攻擊前0.5秒閃爍enemy2attackhint圖片
                    const flashDelay = attackEvent2.delay - 500;
                    if (flashDelay > 0) {
                        this.time.delayedCall(flashDelay, () => {
                            this.enemy2AttackHint.setVisible(true);
                            this.time.delayedCall(500, () => {
                                this.enemy2AttackHint.setVisible(false);
                            });
                        });
                    }
                    // 在攻擊前0.5秒閃爍enemyattackhint圖片

                    if (flashDelay > 0) {
                        this.time.delayedCall(flashDelay, () => {
                            this.enemy2AttackHint2.setVisible(true);
                            this.time.delayedCall(500, () => {
                                this.enemy2AttackHint2.setVisible(false);
                            });
                        });
                    }
                    // 在攻擊前0.5秒閃爍enemyattackhint圖片

                    if (flashDelay > 0) {
                        this.time.delayedCall(flashDelay, () => {
                            this.enemy2AttackHint3.setVisible(true);
                            this.time.delayedCall(500, () => {
                                this.enemy2AttackHint3.setVisible(false);
                            });
                        });
                    }
                }



                // 怪物水平左移
                const enemyMove = this.tweens.add({
                    targets: this.enemy2,
                    x: 200,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向右移動的動畫
                        this.time.delayedCall(100, () => {
                            const moveback = this.tweens.add({
                                targets: this.enemy2,
                                x: 1000,
                                duration: 100
                            });
                        });
                    }
                });

                if (this.enemyblood2 && parseInt(this.enemyblood2.text, 10) > 0 && isEffectOn == true) {
                    bagger_enemy2_hit.play();
                }


                const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy2.x, this.enemy2.y);
                const verticalDistance = Math.abs(this.man.y - this.enemy2.y);
                if (distance < 900 && verticalDistance < 500 && this.enemyblood2 && parseInt(this.enemyblood2.text, 10) > 0) {
                    this.isEnemyTouchingMan2 = true;
                }
                else {
                    this.isEnemyTouchingMan2 = false;

                    if (this.enemyblood2 && parseInt(this.enemyblood2.text, 10) > 0) {
                        let dodgekings = parseInt(this.dodgeText.text, 10); // 未被攻击时增加dodgeking
                        if (dodgekings < 200) {
                            dodgekings += Phaser.Math.Between(20, 30);
                            if (dodgekings > 200) {
                                dodgekings = 200;
                            }
                            this.dodgeText.setText(dodgekings.toString());
                        }
                    }

                }
            }
        });
        this.attack.setInteractive();
        let canClick = true;
        this.attack.on('pointerdown', () => {
            if (canClick) {
                canClick = false;

                console.log(this.man.x / 2);
                console.log(this.man.y / 2);

                // 設定 man 的移動動畫
                const moveRight = this.tweens.add({
                    targets: this.man,
                    x: 1000,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向左移動的動畫
                        this.time.delayedCall(100, () => {
                            const moveLeft = this.tweens.add({
                                targets: this.man,
                                x: 200,
                                duration: 100
                            });
                        });
                    }
                })
                if (isEffectOn == true) bagger_hit.play();

                this.time.delayedCall(500, () => {
                    canClick = true;
                })

                // 判斷 man 和 enemy 重疊
                const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy2.x, this.enemy2.y);
                const verticalDistance = Math.abs(this.man.y - this.enemy2.y);

                if (distance < 900 && verticalDistance < 200 && parseInt(this.manblood.text, 10) > 0) {
                    // 如果 man 和 enemy 重疊，就設定 isManTouchingEnemy2 為 true

                    this.isManTouchingEnemy2 = true;
                } else {
                    // 否則設定為 false
                    this.isManTouchingEnemy2 = false;
                }
            }
        });
    }


    create() {

        thisLevel_coin = 0;

        const bg = this.add.image(this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'bagger_bg').setScale(1);
        this.attack = this.add.image((this.cameras.main.width / 2) + 220,
            this.cameras.main.height / 2 + 250, 'attack_btn').setScale(0.2);
        this.enemy1 = this.add.image((this.cameras.main.width / 2) + 400,
            this.cameras.main.height / 2, 'bagger_enemy1').setScale(0.5);
        this.enemyblood = this.add.text(this.enemy1.x, this.enemy1.y - 120, '100',
            { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);
        this.man = this.add.image((this.cameras.main.width / 2) - 400,
            this.cameras.main.height / 2, 'man').setScale(0.7);
        this.manblood = this.add.text(this.man.x, this.man.y - 120, baggerUpgrade.live,
            { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);
        const leftbutton = this.add.image((this.cameras.main.width / 2) - 230,
            (this.cameras.main.height / 2) + 260,
            'left_btn').setScale(0.2);
        const upbutton = this.add.image((this.cameras.main.width / 2) - 140,
            (this.cameras.main.height / 2) + 200,
            'left_btn').setScale(0.2).setAngle(90).setInteractive();
        const downbutton = this.add.image((this.cameras.main.width / 2) - 140,
            (this.cameras.main.height / 2) + 320,
            'left_btn').setScale(0.2).setAngle(-90).setInteractive();
        this.coin = this.add.image(100, 50, 'coin').setScale(0.1);
        this.coinText = this.add.text(150, 35, '0', { fontSize: '32px', fill: '#ffffff' });
        this.dodgeText = this.add.text(600, 80, '150', { fontSize: '32px', fill: '#ffffff' });
        this.healing = this.add.image(630, 650, 'healing').setScale(0.07);
        this.healing.setInteractive();


        /*------sound effect declare and ssetting------*/
        let bagger_hit = this.sound.add('bagger_hit', {
            volume: 1,
            loop: false
        });
        let bagger_enemy1_hit = this.sound.add('bagger_enemy1_hit', {
            volume: 1,
            loop: false
        });

        let bagger_enemy3_hit = this.sound.add('bagger_enemy3_hit', {
            volume: 1,
            loop: false
        });

        play2Music = this.sound.add('play2', {
            volume: 1,
            loop: true
        });

        bossMusic = this.sound.add('boss', {
            volume: 1,
            loop: true
        });

        if (isBGMOn == true) play2Music.play();


        let attackEvent;
        this.picture = true;
        let hasFlashed = false;

        this.enemyAttackHint = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'enemyattackhint').setScale(0.2);
        this.enemyAttackHint.setVisible(false);

        //healing
        this.healing.on('pointerdown', () => {
            const dodgeTextValue = parseInt(this.dodgeText.text, 10);
            let currentManBlood = parseInt(this.manblood.text, 10);
            if (dodgeTextValue >= 150 && currentManBlood < 100) {
                currentManBlood += baggerUpgrade.special;
                if (currentManBlood > 100) {
                    currentManBlood = 100;
                }
                this.manblood.setText(currentManBlood.toString());

                let dodgekings = dodgeTextValue - 150;
                this.dodgeText.setText(dodgekings.toString());
            }
        });
        function startAttackEvent() {
            const randomDelay = Phaser.Math.Between(2000, 3500);
            attackEvent.delay = randomDelay; // 更新attackEvent的delay属性
        }


        if (!hasFlashed) {
            // 在攻擊前0.5秒閃爍enemyattackhint圖片
            const flashDelay1 = 1500;
            this.time.delayedCall(flashDelay1, () => {
                this.enemyAttackHint.setVisible(true);
                this.time.delayedCall(500, () => {
                    this.enemyAttackHint.setVisible(false);
                });
            });


            hasFlashed = true; // 設置已經閃爍過
        }

        //怪物攻擊&動畫
        attackEvent = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {

                startAttackEvent();




                if (this.picture) {
                    console.log('win!!');
                    // 在攻擊前0.5秒閃爍enemyattackhint圖片
                    const flashDelay = attackEvent.delay - 500;
                    if (flashDelay > 0) {
                        this.time.delayedCall(flashDelay, () => {
                            this.enemyAttackHint.setVisible(true);
                            this.time.delayedCall(500, () => {
                                this.enemyAttackHint.setVisible(false);
                            });
                        });
                    }
                }




                // 怪物水平左移
                const enemyMove = this.tweens.add({
                    targets: this.enemy1,
                    x: 200,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向右移動的動畫
                        this.time.delayedCall(100, () => {
                            const moveback = this.tweens.add({
                                targets: this.enemy1,
                                x: 1000,
                                duration: 100
                            });
                        });
                    }
                });

                if (this.enemyblood && parseInt(this.enemyblood.text, 10) > 0 && isEffectOn == true) {
                    bagger_enemy1_hit.play();
                }

                const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy1.x, this.enemy1.y);
                const verticalDistance = Math.abs(this.man.y - this.enemy1.y);
                if (distance < 900 && verticalDistance < 200 && this.enemyblood && parseInt(this.enemyblood.text, 10) > 0) {
                    this.isEnemyTouchingMan = true;
                } else {
                    this.isEnemyTouchingMan = false;

                    if (this.enemyblood && parseInt(this.enemyblood.text, 10) > 0) {
                        let dodgekings = parseInt(this.dodgeText.text, 10); // 未被攻击时增加dodgeking
                        if (dodgekings < 200) {
                            dodgekings += Phaser.Math.Between(20, 30);
                            if (dodgekings > 200) {
                                dodgekings = 200;
                            }
                            this.dodgeText.setText(dodgekings.toString());
                        }
                    }
                }
            }
        });

        this.attack.setInteractive();
        let canClick = true;
        this.attack.on('pointerdown', () => {
            if (canClick) {
                canClick = false;

                // 設定 man 的移動動畫
                const moveRight = this.tweens.add({
                    targets: this.man,
                    x: 1000,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向左移動的動畫
                        this.time.delayedCall(100, () => {
                            const moveLeft = this.tweens.add({
                                targets: this.man,
                                x: 200,
                                duration: 100
                            });
                        });
                    }
                })
                if (isEffectOn == true) bagger_hit.play();

                this.time.delayedCall(500, () => {
                    canClick = true;
                })

                // 判斷 man 和 enemy 重疊
                const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy1.x, this.enemy1.y);
                const verticalDistance = Math.abs(this.man.y - this.enemy1.y);

                if (distance < 900 && verticalDistance < 200 && parseInt(this.manblood.text, 10) > 0) {
                    // 如果 man 和 enemy 重疊，就設定 isManTouchingEnemy 為 true

                    this.isManTouchingEnemy = true;
                } else {
                    // 否則設定為 false
                    this.isManTouchingEnemy = false;
                }
            }
        });

        upbutton.setInteractive();
        upbutton.on('pointerdown', () => {
            if (canClick) {
                canClick = false;

                // 設定 man 的移動動畫
                const moveUp = this.tweens.add({
                    targets: this.man,
                    y: 100,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向上移動的動畫
                        this.time.delayedCall(300, () => {
                            const moveUp = this.tweens.add({
                                targets: this.man,
                                y: 400,
                                duration: 100
                            });
                        });
                    }
                })
                if (isEffectOn == true) bagger_hit.play();
                this.time.delayedCall(1000, () => {
                    canClick = true;
                })
            }
        });

        downbutton.setInteractive();
        downbutton.on('pointerdown', () => {
            if (canClick) {
                canClick = false;

                // 設定 man 的移動動畫
                const moveDown = this.tweens.add({
                    targets: this.man,
                    y: 700,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向下移動的動畫
                        this.time.delayedCall(300, () => {
                            const moveDown = this.tweens.add({
                                targets: this.man,
                                y: 400,
                                duration: 100
                            });
                        });
                    }
                })
                if (isEffectOn == true) bagger_hit.play();

                this.time.delayedCall(1000, () => {
                    canClick = true;
                })
            }
        });

        leftbutton.setInteractive();
        leftbutton.on('pointerdown', () => {
            if (canClick) {
                canClick = false;

                const originalX = this.man.x;
                // 設定 man 的移動動畫
                const moveDown = this.tweens.add({
                    targets: this.man,
                    x: 30,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向左移動的動畫
                        this.time.delayedCall(300, () => {
                            const moveDown = this.tweens.add({
                                targets: this.man,
                                x: 200,
                                duration: 100
                            });
                        });
                    }
                })
                if (isEffectOn == true) bagger_hit.play();

                this.time.delayedCall(1000, () => {
                    canClick = true;
                })
            }
        });


    }

    update() {

        // 如果 isManTouchingEnemy 為 true，就發生某些功能
        if (this.isManTouchingEnemy) {
            if (this.enemy1 && this.enemyblood) {
                let currentEnemyBlood = parseInt(this.enemyblood.text, 10);
                if (isCritical(baggerUpgrade.crit)) currentEnemyBlood -= baggerUpgrade.attack * 2;
                else currentEnemyBlood -= baggerUpgrade.attack;
                this.enemyblood.setText(currentEnemyBlood.toString());

                // 檢查怪物血量是否小於等於0
                if (currentEnemyBlood <= 0) {
                    // console.log('win!!');
                    this.enemy1.destroy();
                    this.attack.disableInteractive();
                    //this.enemyblood.setText('');
                    this.enemyblood.destroy();
                    this.enemyblood = null;

                    let currentCoinCount = parseInt(this.coinText.text, 10);
                    currentCoinCount += Phaser.Math.Between(5, 15);
                    this.coinText.setText(currentCoinCount.toString());

                    this.picture = false;
                    this.enemyAttackHint.destroy(); // 清除enemyAttackHint图片
                    // 创建新的怪物
                    this.createEnemy();
                }
            }
            this.isManTouchingEnemy = false;
        }

        // 如果 isManTouchingEnemy2 為 true，就發生某些功能
        if (this.isManTouchingEnemy2) {
            if (this.enemy2 && this.enemyblood2) {
                let currentEnemyBlood2 = parseInt(this.enemyblood2.text, 10);
                if (isCritical(baggerUpgrade.crit)) currentEnemyBlood2 -= baggerUpgrade.attack * 2;
                else currentEnemyBlood2 -= baggerUpgrade.attack;
                this.enemyblood2.setText(currentEnemyBlood2.toString());

                // 檢查怪物血量是否小於等於0
                if (currentEnemyBlood2 <= 0) {
                    // console.log('win!!');
                    this.enemy2.destroy();
                    this.attack.disableInteractive();
                    //this.enemyblood2.setText('');
                    this.enemyblood2.destroy();
                    this.enemyblood2 = null;

                    let currentCoinCount = parseInt(this.coinText.text, 10);
                    currentCoinCount += Phaser.Math.Between(15, 25);
                    this.coinText.setText(currentCoinCount.toString());

                    this.picture2 = false;
                    this.enemy2AttackHint.destroy(); // 清除enemyAttackHint图片
                    this.enemy2AttackHint2.destroy(); // 清除enemyAttackHint图片
                    this.enemy2AttackHint3.destroy(); // 清除enemyAttackHint图片
                    //创建新的怪物  
                    this.createEnemy2();

                    play2Music.stop();
                    if (isBGMOn == true) bossMusic.play();
                }
            }
            this.isManTouchingEnemy2 = false;
        }

        // 如果 isManTouchingEnemy3 為 true，就發生某些功能
        if (this.isManTouchingEnemy3) {
            if (this.enemy3 && this.enemyblood3) {
                let currentEnemyBlood3 = parseInt(this.enemyblood3.text, 10);
                if (isCritical(baggerUpgrade.crit)) currentEnemyBlood3 -= baggerUpgrade.attack * 2;
                else currentEnemyBlood3 -= baggerUpgrade.attack;
                this.enemyblood3.setText(currentEnemyBlood3.toString());

                // 檢查怪物血量是否小於等於0
                if (currentEnemyBlood3 <= 0) {
                    this.enemy3.destroy();
                    this.attack.disableInteractive();
                    this.enemyblood3.destroy();
                    this.enemyblood3 = null;

                    let currentCoinCount = parseInt(this.coinText.text, 10);
                    currentCoinCount += Phaser.Math.Between(25, 35);
                    this.coinText.setText(currentCoinCount.toString());

                    this.picture3 = false;
                    this.enemy3AttackHint.destroy(); // 清除enemyAttackHint图片
                    this.enemy3AttackHint2.destroy(); // 清除enemyAttackHint图片
                    this.enemy3AttackHint3.destroy(); // 清除enemyAttackHint图片
                    this.enemy3AttackHint4.destroy(); // 清除enemyAttackHint图片
                    this.enemy3AttackHint5.destroy(); // 清除enemyAttackHint图片
                    //创建新的怪物  
                    // this.createEnemy3();

                    setTimeout(() => {
                        bossMusic.stop();
                        this.scene.start('victoryScene');
                    }, 1000)
                    
                }
            }
            this.isManTouchingEnemy3 = false;
        }




        // 如果 isEnemyTouchingMan 為 true，就發生某些功能
        if (this.isEnemyTouchingMan) {
            if (this.man) {
                let currentManBlood = parseInt(this.manblood.text, 10);
                currentManBlood -= 20;
                this.manblood.setText(currentManBlood.toString());

                // 檢查玩家血量是否小於等於0
                if (currentManBlood <= 0) {
                    this.man.destroy();
                    this.attack.disableInteractive();
                    this.manblood.setText('');

                    thisLevel_coin = parseInt(this.coinText.text);
                    console.log(thisLevel_coin);
                    
                    setTimeout(() => {
                        play2Music.stop();
                        bossMusic.stop();
                        this.scene.start('gameoverScene');
                    }, 1000)
                }
            }
            this.isEnemyTouchingMan = false;
        }

        // 如果 isEnemyTouchingMan 為 true，就發生某些功能
        if (this.isEnemyTouchingMan2) {
            if (this.man) {
                let currentManBlood = parseInt(this.manblood.text, 10);
                currentManBlood -= 30;
                this.manblood.setText(currentManBlood.toString());

                // 檢查玩家血量是否小於等於0
                if (currentManBlood <= 0) {
                    this.man.destroy();
                    this.attack.disableInteractive();
                    this.manblood.setText('');

                    thisLevel_coin = parseInt(this.coinText.text);
                    console.log(thisLevel_coin);
                    setTimeout(() => {
                        play2Music.stop();
                        bossMusic.stop();
                        this.scene.start('gameoverScene');
                    }, 1000)
                }
            }
            this.isEnemyTouchingMan2 = false;
        }

        // // 如果 isEnemyTouchingMan 為 true，就發生某些功能
        // if (this.isEnemyTouchingMan3) {
        //     if (this.man) {
        //         let currentManBlood = parseInt(this.manblood.text, 10);
        //         currentManBlood -= 10;
        //         this.manblood.setText(currentManBlood.toString());

        //         // 檢查玩家血量是否小於等於0
        //         if (currentManBlood <= 0) {
        //             this.man.destroy();
        //             this.attack.disableInteractive();
        //             this.manblood.setText('');

        //             thisLevel_coin = parseInt(this.coinText.text);
        //             console.log(thisLevel_coin);
        //             setTimeout(() => {
                        // bossMusic.stop();
                        // this.scene.start('gameoverScene');
        //             }, 1000)
        //         }
        //     }
        //     this.isEnemyTouchingMan3 = false;
        // }

        if (this.enemy3) {
            // 然後更新enemy3的位置資訊
            console.log("Enemy3 position:", this.enemy3.x, this.enemy3.y);

            //     const distance = Phaser.Math.Distance.Between(this.man.x, this.man.y, this.enemy3.x, this.enemy3.y);
            //         const verticalDistance = Math.abs(this.man.y - this.enemy3.y);
            //         if (distance < 50 && verticalDistance < 50 && this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
            //             this.isEnemyTouchingMan3 = true;
            //         }
            //         else {
            //             this.isEnemyTouchingMan3 = false;

            //             if (this.enemyblood3 && parseInt(this.enemyblood3.text, 10) > 0) {
            //                 let dodgekings = parseInt(this.dodgeText.text, 10); // 未被攻击时增加dodgeking
            //                 if (dodgekings < 200) {
            //                     dodgekings += Phaser.Math.Between(20, 30);
            //                     if (dodgekings > 200) {
            //                         dodgekings = 200;
            //                     }
            //                     this.dodgeText.setText(dodgekings.toString());
            //                 }
            //             }

            //         }

        }
    }
}