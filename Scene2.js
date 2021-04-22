var player
var platforms
var dropcle
var objetun
var objetdeux
var objettrois
var comptobj1
var comptobj2
var comptobj3
var porte
var thune
var gameOver
var cursors
var explosion
var ennemi
var etatennemi
var tirballe
var balle

class Scenetwo extends Phaser.Scene{
    constructor(){
        super("scenedeux");
    }

    init(data){
    }

    preload() {
        this.load.tilemapTiledJSON('carte2', 'tiled/Carte.json');
        this.load.image('tuile', 'assets/obstacles.png')
        this.load.image('door', 'assets/porte.png');
        this.load.image('fond', 'assets/sol.png');
        this.load.spritesheet('perso', 'assets/perso.png', { frameWidth: 30, frameHeight: 60 });
        this.load.spritesheet('ennemi', 'assets/monstre.png', { frameWidth: 21, frameHeight: 40 });
        this.load.image('menu', 'assets/menu.png');
        /*this.load.image('platform', 'assets/platform.png');*/
        this.load.image('objet', 'assets/objet.png');
        this.load.image('balle', 'assets/balle.png');
    }
    
    create() {
        this.add.image(640, 360, 'menu')

        const map = this.make.tilemap({key: 'carte2'});
        const tuilesobstacles = map.addTilesetImage('obstacle','tuile');
        const tuilesportes = map.addTilesetImage('porte','door');
        const tuilessol = map.addTilesetImage('sol','fond');
        const portes = map.createStaticLayer('Porte', tuilesportes, 0, 0)
        const arriereplan = map.createStaticLayer('Sol', tuilessol, 0, 0);
        const obstacles = map.createStaticLayer('Obstacle', tuilesobstacles, 0, 0);
        obstacles.setCollisionByExclusion(-1, true);
        portes.setCollisionByExclusion(-1, true)
    
        /*platforms = this.physics.add.staticGroup();
        platforms.create(400, 360, 'platform')*/
    
        ennemi = this.physics.add.sprite(800, 360, 'ennemi')
        etatennemi = 1
    
        player = this.physics.add.sprite(300, 360, 'perso');
        player.setCollideWorldBounds(true);
        player.body.height = 30;
        player.body.setOffset(0, 30);

        objetdeux = this.physics.add.sprite(750, 200, 'objet');
        objettrois = this.physics.add.sprite(750, 500, 'objet');

        /*porte = this.physics.add.staticGroup();
        porte.create(900, 360, 'door')*/
    
        cursors = this.input.keyboard.createCursorKeys();
        explosion = this.input.keyboard.addKeys('F');
        tirballe = this.input.keyboard.addKeys('Z','Q','S','D');
    
        /*this.physics.add.collider(player, platforms)*/

        this.physics.add.collider(player, obstacles);
        /*this.physics.add.collider(player, portes);*/

        this.physics.add.collider(player, portes, nicoleouvre, null, this)

        this.physics.add.overlap(player, ennemi, hitEnnemi, null, this);

        this.physics.add.overlap(player, objetun, objet1, null, this);
        this.physics.add.overlap(player, objetdeux, objet2, null, this);
        this.physics.add.overlap(player, objettrois, objet3, null, this);

        function nicoleouvre(player, portes){
            if (comptobj1 == 1){
                portes.disableBody(true, true);
            }
        }

        function hitEnnemi(player, ennemi){
            player.setTint(0xFF6E6E)
            this.physics.pause();
            gameOver = true;
        }

        function objet1(player, objetun){
            objetun.disableBody(true, true);
            comptobj1 = 1;
            this.add.text(20,20, "Objet 1")
        }
        function objet2(player, objetdeux){
            objetdeux.disableBody(true, true);
            comptobj2 = 1;
            this.add.text(200,20, "Objet 2")
        }
        function objet3(player, objettrois){
            objettrois.disableBody(true, true);
            comptobj3 = 1;
            this.add.text(400,20, "Objet 3")
        }
    }
    
    update() {

        console.log("scene 2")
        
        if (gameOver)
        {
            return;
        }
        player.setVelocity(0);
    
        if (cursors.right.isDown)
        {
            player.setVelocityX(300);
            player.setFlipX(false);
        }
    
        else if (cursors.left.isDown)
        {
            player.setVelocityX(-300);
            player.setFlipX(true);
        }
    
        if (cursors.up.isDown)
        {
            player.setVelocityY(-300);
        }
    
        if (cursors.down.isDown)
        {
            player.setVelocityY(300);
        }

        if (player.y <= 50){
            this.scene.start("scenetrois")
        }

        const dynamite = Phaser.Input.Keyboard.JustDown(explosion.F);
        if (comptobj3 == 1 && dynamite){
            comptobj3 == 0
            ennemi.disableBody(true, true);
            etatennemi = 0
        }

        
        /*if (tirballe.D.isDown){
            console.log("test")
            balle = this.physics.add.sprite(player.x, player.y, 'balle')
            balle.setVelocityX(100);
        }*/

        if (etatennemi == 0){
            dropcle = this.physics.add.sprite(ennemi.x, ennemi.y, 'objet');
            this.physics.add.overlap(player, dropcle, objet1, null, this);
        }

        function objet1(player, dropcle){
            dropcle.disableBody(true, true);
            comptobj1 = 1;
            this.add.text(20,20, "Objet 1")
        }
    }
    
}