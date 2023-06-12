class studentScene extends Phaser.Scene{
    constructor(){
        super({ key: "studentScene" });
        this.isManTouchingEnemy = false;
        this.isEnemyTouchingMan = false;
        this.stu_enemy1;
        this.enemyblood;
        this.student2;
        this.manblood;
        this.attack;
        this.attackEvent;
        this.canClick = true;
    }
    
    preload(){
        this.load.image('classroom_bg', './assets/student/classroom_bg.jpg')
        this.load.image('student', './assets/student/student.png')
        this.load.image('stu_enemy1', './assets/student/stu_enemy1.png')
        this.load.image('stu_enemy2', './assets/student/stu_enemy2.png')
        this.load.image('stu_enemy3', './assets/student/stu_enemy3.png')
        this.load.image('left_btn', './assets/btn/left_btn.png')
        this.load.image('attack_btn', './assets/btn/attack_btn.png')
        this.load.audio('student_hit', './assets/audio/student.mp3')
        this.load.audio('student_enemy1_hit', './assets/audio/student_enemy1.mp3')
        this.load.audio('student_enemy2_hit', './assets/audio/student_enemy2.mp3')
        this.load.audio('student_enemy3_hit', './assets/audio/student_enemy3.mp3')
    }

    // isEnemyTouchingMan = false;
    // isManTouchingEnemy = false;
    // enemy1;
    // enemyblood;
    // man;
    // manblood;
    // attack;
    // attackEvent;
    // canClick = true;

    create(){
        this.add.image(0, 0, 'classroom_bg').setOrigin(0);
        //角色(學生)圖片
        this.student2 = this.add.image(this.cameras.main.width / 2 - 300,
        this.cameras.main.height / 2 - 50,
        'student').setScale(1);
        this.manblood = this.add.text(this.student2.x, this.student2.y - 120, '100',
            { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);
        //敵人圖片
        this.stu_enemy1 = this.add.image(this.cameras.main.width / 2 + 300,
        this.cameras.main.height / 2 - 50,
        'stu_enemy1').setScale(1);
        this.enemyblood = this.add.text(this.stu_enemy1.x, this.stu_enemy1.y - 120, '100',
            { fontSize: '48px', fill: '#ffffff' }).setOrigin(0.5);


        /*------sound effect declare and ssetting------*/
        let student_hit = this.sound.add('student_hit', {
            volume: 1,
            loop: false
        });
        let student_enemy1_hit = this.sound.add('student_enemy1_hit', {
            volume: 1,
            loop: false
        });
        let student_enemy2_hit = this.sound.add('student_enemy1_hit', {
            volume: 1,
            loop: false
        });
        let student_enemy3_hit = this.sound.add('student_enemy1_hit', {
            volume: 1,
            loop: false
        });


        //怪物攻擊&動畫
        this.attackEvent = this.time.addEvent({
            delay: 2000,
            loop: true,
            callback: () => {
                startAttackEvent(this.attackEvent);

                // 怪物水平左移
                const originalX = this.stu_enemy1.x;
                const enemyMove = this.tweens.add({
                    targets: this.stu_enemy1,
                    x: this.student2.x,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向右移動的動畫
                        this.time.delayedCall(100, () => {
                            const moveback = this.tweens.add({
                                targets: this.stu_enemy1,
                                x: originalX,
                                duration: 100
                            });
                        });
                    }
                });
                console.log(this.attackEvent.delay);
                // 判斷怪物和玩家是否重疊
                const distance = Phaser.Math.Distance.Between(this.student2.x, this.student2.y, this.stu_enemy1.x, this.stu_enemy1.y);
                const verticalDistance = Math.abs(this.student2.y - this.stu_enemy1.y);

                if (distance < 900 && verticalDistance < 200 && parseInt(this.enemyblood.text, 10) > 0) {
                    // 扣除玩家血量
                    let currentManBlood = parseInt(this.manblood.text, 10);
                    currentManBlood -= 30;
                    this.manblood.setText(currentManBlood.toString());

                    // 檢查玩家血量是否小於等於0
                    if (currentManBlood <= 0) {
                        this.student2.destroy();
                        this.attack.disableInteractive();
                        this.manblood.setText('');
                    }
                } else if (parseInt(this.enemyblood.text, 10) <= 0) {
                    this.attackEvent.remove();
                }
            }
        });

        //移動閃躲鍵
        const leftbutton = this.add.image((this.cameras.main.width / 2)-500,
            (this.cameras.main.height / 2)+230,
            'left_btn').setScale(0.2).setInteractive().on('pointerdown', () => {
                if (this.canClick) {
                    this.canClick = false;

                    const originalX = this.student2.x;
                    // 設定 man 的移動動畫
                    const moveUp = this.tweens.add({
                        targets: this.student2,
                        x: this.student2.x - 150,
                        duration: 100,
                        onComplete: () => {
                            // 等待 100 毫秒後執行向左移動的動畫
                            this.time.delayedCall(300, () => {
                                const moveUp = this.tweens.add({
                                    targets: this.student2,
                                    x: originalX,
                                    duration: 100
                                });
                            });
                        }
                    })
                    this.time.delayedCall(500, () => {
                        this.canClick = true;
                    })
                }
            });
        const upbutton = this.add.image((this.cameras.main.width / 2)-390,
            (this.cameras.main.height / 2)+140,
            'left_btn').setScale(0.2).setAngle(90).setInteractive().on('pointerdown', () => {
                if (this.canClick) {
                    this.canClick = false;

                    const originalY = this.student2.y;
                    // 設定 man 的移動動畫
                    const moveUp = this.tweens.add({
                        targets: this.student2,
                        y: this.student2.y - 200,
                        duration: 100,
                        onComplete: () => {
                            // 等待 100 毫秒後執行向左移動的動畫
                            this.time.delayedCall(300, () => {
                                const moveUp = this.tweens.add({
                                    targets: this.student2,
                                    y: originalY,
                                    duration: 100
                                });
                            });
                        }
                    })
                    this.time.delayedCall(500, () => {
                        this.canClick = true;
                    })
                }
            });
        const downbutton = this.add.image((this.cameras.main.width / 2)-390,
            (this.cameras.main.height / 2)+320,
            'left_btn').setScale(0.2).setAngle(-90).setInteractive().on('pointerdown', () => {
                if (this.canClick) {
                    this.canClick = false;

                    const originalY = this.student2.y;
                    // 設定 man 的移動動畫
                    const moveDown = this.tweens.add({
                        targets: this.student2,
                        y: this.student2.y + 300,
                        duration: 100,
                        onComplete: () => {
                            // 等待 100 毫秒後執行向左移動的動畫
                            this.time.delayedCall(300, () => {
                                const moveDown = this.tweens.add({
                                    targets: this.student2,
                                    y: originalY,
                                    duration: 100
                                });
                            });
                        }
                    })

                    this.time.delayedCall(500, () => {
                        this.canClick = true;
                    })
                }
            });
        //攻擊鍵
        this.attack = this.add.image((this.cameras.main.width / 2)+400,
            (this.cameras.main.height / 2)+220,
            'attack_btn').setScale(0.3).setInteractive().on('pointerup', () =>{
            if (this.canClick) {
                this.canClick = false;


                console.log(this.student2.x / 2);
                console.log(this.student2.y / 2);


                const originalX = this.student2.x;
                // 設定 man 的移動動畫
                const moveRight = this.tweens.add({
                    targets: this.student2,
                    x: this.stu_enemy1.x,
                    duration: 100,
                    onComplete: () => {
                        // 等待 100 毫秒後執行向左移動的動畫
                        this.time.delayedCall(100, () => {
                            const moveLeft = this.tweens.add({
                                targets: this.student2,
                                x: originalX,
                                duration: 100
                            });
                        });
                    }
                })

                this.time.delayedCall(500, () => {
                    this.canClick = true;
                })

                // 判斷 man 和 enemy 重疊
                const distance = Phaser.Math.Distance.Between(this.student2.x, this.student2.y, this.stu_enemy1.x, this.stu_enemy1.y);
                if (distance < 900) {
                    // 如果 man 和 enemy 重疊，就設定 isManTouchingEnemy 為 true
                    this.isManTouchingEnemy = true;
                } else {
                    // 否則設定為 false
                    this.isManTouchingEnemy = false;
                }
            }
            });
    }
    startAttackEvent(attackEvent) {
        const randomDelay = Phaser.Math.Between(2000, 5000);
        attackEvent.delay = randomDelay; // 更新attackEvent的delay属性
    }
    update(){
        // 如果 isManTouchingEnemy 為 true，就發生某些功能
        if (this.isManTouchingEnemy) {
            if (this.stu_enemy1) {
                let currentEnemyBlood = parseInt(this.enemyblood.text, 10);
                currentEnemyBlood -= 20;
                this.enemyblood.setText(currentEnemyBlood.toString());

                // 檢查怪物血量是否小於等於0
                if (currentEnemyBlood <= 0) {
                    // console.log('win!!');
                    this.stu_enemy1.destroy();
                    this.attack.disableInteractive();
                    this.enemyblood.setText('');
                }
            }
            // manblood.setText('100');
            // 將 isManTouchingEnemy 設置為 false
            this.isManTouchingEnemy = false;
        }

        if (this.isEnemyTouchingMan) {
            if (this.student2) {
                let currentManBlood = parseInt(this.manblood.text, 10);
                currentManBlood -= 30;
                this.manblood.setText(currentManBlood.toString());

                // 檢查玩家血量是否小於等於0
                if (currentManBlood <= 0) {
                    this.student2.distroy();
                    this.attack.disableInteractive();
                    this.manblood.setText('');

                }
            }

            // 將 isManTouchingEnemy 設置為 false
            this.isEnemyTouchingMan = false;
        }
    }
}