var entree;
var vie
var comptobj1
var comptobj2
var comptobj3

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
        vie = 3
        entree = entree = this.input.keyboard.addKeys('enter');
        this.add.image(640, 360, 'menu')
    }

    update(){
        const passer = Phaser.Input.Keyboard.JustDown(entree.enter);
        if (passer){
            this.scene.start("scenedeux")
        }
    }
}