class Menu extends Phaser.Scene{
    constructor(){
        super({ key: "Menu" });
        this.button=null;
    }
    
    preload(){

          this.load.video("menuVideo", "image/MP4/Cover.mp4");
    }
    create(){
        var video = this.add.video(0,0,"menuVideo",false,true).setOrigin(0);

        this.gamestart = this.add.text(350,385,"start!",{
            fontSize:"32px",
            color:"#ffffff"
        }).setInteractive({
            useHandCursor:true
        }).on("pointerup",()=>{this.startgame();});
        video.play();
        video.setLoop(true);

    }
    startgame()
    {
        this.scene.stop('Menu');
        this.scene.start("Scene");
    }
    update(){

    }
}