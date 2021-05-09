var player

var dropcle
var cle
var potion
var bombe
var thune

var textecle
var textepot
var textebomb

var gameOver
var cursors

var explosion
var utilpot

var platforms
var porte

var ennemi3
var ennemi2
var etatennemi

var left
var right
var up
var down
var balle

var timer = 0
var inv = false
var afficheVie
var affichepot
var affichebomb
var affichecle

class Scenefour extends Phaser.Scene{
    constructor(){
        super("scenequatre");
    }

    init(data){
    }

    preload() {
        this.load.tilemapTiledJSON('carte3', 'tiled/Carte3.json');
        this.load.image('tuile', 'assets/obstacles.png')
        this.load.image('door', 'assets/porte.png');
        this.load.image('fond', 'assets/sol.png');
        this.load.spritesheet('perso', 'assets/perso.png', { frameWidth: 46, frameHeight: 40 });
        this.load.spritesheet('ennemi', 'assets/monstre.png', { frameWidth: 50, frameHeight: 50 });
        this.load.image('menu', 'assets/menu.png');
        this.load.image('bomb', 'assets/bombe.png');
        this.load.image('pot', 'assets/potion.png');
        this.load.image('key', 'assets/cle.png');
        this.load.image('balle', 'assets/balle.png');
        this.load.image('trois', 'assets/trois.png');
        this.load.image('deux', 'assets/deux.png');
        this.load.image('un', 'assets/un.png');
        this.load.image('dead', 'assets/dead.png');
        this.load.image('interbombon', 'assets/interface_bombe_active.png');
        this.load.image('interbomboff', 'assets/interface_bombe_desactive.png');
        this.load.image('interpoton', 'interface_trousse_active.png');
        this.load.image('interpotoff', 'interface_trousse_desactive.png');
        this.load.image('intercleon', 'interface_cle_active.png');
        this.load.image('intercleoff', 'assets/interface_cle_desactive.png.png');
    }
    
    create() {
        drop = 0
        scenearrive = 2
        this.add.image(640, 360, 'menu')

        const map = this.make.tilemap({key: 'carte3'});
        const tuilesobstacles = map.addTilesetImage('obstacle','tuile');
        const tuilesportes = map.addTilesetImage('porte','door');
        const tuilessol = map.addTilesetImage('sol','fond');
        const arriereplan = map.createLayer('Sol', tuilessol, 0, 0);
        const portes = map.createLayer('Porte', tuilesportes, 0, 0)
        const obstacles = map.createLayer('Obstacle', tuilesobstacles, 0, 0);
        obstacles.setCollisionByExclusion(-1, true);
        portes.setCollisionByExclusion(-1, true)
    
        ennemi3 = this.physics.add.sprite(900, 270, 'ennemi')
        ennemi3.setScale(1.2)
        ennemi3.anims.play('ennemi', true);
        etatennemi = 1
        ennemi2 = this.physics.add.sprite(400, 270, 'ennemi')
        ennemi2.setScale(1.2)
        ennemi2.anims.play('ennemi', true);
    
        player = this.physics.add.sprite(70, 370, 'perso');
        player.setCollideWorldBounds(true);
        player.body.height = 20;
        player.body.setOffset(0, 20);

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

        if (etatpotion2 = 1){
            potion = this.physics.add.sprite(1155, 360, 'pot');
        }
        if (etatbombe2 = 1){
            bombe = this.physics.add.sprite(640, 360, 'bomb');
        }
    
        cursors = this.input.keyboard.createCursorKeys();
        explosion = this.input.keyboard.addKeys('F');
        utilpot = this.input.keyboard.addKeys('E');


        this.physics.add.collider(player, obstacles);

        this.physics.add.collider(player, portes, ouverture, null, this)

        this.physics.add.overlap(player, ennemi3, hitEnnemi, null, this);
        this.physics.add.overlap(player, ennemi2, hitEnnemi, null, this);

        this.physics.add.overlap(player, potion, dropPot, null, this);
        this.physics.add.overlap(player, bombe, dropBomb, null, this);

        function ouverture(player, portes){
            if (comptobj1 == 1){
                tuilesportes.destroy(true);
                comptobj1 = 0
                this.afficheCle = this.add.image(500, 50, 'intercleoff')
            }
        }

        function hitEnnemi(player, ennemi3){
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

        function dropPot(player, potion){
            potion.disableBody(true, true);
            comptobj2 = 1;
            etatpotion2 = 0
            this.affichePot = this.add.image(350, 50, 'interpoton')
        }
        function dropBomb(player, bombe){
            bombe.disableBody(true, true);
            comptobj3 = 1;
            etatbombe2 = 0
            this.afficheBomb = this.add.image(200, 50, 'interbombon')
        }

        /* Animations*/

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
        
        if (gameOver) {
            return;
        }

        player.setVelocity(0);

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

        if (player.x <= 30){
            this.scene.start("scenedeux")
        }

        const dynamite = Phaser.Input.Keyboard.JustDown(explosion.F);
        if (comptobj3 == 1 && dynamite){
            comptobj3 = 0
            ennemi3.disableBody(true, true);
            ennemi2.disableBody(true, true);
            etatennemi = 0
            this.afficheBomb = this.add.image(200, 50, 'interbomboff')
        }

        const heal = Phaser.Input.Keyboard.JustDown(utilpot.E);
        if (comptobj2 == 1 && heal){
            comptobj2 = 0
            vie = 3
            this.afficheVie = this.add.image(100, 100, 'trois')
            this.affichePot = this.add.image(350, 50, 'interpotoff')
        }

        if (etatennemi == 0 && drop == 0){
            drop = 1
            dropcle = this.physics.add.sprite(ennemi3.x, ennemi3.y, 'key');
            this.physics.add.collider(player, dropcle, dropKey, null, this);
        }

        function dropKey(player, dropcle){
            dropcle.disableBody(true, true);
            comptobj1 = 1;
            this.afficheCle = this.add.image(500, 50, 'intercleon')
        }

        if (ennemi3.y <= 270){
            ennemi3.setVelocityY(200)
        }

        if (ennemi3.y >= 600){
            ennemi3.setVelocityY(-200)
        }

        if (ennemi2.y <= 270){
            ennemi2.setVelocityY(200)
        }

        if (ennemi2.y >= 600){
            ennemi2.setVelocityY(-200)
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