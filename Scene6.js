var entree

class Scenesix extends Phaser.Scene{
    constructor(){
        super("scenesix");
    }

    init(data){
    }

    preload(){
        this.load.image('gagne', 'assets/win.png');
    }

    create(){
        vie = 3
        entree = entree = this.input.keyboard.addKeys('enter');
        this.add.image(640, 360, 'gagne')
    }

    update(){
        const passer = Phaser.Input.Keyboard.JustDown(entree.enter);
        if (passer){
            this.scene.start("sceneun")
        }
    }
}