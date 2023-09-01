import Phaser from  '../lib/phaser.js'

export default class instructions extends Phaser.Scene
{
	constructor()
	{
		super('instructions')
	}

	create()

    {
        this.background = this.add.image(0, 0, 'background')
        this.instructions = this.add.image(700, 450, 'instructions')
        this.closeButton = this.add.image(700, 450, 'close')
        this.closeButton.setInteractive().on('pointerdown', pointer =>
        {
            this.game.scene.resume(this.currentScene)
            this.scene.stop()
        // this.scene.start('level1',  {
        //     level: 0
        // })
        });

        this.initResize()

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
    this.background.setScale(scale*1.2).setPosition(cX, cY);
    this.instructions.setScale(scale*1.2).setPosition(cX, cY);
    this.closeButton.setScale(scale).setPosition(cX+scale*750, cY-scale*400);
  }


}