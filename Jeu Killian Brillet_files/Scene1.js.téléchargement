var entree;
var vie
var comptobj1
var comptobj2
var comptobj3
var etatscene2
var scenearrive
var etatbombe1
var etatbombe2
var etatpotion1
var etatpotion2

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
        comptobj1 = 0
        comptobj2 = 0
        comptobj3 = 0
        etatbombe1 = 1
        etatbombe2 = 1
        etatpotion1 = 1
        etatpotion2 = 1
        scenearrive = 0
        etatscene2 = 0
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