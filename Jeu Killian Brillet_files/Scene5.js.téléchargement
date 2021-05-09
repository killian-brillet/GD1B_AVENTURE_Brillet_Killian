var entree

class Scenefive extends Phaser.Scene{
    constructor(){
        super("scenecinq");
    }

    init(data){
    }

    preload(){
        this.load.image('gameover', 'assets/gameover.png');
    }

    create(){
        vie = 3
        entree = entree = this.input.keyboard.addKeys('enter');
        this.add.image(640, 360, 'gameover')
    }

    update(){
        const passer = Phaser.Input.Keyboard.JustDown(entree.enter);
        if (passer){
            this.scene.start("sceneun")
        }
    }
}