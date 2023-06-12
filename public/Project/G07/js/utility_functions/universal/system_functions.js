//通用系統function

//接收每個scene傳過來的this用於指定要處理scene流程
function callPauseScene(thisSceneData) {
    thisSceneData.scene.launch("pause_menu", { currentScene: thisSceneData.scene.key });//給pause_menu要按resume時存取
    thisSceneData.scene.pause();//暫停當下scene
}

//按鍵宣告
function keyEnable() {
    keyESC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
}