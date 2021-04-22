var entree;

class Sceneone extends Phaser.Scene{
    constructor(){
        super("sceneun");
    }

    init(data){
    }

    preload(){
        this.load.image('menu', 'assets/menu.png');
    }

    create(){
        entree = entree = this.input.keyboard.addKeys('enter');
        this.add.image(640, 360, 'menu')
        this.add.text(20,20, "Salut à toi, jeune entrepreneur")
    }

    update(){
        const passer = Phaser.Input.Keyboard.JustDown(entree.enter);
        if (passer){
            this.scene.start("scenedeux")
        }
    }
}