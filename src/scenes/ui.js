import Phaser from  '../lib/phaser.js'

export default class UIScene extends Phaser.Scene
{
	constructor()
	{
		super('ui-scene')
	}

    preload()
    {
        this.load.image('help', './src/assets/Buttons/howtoplay.png')
        this.load.image('mute', './src/assets/Buttons/mute.png')
        this.load.image('unmute', './src/assets/Buttons/unmute.png')
    }

	create()

    {

        this.music = this.sound.add('music', {volume: 0.1});
        this.music.play()
        this.music.loop = true
        let isMuted = false
        this.mutebutton = this.add.image(50, 50, 'mute').setScale(0.8)
        this.mutebutton.setInteractive().on('pointerdown', pointer =>
        {


           if(isMuted){
            
            
            isMuted= false
            this.mutebutton.setTexture('mute')
            this.music.resume()
            console.log("start")

           } else {
            this.mutebutton.setTexture('unmute')
            this.music.pause()

            isMuted=true
           }
        })

        this.helpbutton = this.add.image(160, 50, 'help').setScale(0.8)
        this.helpbutton.setInteractive().on('pointerdown', pointer =>
        {
            this.scene.run('instructions')
        });

        // listen to 'update-count' event and call `updateCount()`
        // when it fires
        // eventsCenter.on('pause', this.updateCount, this)



        // clean up when Scene is shutdown
        // this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
        //     eventsCenter.off('update-count', this.updateCount, this)
        // })

        // this.initResize()

    }


          // ------ RESIZE ------ //
          initResize() {
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
            const scale = this.game.canvas.height / 1050;
        
            // Bg
            // this.background.setScale(scale).setPosition(cX, cY);
        
            // Basket
            this.helpbutton
              .setPosition(cX-400, 100)
              .setScale(0.8)

            this.mutebutton
            .setPosition(cX-250, 100)
            .setScale(0.8)


          }

          

}