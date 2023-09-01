import Phaser from '../lib/phaser.js'
export default class GameOver extends Phaser.Scene

{
constructor()
{
super('congratulations')
}


preload()
{
    // this.scene.run('ui-scene')
    this.load.image('playagain', './src/assets/Buttons/playagain.png')
}

create()
{
    const width = this.scale.width
    const height = this.scale.height

    this.games = ['level1pm', 'level1ff', 'level1po']
    this.level1games = ['level1pm', 'level1ff', 'level1po']
    this.level2games = ['level2pm', 'level2ff', 'level2po']
    this.level3games = ['level3pm', 'level3ff', 'level3po']
    this.bonusLevels = ['bonus', 'bonus', 'bonus']
    this.levels = [0,1,2]
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    shuffle(this.levels)
    console.log("level order: "+ this.levels)


    this.congratulations = this.add.image(700, 450, 'congratulations');

    this.input.keyboard.once('keydown-SPACE', () => {this.scene.start('level1ff')})

    this.playagain = this.add.image(width * 0.5, height * 0.7, 'playagain').setInteractive()

    this.playagain.once('pointerdown', () => {


        this.scene.stop()

        this.scene.start('level1',  {
            level: 0,
            currentSublevel: 0
        })
    
    
    
    });
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
            this.congratulations.setScale(scale*0.5).setPosition(cX, cY);

            this.playagain.setScale(scale*0.5).setPosition(cX, cY+100*scale);
          }

}