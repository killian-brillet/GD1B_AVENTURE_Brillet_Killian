var player

var dropcle
var cle
var potion
var bombe
var thune
var fin

var textecle
var textepot
var textebomb

var gameOver
var cursors

var explosion
var utilpot

var platforms
var porte

var ennemi
var etatennemi

var left
var right
var up
var down
var balle

var timer = 0
var inv = false
var afficheVie

var drop = 0

class Scenethree extends Phaser.Scene{
    constructor(){
        super("scenetrois");
    }

    init(data){
    }

    preload() {
        this.load.tilemapTiledJSON('carte', 'tiled/Carte2.json');
        this.load.image('tuile', 'assets/obstacles.png')
        this.load.image('fond', 'assets/sol.png');
        this.load.spritesheet('perso', 'assets/perso.png', { frameWidth: 46, frameHeight: 40 });
        this.load.spritesheet('ennemi', 'assets/monstre.png', { frameWidth: 50, frameHeight: 50 });
        this.load.image('menu', 'assets/menu.png');
        this.load.image('key', 'assets/cle.png');
        this.load.image('trois', 'assets/trois.png');
        this.load.image('deux', 'assets/deux.png');
        this.load.image('un', 'assets/un.png');
        this.load.image('dead', 'assets/dead.png');
        this.load.image('finish', 'assets/finish.png')
        this.load.image('porte2','assets/porte3.png')
        this.load.image('interbombon', 'assets/interface_bombe_active.png')
        this.load.image('interbomboff', 'assets/interface_bombe_desactive.png')
        this.load.image('interpoton', 'assets/interface_trousse_active.png')
        this.load.image('interpotoff', 'assets/interface_trousse_desactive.png')
        this.load.image('intercleon', 'assets/interface_cle_active.png')
        this.load.image('intercleoff', 'assets/interface_cle_desactive.png')
    }
    
    create() {
        console.log(comptobj1)
        scenearrive = 1
        this.add.image(640, 360, 'menu')

        const map = this.make.tilemap({key: 'carte'});
        const tuilesobstacles = map.addTilesetImage('obstacle','tuile');
        const tuilessol = map.addTilesetImage('sol','fond');
        const arriereplan = map.createLayer('Sol', tuilessol, 0, 0);
        const obstacles = map.createLayer('Obstacle', tuilesobstacles, 0, 0);
        obstacles.setCollisionByExclusion(-1, true);
    
        ennemi = this.physics.add.sprite(900, 400, 'ennemi')
        ennemi.setScale(1.2)
        etatennemi = 1

        fin = this.physics.add.sprite(1000, 580, 'finish') 
        fin.setScale(1.5)
    
        player = this.physics.add.sprite(663, 690, 'perso');
        player.setCollideWorldBounds(true);
        player.body.height = 20;
        player.body.setOffset(0, 20);
    
        porte = this.physics.add.sprite(1000, 490, 'porte2')
        porte.setImmovable(true)

        cursors = this.input.keyboard.createCursorKeys();
        explosion = this.input.keyboard.addKeys('F');
        utilpot = this.input.keyboard.addKeys('E');

        if (comptobj1 == 1){
            this.afficheBomb = this.add.image(200, 50, 'interbombon')
        }
        else{
            this.afficheBomb = this.add.image(200, 50, 'interbomboff')
        }
        if (comptobj2 == 1){
            this.affichePot = this.add.image(350, 50, 'interpoton')
        }
        else{
            this.affichePot = this.add.image(350, 50, 'interpotoff')
        }
        if (comptobj3 == 1){
            this.afficheCle = this.add.image(500, 50, 'intercleon')
        }
        else{
            this.afficheCle = this.add.image(500, 50, 'intercleoff')
        }

        this.physics.add.collider(player, obstacles);

        this.physics.add.collider(player, porte, ouverture, null, this)

        this.physics.add.overlap(player, ennemi, hitEnnemi, null, this);
        this.physics.add.overlap(player, fin, hitFin, null, this);

        function ouverture(player, porteune){
            if (comptobj1 == 1){
                porte.destroy();
                etatscene2 = 1
                comptobj1 = 0
                this.afficheCle = this.add.image(500, 50, 'intercleoff')
            }
        }

        function hitFin(player, fin){
            this.scene.start("scenesix")
        }

        function hitEnnemi(player, ennemi){
            if (inv === false){
                inv = true;
                vie--;
                if (vie === 2){
                    this.afficheVie = this.add.image(100, 100, 'deux')
                }
                if (vie === 1){
                    this.afficheVie = this.add.image(100, 100, 'un')
                }
                player.setTint(0xff0000);
                if (vie === 0){
                    this.physics.pause();
                    this.afficheVie = this.add.image(100, 100, 'dead')
                    this.scene.start("scenecinq")
                }
            }  
        }

        function dropKey(player, cle){
            cle.disableBody(true, true);
            comptobj1 = 1;
            this.afficheCle = this.add.image(500, 50, 'intercleon')
        }

        this.anims.create({
            key: 'immo',
            frames: [ { key: 'perso', frame: 0} ],
            framerate : 10
        });

        this.anims.create({
            key: 'bas',
            frames: this.anims.generateFrameNumbers('perso', { start: 1, end: 2 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'haut',
            frames: this.anims.generateFrameNumbers('perso', { start: 3, end: 4 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'cote',
            frames: this.anims.generateFrameNumbers('perso', { start:7, end: 8 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'ennemi',
            frames: this.anims.generateFrameNumbers('ennemi', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        });
    }
    
    update() {

        if (vie == 2){
            this.afficheVie = this.add.image(100, 100, 'deux');
        }
        else if (vie == 1){
            this.afficheVie = this.add.image(100, 100, 'un');
        }
        else if (vie == 0){
            this.afficheVie = this.add.image(100, 100, 'dead');
        }
        else{
            this.afficheVie = this.add.image(100, 100, 'trois');
        }

        if (gameOver)
        {
            return;
        }

        player.setVelocity(0);
        ennemi.anims.play('ennemi', true);

        if (cursors.right.isDown)
        {
            player.setVelocityX(300);
            player.setFlipX(false);
            player.anims.play('cote', true);
        }
    
        else if (cursors.left.isDown)
        {
            player.setVelocityX(-300);
            player.setFlipX(true);
            player.anims.play('cote', true);
        }
    
        else if (cursors.up.isDown)
        {
            player.setVelocityY(-300);
            player.anims.play('haut', true);
        }
    
        else if (cursors.down.isDown)
        {
            player.setVelocityY(300);
            player.anims.play('bas', true);
        }

        else {
            player.anims.play('immo', true);
        }

        if (player.y >= 700){
            this.scene.start("scenedeux")
        }

        if (etatennemi == 0 && drop == 0){
            drop = 1
            dropcle = this.physics.add.sprite(ennemi.x, ennemi.y, 'key');
            this.physics.add.collider(player, dropcle, dropKey, null, this);
        }

        function dropKey(player, dropcle){
            dropcle.disableBody(true, true);
            comptobj1 = 1;
            this.afficheCle = this.add.image(500, 50, 'intercleon')
        }

        if (ennemi.x <= 900){
            ennemi.setVelocityX(200)
        }

        if (ennemi.x >= 1100){
            ennemi.setVelocityX(-200)
        }

        if (inv === true){
            timer++;
            if (timer === 180){
                timer = 0;
                player.setTint(0xffffff);
                inv = false;
            }
        }
    }
    
}