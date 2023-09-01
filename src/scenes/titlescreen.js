import Phaser from '../lib/phaser.js'

export default class Title extends Phaser.Scene

{

constructor()
{
super('title')
}

currentSublevel = 0


preload()
{
                this.load.atlas(
                'spritesheet',
                './src/assets/spritesheet.png',
                './src/assets/spritesheet.json'
              )


    this.load.image('play', './src/assets/Buttons/play.png')
    this.load.image('title', './src/assets/Game/title.png')
    this.load.image('background', './src/assets/Game/background.jpg')
    this.load.image('congratulations', './src/assets/Game/welldone.png')
    this.load.image('instructions', './src/assets/Game/howtoplay.png')
    this.load.image('continue', './src/assets/Buttons/continue.png')
    this.load.image('close', './src/assets/Buttons/close.png')

    this.load.image('basket', './src/assets/Game/basket.png')
    this.load.image('list', './src/assets/Game/list.png')

    this.load.audio('celebrate', './src/assets/Sounds/celebrate.mp3')
    this.load.audio('swish', './src/assets/Sounds/swish.mp3')
    this.load.audio('correct', './src/assets/Sounds/correct.mp3')
    this.load.audio('incorrect', './src/assets/Sounds/incorrect.wav')
    this.load.audio('win', './src/assets/Sounds/win.mp3')
    this.load.audio('music', './src/assets/Sounds/music.mp3')

    this.load.spritesheet('walkingMessy', './src/assets/Anim/walk.png', { frameWidth: 482, frameHeight: 388 });


    
}

create()
{


  this.scene.run('ui-scene')

    this.background = this.add.image(0, 0, 'background')
    this.title = this.add.image(1400, 450, 'title')

    this.start = this.add.image(1050, 450, 'play').setInteractive()

   
    this.start.once('pointerdown', () => {

        this.scene.start('level1',  {
            level: 0
        })

        this.scene.run('instructions',  {
            level: 0
        })

        })

this.initResize()

}


          // ------ RESIZE ------ //
          initResize() {
            console.log("resized")
        
            this.scale.on('resize', () => {
              this.resizeDisplay();
            });
            this.resizeDisplay();
          }
        
          resizeDisplay() {
        
        
            
            let h = this.game.canvas.height;
            let w = this.game.canvas.width;
            const cX = w / 2;
            const cY = h / 2;
            const scale = this.game.canvas.height / 450;
            console.log("w: "+ w)
            console.log("h: "+ h)
            console.log("cX: "+cX)
            console.log("cY: "+cY)
        
        
            // Bg
            this.background.setScale(scale*1.2).setPosition(cX, cY);
            this.title.setScale(scale*0.45).setPosition(cX, cY);

            this.start.setScale(scale*0.5).setPosition(cX+100*scale, cY+100*scale);
          }


}