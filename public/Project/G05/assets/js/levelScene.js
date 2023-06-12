class levelScene extends Phaser.Scene{
    constructor(){
        super({ key: "levelScene" });
        this.title = "";
    }

    preload(){
        this.load.image('level_bg', './assets/level/gym.jpg');
        this.load.image('upgrade_block', './assets/level/upgrade_block.png');
        this.load.image('return_out', './assets/setting/return_out.png');
        this.load.image('return_over', './assets/setting/return_over.png');
        this.load.image('upgrade_out', './assets/level/upgrade_out.png');
        this.load.image('upgrade_over', './assets/level/upgrade_over.png');
        this.load.image('battle_out', './assets/level/battle_out.png');
        this.load.image('battle_over', './assets/level/battle_over.png');
        this.load.image('attack_out', './assets/level/attack_out.png');
        this.load.image('attack_over', './assets/level/attack_over.png');
        this.load.image('live_out', './assets/level/live_out.png');
        this.load.image('live_over', './assets/level/live_over.png');
        this.load.image('crit_out', './assets/level/crit_out.png');
        this.load.image('crit_over', './assets/level/crit_over.png');
        this.load.image('special_out', './assets/level/special_out.png');
        this.load.image('special_over', './assets/level/special_over.png');
        this.load.audio('mouseclick', './assets/audio/mouse.mp3');
        this.load.audio('upgrade_success', './assets/audio/updrade_success.mp3');
        this.load.audio('upgrade_error', './assets/audio/updrade_error.mp3');
    }
    create(){



        let sound_mouseclick= this.sound.add('mouseclick', {
            volume: 1,
            loop: false
        });
        let upgrade_success= this.sound.add('upgrade_success', {
            volume: 1,
            loop: false
        });
        let upgrade_error= this.sound.add('upgrade_error', {
            volume: 1,
            loop: false
        });
        
        this.add.image(this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'level_bg').setScale(1);
        
        this.add.image(750, 400, 'upgrade_block').setScale(1.6);

        //升級數據
        let attackLevel, attack, attack_next, liveLevel, live, live_next, critLevel, crit, crit_next, specialLevel, special, special_next;
        let isAttack, isLive, isCrit, isSpecial = false;

        /*bagger*/
        if (isBagger == true)
        {
            attackLevel = baggerUpgrade.attackLevel;
            attack = baggerUpgrade.attack;
            attack_next = baggerUpgrade.attack + 3;
            liveLevel = baggerUpgrade.liveLevel;
            live = baggerUpgrade.live;
            live_next = baggerUpgrade.live + 20;
            critLevel = baggerUpgrade.critLevel;
            crit = baggerUpgrade.crit;
            crit_next = baggerUpgrade.crit + 0.008;
            specialLevel = baggerUpgrade.specialLevel;            
            special = baggerUpgrade.special;            
            special_next = baggerUpgrade.special + 5;

            let title = this.add.text(530, 50, '貧民-升級介面', { fontSize: '70px', stroke: '#000000', strokeThickness: 5, fill: 'white', fontFamily: '微軟正黑體' });
        
            let attackText = this.add.text(395, 225, '攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let liveText = this.add.text(395, 225, '體力 : Lv.' + liveLevel    + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next    + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let critText = this.add.text(395, 225, '暴擊率 : Lv.' + critLevel    + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next    + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let specialText = this.add.text(395, 225, '恢復力 : Lv.' + specialLevel + ' / 10\n可加強恢復力 : \n\n' + special + ' -> ' + special_next + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
    
            attackText.setVisible(false);
            liveText.setVisible(false);
            critText.setVisible(false);
            specialText.setVisible(false);     
            
            //attackbtn
            let attcakbtn = this.add.image(180, 170, 'attack_out').setScale(1);
            
            //attack按鍵的mouseover mouseout圖片切換
            attcakbtn.setInteractive();
            attcakbtn.on("pointerover", () => {
                attcakbtn.setTexture("attack_over");
            });
            attcakbtn.on("pointerout", () => {
                attcakbtn.setTexture("attack_out");
            });
            attcakbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack =   true;
                isLive = false;
                isCrit = false;
                isSpecial = false;
                attackText.setVisible(true);
                liveText.setVisible(false);
                critText.setVisible(false);
                specialText.setVisible(false);
    
                if (attackLevel >= 10) attackText.setText('攻擊力 : Lv.10 / 10\n\n\n' + attack + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else attackText.setText('攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
            
            //livebtn
            let livebtn = this.add.image(180, 320, 'live_out').setScale(1);
            
            //live按鍵的mouseover mouseout圖片切換
            livebtn.setInteractive();
            livebtn.on("pointerover", () => {
                livebtn.setTexture("live_over");
            });
            livebtn.on("pointerout", () => {
                livebtn.setTexture("live_out");
            });
            livebtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = true;
                isCrit = false;
                isSpecial = false;
                attackText.setVisible(false);
                liveText.setVisible(true);
                critText.setVisible(false);
                specialText.setVisible(false);  
                
                if (liveLevel >= 10) liveText.setText('體力 : Lv.10 / 10\n\n\n' + live + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else liveText.setText('體力 : Lv.' + liveLevel  + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
    
            });
            
            //critbtn
            let critbtn = this.add.image(180, 470, 'crit_out').setScale(1);
            
            //crit按鍵的mouseover mouseout圖片切換
            critbtn.setInteractive();
            critbtn.on("pointerover", () => {
                critbtn.setTexture("crit_over");
            });
            critbtn.on("pointerout", () => {
                critbtn.setTexture("crit_out");
            });
            critbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = false;
                isCrit = true;
                isSpecial = false;
                attackText.setVisible(false);
                liveText.setVisible(false);
                critText.setVisible(true);
                specialText.setVisible(false);
    
                if (critLevel >= 10) critText.setText('暴擊率 : Lv.10 / 10\n\n\n' + crit + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else critText.setText('暴擊率 : Lv.' + critLevel  + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
            
            //specialbtn
            let specialbtn = this.add.image(180, 620, 'special_out').setScale(1);
            
            //special按鍵的mouseover mouseout圖片切換
            specialbtn.setInteractive();
            specialbtn.on("pointerover", () => {
                specialbtn.setTexture("special_over");
            });
            specialbtn.on("pointerout", () => {
                specialbtn.setTexture("special_out");
            });
            specialbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = false;
                isCrit = false;
                isSpecial = true;
                attackText.setVisible(false);
                liveText.setVisible(false);
                critText.setVisible(false);
                specialText.setVisible(true);
    
                if (specialLevel >= 10) specialText.setText('恢復力 : Lv.10 / 10\n\n\n' + special+ '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else specialText.setText('恢復力 : Lv.' + specialLevel  + ' / 10\n可加強恢復力 : \n\n' + special + ' -> ' + special_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
    
            //upgradebtn
            let upgradebtn = this.add.image(600, 730, 'upgrade_out').setScale(1);
            
            //upgradebtn按鍵的mouseover mouseout圖片切換
            upgradebtn.setInteractive();
            upgradebtn.on("pointerover", () => {
                upgradebtn.setTexture("upgrade_over");
            });
            upgradebtn.on("pointerout", () => {
                upgradebtn.setTexture("upgrade_out");
            });
            upgradebtn.on('pointerdown', () => {
                if (isAttack == true)
                {
                    if (total_coin >= 10)
                    {
                        if (attackLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            attackLevel += 1;
                            attack = attack_next;
                            attack_next += 3;
                            
                            if (attackLevel >= 10)
                                attackText.setText('攻擊力 : Lv.10 / 10\n\n\n' + attack + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                attackText.setText('攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");
                    }
                }
                
                if (isLive == true){
                    if (total_coin >= 10)
                    {
                        if (liveLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            liveLevel += 1;
                            live = live_next;
                            live_next += 20;
                            
                            if (liveLevel >= 10)
                                liveText.setText('體力 : Lv.10 / 10\n\n\n' + live + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                liveText.setText('體力 : Lv.' + liveLevel  + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");
                    }
                }
                
                if (isCrit == true)
                {
                    if (total_coin >= 10)
                    {
                        if (critLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            critLevel += 1;
                            crit = crit_next;
                            crit_next += 0.008;
                            
                            if (critLevel >= 10)
                                critText.setText('暴擊率 : Lv.10 / 10\n\n\n' + crit + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                critText.setText('暴擊率 : Lv.' + critLevel  + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");
                    }
                }
    
                if (isSpecial == true)
                {
                    if (total_coin >= 10)
                    {
                        if (specialLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            specialLevel += 1;
                            special = special_next;
                            special_next += 5;
    
                            if (specialLevel >= 10)
                                specialText.setText('恢復力 : Lv.10 / 10\n\n\n' + special+ '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                specialText.setText('恢復力 : Lv.' + specialLevel  + ' / 10\n可加強恢復力 : \n\n' + special + ' -> ' + special_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");
                    }
                }
            });
        }

        /*student*/
        if (isStudent == true)
        {
            attackLevel = studentUpgrade.attackLevel;
            attack = studentUpgrade.attack;
            attack_next = studentUpgrade.attack + 3;
            liveLevel = studentUpgrade.liveLevel;
            live = studentUpgrade.live;
            live_next = studentUpgrade.live + 20;
            critLevel = studentUpgrade.critLevel;
            crit = studentUpgrade.crit;
            crit_next = studentUpgrade.crit + 0.008;
            specialLevel = studentUpgrade.specialLevel;            
            special = studentUpgrade.special;            
            special_next = studentUpgrade.special + 5;  

            let title = this.add.text(530, 50, '學生-升級介面', { fontSize: '70px', stroke: '#000000', strokeThickness: 5, fill: 'white', fontFamily: '微軟正黑體' });

            let attackText = this.add.text(395, 225, '攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let liveText = this.add.text(395, 225, '體力 : Lv.' + liveLevel    + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next    + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let critText = this.add.text(395, 225, '暴擊率 : Lv.' + critLevel    + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next    + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let specialText = this.add.text(395, 225, '沉默時間 : Lv.' + specialLevel + ' / 10\n可加強沉默時間 : \n\n' + special + ' -> ' + special_next + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
    
            attackText.setVisible(false);
            liveText.setVisible(false);
            critText.setVisible(false);
            specialText.setVisible(false);     
            
            //attackbtn
            let attcakbtn = this.add.image(180, 170, 'attack_out').setScale(1);
            
            //attack按鍵的mouseover mouseout圖片切換
            attcakbtn.setInteractive();
            attcakbtn.on("pointerover", () => {
                attcakbtn.setTexture("attack_over");
            });
            attcakbtn.on("pointerout", () => {
                attcakbtn.setTexture("attack_out");
            });
            attcakbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack =   true;
                isLive = false;
                isCrit = false;
                isSpecial = false;
                attackText.setVisible(true);
                liveText.setVisible(false);
                critText.setVisible(false);
                specialText.setVisible(false);
    
                if (attackLevel >= 10) attackText.setText('攻擊力 : Lv.10 / 10\n\n\n' + attack + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else attackText.setText('攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
            
            //livebtn
            let livebtn = this.add.image(180, 320, 'live_out').setScale(1);
            
            //live按鍵的mouseover mouseout圖片切換
            livebtn.setInteractive();
            livebtn.on("pointerover", () => {
                livebtn.setTexture("live_over");
            });
            livebtn.on("pointerout", () => {
                livebtn.setTexture("live_out");
            });
            livebtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = true;
                isCrit = false;
                isSpecial = false;
                attackText.setVisible(false);
                liveText.setVisible(true);
                critText.setVisible(false);
                specialText.setVisible(false);  
                
                if (liveLevel >= 10) liveText.setText('體力 : Lv.10 / 10\n\n\n' + live + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else liveText.setText('體力 : Lv.' + liveLevel  + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
    
            });
            
            //critbtn
            let critbtn = this.add.image(180, 470, 'crit_out').setScale(1);
            
            //crit按鍵的mouseover mouseout圖片切換
            critbtn.setInteractive();
            critbtn.on("pointerover", () => {
                critbtn.setTexture("crit_over");
            });
            critbtn.on("pointerout", () => {
                critbtn.setTexture("crit_out");
            });
            critbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = false;
                isCrit = true;
                isSpecial = false;
                attackText.setVisible(false);
                liveText.setVisible(false);
                critText.setVisible(true);
                specialText.setVisible(false);
    
                if (critLevel >= 10) critText.setText('暴擊率 : Lv.10 / 10\n\n\n' + crit + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else critText.setText('暴擊率 : Lv.' + critLevel  + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
            
            //specialbtn
            let specialbtn = this.add.image(180, 620, 'special_out').setScale(1);
            
            //special按鍵的mouseover mouseout圖片切換
            specialbtn.setInteractive();
            specialbtn.on("pointerover", () => {
                specialbtn.setTexture("special_over");
            });
            specialbtn.on("pointerout", () => {
                specialbtn.setTexture("special_out");
            });
            specialbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = false;
                isCrit = false;
                isSpecial = true;
                attackText.setVisible(false);
                liveText.setVisible(false);
                critText.setVisible(false);
                specialText.setVisible(true);
    
                if (specialLevel >= 10) specialText.setText('沉默時間 : Lv.10 / 10\n\n\n' + special+ '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else specialText.setText('沉默時間 : Lv.' + specialLevel  + ' / 10\n可加強沉默時間 : \n\n' + special + ' -> ' + special_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
    
            //upgradebtn
            let upgradebtn = this.add.image(600, 730, 'upgrade_out').setScale(1);
            
            //return按鍵的mouseover mouseout圖片切換
            upgradebtn.setInteractive();
            upgradebtn.on("pointerover", () => {
                upgradebtn.setTexture("upgrade_over");
            });
            upgradebtn.on("pointerout", () => {
                upgradebtn.setTexture("upgrade_out");
            });
            upgradebtn.on('pointerdown', () => {
                if (isAttack == true)
                {
                    if (total_coin >= 10)
                    {
                        if (attackLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            attackLevel += 1;
                            attack = attack_next;
                            attack_next += 3;
                            
                            if (attackLevel >= 10)
                                attackText.setText('攻擊力 : Lv.10 / 10\n\n\n' + attack + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                attackText.setText('攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");   
                    }
                }
                
                if (isLive == true){
                    if (total_coin >= 10)
                    {
                        if (liveLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            liveLevel += 1;
                            live = live_next;
                            live_next += 20;
                            
                            if (liveLevel >= 10)
                                liveText.setText('體力 : Lv.10 / 10\n\n\n' + live + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                liveText.setText('體力 : Lv.' + liveLevel  + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");   
                    }
                }
                
                if (isCrit == true)
                {
                    if (total_coin >= 10)
                    {
                        if (critLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            critLevel += 1;
                            crit = crit_next;
                            crit_next += 0.008;
                            
                            if (critLevel >= 10)
                                critText.setText('暴擊率 : Lv.10 / 10\n\n\n' + crit + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                critText.setText('暴擊率 : Lv.' + critLevel  + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");   
                    }
                }
    
                if (isSpecial == true)
                {
                    if (total_coin >= 10)
                    {
                        if (specialLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            specialLevel += 1;
                            special = special_next;
                            special_next += 5;
    
                            if (specialLevel >= 10)
                                specialText.setText('沉默時間 : Lv.10 / 10\n\n\n' + special+ '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                specialText.setText('沉默時間 : Lv.' + specialLevel  + ' / 10\n可加強沉默時間 : \n\n' + special + ' -> ' + special_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");   
                    }
                }
            });
        }

        /*frog*/
        if (isFrog == true)
        {
            attackLevel = frogUpgrade.attackLevel;
            attack = frogUpgrade.attack;
            attack_next = frogUpgrade.attack + 3;
            liveLevel = frogUpgrade.liveLevel;
            live = frogUpgrade.live;
            live_next = frogUpgrade.live + 20;
            critLevel = frogUpgrade.critLevel;
            crit = frogUpgrade.crit;
            crit_next = frogUpgrade.crit + 0.008;
            specialLevel = frogUpgrade.specialLevel;            
            special = frogUpgrade.special;            
            special_next = frogUpgrade.special + 5;
            
            let title = this.add.text(530, 50, '青蛙-升級介面', { fontSize: '70px', stroke: '#000000', strokeThickness: 5, fill: 'white', fontFamily: '微軟正黑體' });

            let attackText = this.add.text(395, 225, '攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let liveText = this.add.text(395, 225, '體力 : Lv.' + liveLevel    + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next    + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let critText = this.add.text(395, 225, '暴擊率 : Lv.' + critLevel    + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next    + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
            let specialText = this.add.text(395, 225, '舌肌力 : Lv.' + specialLevel + ' / 10\n可加強舌肌力 : \n\n' + special + ' -> ' + special_next + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin, { fontSize: '45px', fill: 'black', fontFamily: '微軟正黑體' });
    
            attackText.setVisible(false);
            liveText.setVisible(false);
            critText.setVisible(false);
            specialText.setVisible(false);     
            
            //attackbtn
            let attcakbtn = this.add.image(180, 170, 'attack_out').setScale(1);
            
            //attack按鍵的mouseover mouseout圖片切換
            attcakbtn.setInteractive();
            attcakbtn.on("pointerover", () => {
                attcakbtn.setTexture("attack_over");
            });
            attcakbtn.on("pointerout", () => {
                attcakbtn.setTexture("attack_out");
            });
            attcakbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack =   true;
                isLive = false;
                isCrit = false;
                isSpecial = false;
                attackText.setVisible(true);
                liveText.setVisible(false);
                critText.setVisible(false);
                specialText.setVisible(false);
    
                if (attackLevel >= 10) attackText.setText('攻擊力 : Lv.10 / 10\n\n\n' + attack + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else attackText.setText('攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
            
            //livebtn
            let livebtn = this.add.image(180, 320, 'live_out').setScale(1);
            
            //live按鍵的mouseover mouseout圖片切換
            livebtn.setInteractive();
            livebtn.on("pointerover", () => {
                livebtn.setTexture("live_over");
            });
            livebtn.on("pointerout", () => {
                livebtn.setTexture("live_out");
            });
            livebtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = true;
                isCrit = false;
                isSpecial = false;
                attackText.setVisible(false);
                liveText.setVisible(true);
                critText.setVisible(false);
                specialText.setVisible(false);  
                
                if (liveLevel >= 10) liveText.setText('體力 : Lv.10 / 10\n\n\n' + live + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else liveText.setText('體力 : Lv.' + liveLevel  + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
    
            });
            
            //critbtn
            let critbtn = this.add.image(180, 470, 'crit_out').setScale(1);
            
            //crit按鍵的mouseover mouseout圖片切換
            critbtn.setInteractive();
            critbtn.on("pointerover", () => {
                critbtn.setTexture("crit_over");
            });
            critbtn.on("pointerout", () => {
                critbtn.setTexture("crit_out");
            });
            critbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = false;
                isCrit = true;
                isSpecial = false;
                attackText.setVisible(false);
                liveText.setVisible(false);
                critText.setVisible(true);
                specialText.setVisible(false);
    
                if (critLevel >= 10) critText.setText('暴擊率 : Lv.10 / 10\n\n\n' + crit + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else critText.setText('暴擊率 : Lv.' + critLevel  + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
            
            //specialbtn
            let specialbtn = this.add.image(180, 620, 'special_out').setScale(1);
            
            //special按鍵的mouseover mouseout圖片切換
            specialbtn.setInteractive();
            specialbtn.on("pointerover", () => {
                specialbtn.setTexture("special_over");
            });
            specialbtn.on("pointerout", () => {
                specialbtn.setTexture("special_out");
            });
            specialbtn.on('pointerdown', () => {
                if (isEffectOn == true) sound_mouseclick.play();
                isAttack = false;
                isLive = false;
                isCrit = false;
                isSpecial = true;
                attackText.setVisible(false);
                liveText.setVisible(false);
                critText.setVisible(false);
                specialText.setVisible(true);
    
                if (specialLevel >= 10) specialText.setText('舌肌力 : Lv.10 / 10\n\n\n' + special+ '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                else specialText.setText('舌肌力 : Lv.' + specialLevel  + ' / 10\n可加強舌肌力 : \n\n' + special + ' -> ' + special_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
            });
    
            //upgradebtn
            let upgradebtn = this.add.image(600, 730, 'upgrade_out').setScale(1);
            
            //return按鍵的mouseover mouseout圖片切換
            upgradebtn.setInteractive();
            upgradebtn.on("pointerover", () => {
                upgradebtn.setTexture("upgrade_over");
            });
            upgradebtn.on("pointerout", () => {
                upgradebtn.setTexture("upgrade_out");
            });
            upgradebtn.on('pointerdown', () => {
                if (isAttack == true)
                {
                    if (total_coin >= 10)
                    {
                        if (attackLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            attackLevel += 1;
                            attack = attack_next;
                            attack_next += 3;
                            
                            if (attackLevel >= 10)
                                attackText.setText('攻擊力 : Lv.10 / 10\n\n\n' + attack + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                attackText.setText('攻擊力 : Lv.' + attackLevel  + ' / 10\n可加強攻擊力 : \n\n' + attack + ' -> ' + attack_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");   
                    }
                }
                
                if (isLive == true){
                    if (total_coin >= 10)
                    {
                        if (liveLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            liveLevel += 1;
                            live = live_next;
                            live_next += 20;
                            
                            if (liveLevel >= 10)
                                liveText.setText('體力 : Lv.10 / 10\n\n\n' + live + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                liveText.setText('體力 : Lv.' + liveLevel  + ' / 10\n可加強體力 : \n\n' + live + ' -> ' + live_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");   
                    }
                }
                
                if (isCrit == true)
                {
                    if (total_coin >= 10)
                    {
                        if (critLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            critLevel += 1;
                            crit = crit_next;
                            crit_next += 0.008;
                            
                            if (critLevel >= 10)
                                critText.setText('暴擊率 : Lv.10 / 10\n\n\n' + crit + '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                critText.setText('暴擊率 : Lv.' + critLevel  + ' / 10\n可加強暴擊率 : \n\n' + crit + ' -> ' + crit_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");   
                    }
                }
    
                if (isSpecial == true)
                {
                    if (total_coin >= 10)
                    {
                        if (specialLevel < 10)
                        {
                            if (isEffectOn == true) upgrade_success.play();
                            total_coin -= 10;
                            specialLevel += 1;
                            special = special_next;
                            special_next += 5;
    
                            if (specialLevel >= 10)
                                specialText.setText('舌肌力 : Lv.10 / 10\n\n\n' + special+ '\n\n已到達最高等級      ' + '持有金幣 : ' + total_coin);
                            else
                                specialText.setText('舌肌力 : Lv.' + specialLevel  + ' / 10\n可加強舌肌力 : \n\n' + special + ' -> ' + special_next  + '\n\n' + '需要金幣 : ' + '10' + '          ' + '持有金幣 : ' + total_coin);
                        }
                    }
                    else{
                        if (isEffectOn == true) upgrade_error.play();
                        alert("金幣數量不足!");   
                    }
                }
            });
        }
        
        //現在要升級的是哪一項
        // let isAttack, isLive, isCrit, isSpecial = false;
        // if (isBagger == true)
        // {
        //     let title = this.add.text(530, 50, '貧民-升級介面', { fontSize: '70px', stroke: '#000000', strokeThickness: 5, fill: 'white', fontFamily: '微軟正黑體' });
        // }
        // else if (isStudent == true)
        // {
        //     let title = this.add.text(530, 50, '學生-升級介面', { fontSize: '70px', stroke: '#000000', strokeThickness: 5, fill: 'white', fontFamily: '微軟正黑體' });
        // }
        // else
        // {
        //     let title = this.add.text(530, 50, '青蛙-升級介面', { fontSize: '70px', stroke: '#000000', strokeThickness: 5, fill: 'white', fontFamily: '微軟正黑體' });
        // }
        
        
        //returnbtn
        let returnbtn = this.add.image(100, 50, 'return_out').setScale(0.7);
        
        //return按鍵的mouseover mouseout圖片切換
        returnbtn.setInteractive();
        returnbtn.on("pointerover", () => {
            returnbtn.setTexture("return_over");
        });
        returnbtn.on("pointerout", () => {
            returnbtn.setTexture("return_out");
        });
        returnbtn.on('pointerdown', () => {
            if (isEffectOn == true) sound_mouseclick.play();
            
            /*bagger*/
            if (isBagger == true)
            {
                baggerUpgrade.attackLevel = attackLevel;
                baggerUpgrade.attack = attack;
                baggerUpgrade.liveLevel = liveLevel;
                baggerUpgrade.live = live;
                baggerUpgrade.critLevel = critLevel;
                baggerUpgrade.crit = crit;
                baggerUpgrade.specialLevel = specialLevel;            
                baggerUpgrade.special = special;
            }

            /*student*/
            if (isStudent == true)
            {
                studentUpgrade.attackLevel = attackLevel;
                studentUpgrade.attack = attack;
                studentUpgrade.liveLevel = liveLevel;
                studentUpgrade.live = live;
                studentUpgrade.critLevel = critLevel;
                studentUpgrade.crit = crit;
                studentUpgrade.specialLevel = specialLevel;            
                studentUpgrade.special = special;
            }
            
            /*frog*/
            if (isFrog == true)
            {
                frogUpdate.attackLevel = attackLevel;
                frogUpdate.attack = attack;
                frogUpdate.liveLevel = liveLevel;
                frogUpdate.live = live;
                frogUpdate.critLevel = critLevel;
                frogUpdate.crit = crit;
                frogUpdate.specialLevel = specialLevel;            
                frogUpdate.special = special;  
            }

            this.scene.start('selectScene');
        });
        
        //battlebtn
        let battlebtn = this.add.image(1050, 730, 'battle_out').setScale(1);
        
        //return按鍵的mouseover mouseout圖片切換
        battlebtn.setInteractive();
        battlebtn.on("pointerover", () => {
            battlebtn.setTexture("battle_over");
        });
        battlebtn.on("pointerout", () => {
            battlebtn.setTexture("battle_out");
        });
        battlebtn.on('pointerdown', () => {
            if (isEffectOn == true) sound_mouseclick.play();
            
            /*bagger*/
            if (isBagger == true)
            {
                baggerUpgrade.attackLevel = attackLevel;
                baggerUpgrade.attack = attack;
                baggerUpgrade.liveLevel = liveLevel;
                baggerUpgrade.live = live;
                baggerUpgrade.critLevel = critLevel;
                baggerUpgrade.crit = crit;
                baggerUpgrade.specialLevel = specialLevel;            
                baggerUpgrade.special = special;
                
                bgMusic.stop();
                this.scene.start('baggerScene');
            }

            /*student*/
            if (isStudent == true)
            {
                studentUpgrade.attackLevel = attackLevel;
                studentUpgrade.attack = attack;
                studentUpgrade.liveLevel = liveLevel;
                studentUpgrade.live = live;
                studentUpgrade.critLevel = critLevel;
                studentUpgrade.crit = crit;
                studentUpgrade.specialLevel = specialLevel;            
                studentUpgrade.special = special;

                bgMusic.stop();
                this.scene.start('studentScene');
            }

            /*frog*/
            /*
            if (isFrog == true)
            {
                frogUpdate.attackLevel = attackLevel;
                frogUpdate.attack = attack;
                frogUpdate.liveLevel = liveLevel;
                frogUpdate.live = live;
                frogUpdate.critLevel = critLevel;
                frogUpdate.crit = crit;
                frogUpdate.specialLevel = specialLevel;            
                frogUpdate.special = special;

                this.scene.start('frogScene');
            }
            */
        });
    }
    update(){

    }
}