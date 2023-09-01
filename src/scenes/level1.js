import Phaser from '../lib/phaser.js'

export default class level1 extends Phaser.Scene
{
    timedEvent
    firstLevel
    shoppingItem1 = []
    shoppingItem2 = []
    shoppingItem3 = []
    shoppingItem4 = []
    shoppingItem5 = []
    shoppingListL1
    shoppingListL2
    shoppingListL3
    basket
    dropZoneBasket
    centreX = 525
    centreY = 225
    startX1 = -300
    startX2 = -150
    startX3 = 0
    startX4 = 150
    startX5 = 300
    startY1 = 450
    startY2 = 450
    startY3 = 450
    startY4 = 450
    startY5 = 450
    numbersPoolL1a=[1,2,3]
    numbersPoolL1b=[2,3,1]
    numbersPoolL2a=[2,3,4]
    numbersPoolL2b=[2,4,3]
    numbersPoolL3a=[4,5,6]
    numbersPoolL3b=[3,2,1]
    numbersPool = []
    sublevel=0
    level=0
    itemsInBasket1 = []
    itemsInBasket2 = []
    itemsInBasket3 = []
    answerbox
    firstNumber
    secondNumber
    total
    currentItem
    questionIcon
    numcorrect =0
    itemboxes = []
    indexes
    currentAnswer
    xCoord=[]
    yCoord=[]
    swish
    dock
    background
    background2
    dockItemScale

    constructor() 
    {
    super('level1')
    }

    init (data)
    {

        this.level= data.level
        this.sublevel = 0

    }

    preload()
        {
            this.scene.run('music')
            
            // this.load.atlas(
            //     'cloud',
            //     './src/assets/Anim/cloud/cloud.png',
            //     './src/assets/Anim/cloud/cloud.json'
            //   )
            this.gameWidth = this.sys.game.canvas.width
            this.gameHeight = this.sys.game.canvas.height

        

            
              this.load.atlas(
                'cloudbig',
                './src/assets/Anim/cloud/cloudbig-1.png',
                './src/assets/Anim/cloud/cloudbig-1.json'
              )

            //   this.load.multiatlas(
            //     'cloudbig',
            //     './src/assets/Anim/cloud/cloudbig-1.json'
            //   )

            //   this.load.multiatlas('cloudbig', './src/assets/Anim/cloud/cloudbig-1.json');
        }
    

    create()
    {

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('walkingMessy', { start: 0, end: 5 }),
            frameRate: 4,
            repeat: 2
        });

        

        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                array[i] = array[j];
                array[j] = temp;
              }
          }
        
        
        // Shopping list array
        if(this.level==0){this.shoppingListL1=['fruit1', 'fruit2', 'fruit3', 'fruit4', 'fruit5']}
        if(this.level==1){this.shoppingListL1=['level21', 'level22', 'level23', 'level24', 'level25']}
        if(this.level==2) {this.shoppingListL1=['level31', 'level32', 'level33', 'level34', 'level35']}
        
        
        // Use to determine which items are on the shopping list
        this.indexes = [0,1,2,3,4]
        shuffle(this.indexes)
        


        this.background = this.add.image(this.centreX, this.centreY, 'background')

        // this.basket = this.add.image(0, 0, 'basket').setScale(1)

        this.basket = this.add.sprite(0, 0, 'walkingMessy')


        // this.background2 = this.add.image(this.centreX, this.centreY, 'background')

        // this.cloud = this.add.sprite(1500, 400, 'cloud', 'pim_okido_cloud_rain_00000.png')
        // const frameNames = this.anims.generateFrameNames('cloud', {
        //     start: 0, end: 44, zeroPad: 5,
        //     prefix: 'pim_okido_cloud_rain_', suffix: '.png'
        // })

        // this.cloudbig = this.add.sprite(1500, 400, 'cloudbig', 'pim_okido_cloud_rain_00000.png')
        // const frameNames = this.anims.generateFrameNames('cloudbig', {
        //     start: 0, end: 17, zeroPad: 5,
        //     prefix: 'pim_okido_cloud_rain_', suffix: '.png'
        // })

        // this.anims.create({ key: 'rain', frames: frameNames, frameRate: 10, repeat: -1 })
        // this.cloudbig.anims.play('rain')
    






        
    //    for(let i=0; i<9; i++){
    //         this.itemsInBasket1[i]=
    //             this.add.image(x1[i], y1[i], 'spritesheet', this.shoppingListL1[this.sublevel]+'.png')
            
    //     }

 //select the first and second numbers

        this.numbersPool=[
            {number1:this.numbersPoolL1a, number2: this.numbersPoolL1b},
            {number1:this.numbersPoolL2a, number2: this.numbersPoolL2b},
            {number1:this.numbersPoolL3a, number2: this.numbersPoolL3b}
        ]

      
        this.number1 = this.numbersPool[this.level].number1[Phaser.Math.Between(0, 2)]
        this.number2 = this.numbersPool[this.level].number2[this.sublevel]
        this.total = this.number1 + this.number2

        

        // shopping list

        this.item1 = this.add.image(225, 150, 'spritesheet', this.shoppingListL1[this.indexes[0]]+'.png').setScale(0.4).setDepth(100)
        this.item2 = this.add.image(275, 150,'spritesheet', this.shoppingListL1[this.indexes[1]]+'.png').setScale(0.4).setDepth(100)
        this.item3 = this.add.image(325, 150, 'spritesheet',this.shoppingListL1[this.indexes[2]]+'.png').setScale(0.4).setDepth(100)

       

        this.currentItem = this.add.image(200, 250,'spritesheet', this.shoppingListL1[this.indexes[0]]+'.png').setScale(0.5).setDepth(100)
        this.firstNumber = this.add.text(250, 250, this.number1 , {
            fontSize: 48, color: 'black'}).setOrigin(0.5).setDepth(100)
        this.addsymbol = this.add.image(280, 250,'spritesheet', 'add.png').setDepth(100).setScale(0.4)
        this.secondNumber = this.add.text(310, 250, this.number2, {
            fontSize: 48, color: 'black'}).setOrigin(0.5).setDepth(100)
        // let equals = this.add.text(800, 450, '=', {
        //     fontSize: 48, color: 'black'}).setOrigin(0.5)
        this.answerbox = this.add.image(380, 250, 'spritesheet', 'box.png').setDepth(100).setScale(0.6)
        this.currentAnswer = this.add.text(395, 250, '0', {
            fontSize: 48, color: 'black'}).setOrigin(0.5).setDepth(101)
        this.questionIcon = this.add.image(470, 250, 'spritesheet', 'question.png').setInteractive().setDepth(100)


        this.questionIcon.on('pointerdown', () => {
            if(this.numcorrect==this.total){
                this.questionIcon.setTexture('spritesheet', 'questionYes.png')
                this.time.delayedCall(1500, this.startNewSublevel, [], this)

            } else {
                this.questionIcon.setTexture('spritesheet','questionNo.png')
                this.time.delayedCall(1500, returntoNeutral, [], this)
                function returntoNeutral(){
                    this.questionIcon.setTexture('spritesheet', 'question.png')
                }

            }
            


        })

        //Place dock
        this.dock = this.add.image(525, 450,'spritesheet', 'dock.png')


        // Place draggables

        this.shoppingItems1 = this.physics.add.group()
        for(let i=0; i<9; i++){
            this.shoppingItem1[i] = this.dispenseshoppingItem('spritesheet', this.shoppingListL1[0] +'.png', this.startX1, this.startY1).setDepth(101)
            this.shoppingItem2[i] = this.dispenseshoppingItem('spritesheet', this.shoppingListL1[1] +'.png', this.startX2, this.startY2)
            this.shoppingItem3[i] = this.dispenseshoppingItem('spritesheet', this.shoppingListL1[2] +'.png', this.startX3, this.startY3)
            this.shoppingItem4[i] = this.dispenseshoppingItem('spritesheet', this.shoppingListL1[3] +'.png', this.startX4, this.startY4)
            this.shoppingItem5[i] = this.dispenseshoppingItem('spritesheet', this.shoppingListL1[4] +'.png', this.startX5, this.startY5)
            this.shoppingItem1[i].position = 8-i
            this.shoppingItem2[i].position = 8-i
            this.shoppingItem3[i].position = 8-i
            this.shoppingItem4[i].position = 8-i
            this.shoppingItem5[i].position = 8-i

        }

        this.allShoppingItems = [this.shoppingItem1, this.shoppingItem2, this.shoppingItem3, this.shoppingItem4, this.shoppingItem5]

        
        // for(let i=0; i<9; i++){
        // this.allShoppingItems[this.indexes[this.sublevel]][i].iscorrect=true
        // this.shoppingItem1[i].startX = this.startX1
        // this.shoppingItem2[i].startX = this.startX2
        // this.shoppingItem3[i].startX = this.startX3
        // this.shoppingItem4[i].startX = this.startX4
        // this.shoppingItem5[i].startX = this.startX5
        // }


        //initialise the number correct
        this.numcorrect = 0

        // show the active objectstate of the draggable when dragged
        this.input.on('gameobjectover', (pointer, gameObject) =>
        {


        })





        //shopping list
        this.list = this.add.image(210, 280, 'list').setScale(1)

        // Move the draggable with the pointer
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        // Release the draggable
        this.input.on('dragend', (pointer, gameObject) => {

        const indropZoneBasket = Phaser.Geom.Intersects.RectangleToRectangle(
            gameObject.getBounds(),
            this.dropZoneBasket
        )

            // note where the draggable has been released
            const x = gameObject.x;
            const y = gameObject.y;

            // If the correct draggable is dropped in the drop zone...
            if (
                (gameObject.iscorrect)
                 && 
                 (indropZoneBasket)
                 &&
                 (!gameObject.inbasket)
            )
            {
                this.sound.play('correct')
                gameObject.inbasket = true
                // this.itemsInBasket1[numcorrect].setScale(1)
                gameObject.setAlpha(0)
                gameObject.x = this.xCoord[this.sublevel][gameObject.position]
                gameObject.y = this.yCoord[this.sublevel][gameObject.position]
                this.tweens.add({
                    targets: gameObject,
                    props: {
                        scale: 0.3,
                        alpha: { value:1, duration: 1200 }
                    },
                    ease: 'Sine.easeInOut',
                })
                this.numcorrect++

                this.currentAnswer.text = this.numcorrect


                // End the round


                //prevent player from interacting
                // this.removeInteractiveElements()

                // Transition scene
                    // this.timedEvent = this.time.delayedCall(2000, this.playTransition, [], this)
                // }
            } 
            else {

                this.sound.play('incorrect')
                // Set draggable back to idle objectstate
                
                if(gameObject.inbasket == true){
                    gameObject.inbasket = false
                    this.numcorrect--
                    this.currentAnswer.text = this.numcorrect
                    
                }
                this.tweens.add({
                    targets: gameObject,
                    props: {
                        x: { value: gameObject.startX, duration: 800 },
                        y: { value: this.startY1, duration: 800 },
                        scale: this.dockItemScale
                    },
                    ease: 'Sine.easeInOut',
                })
            }
            })

            this.initResize()
       
       
        }

        dispenseshoppingItem(spritesheet,shoppingItem, x, y){
            return this.shoppingItems1.create(x, y, spritesheet,shoppingItem).setInteractive({ draggable: true }).setDepth(1)

            // return this.add.image(x, y, shoppingItem).setInteractive({ draggable: true })
             
        }



        removeInteractiveElements(){

            this.object1.disableInteractive()

        }

        makeInteractive(){
            this.object1.setInteractive()

        }

        playTransition() {
           
           
            let continueButton = this.add.image(525, 225, 'continue').setInteractive().setDepth(102)
            this.sound.play('win')
            this.basket.anims.play('walk', false)
            continueButton.once('pointerdown', () => {
                if(this.level==0){
                    
                    this.scene.start('level1',  {
                        level: 1,
                    }) 
                }
                else if(this.level==1){
                    
                    this.scene.start('level1',  {
                        level: 2,

                    }) 
                }
                else if(this.level==2){
                    
                    this.scene.start('congratulations') 
                }
                
            })
        }

        startNewSublevel(){
            this.sound.play('swish')
            for(let i = 0; i<5; i++){
                for(let j =0; j<9; j++){
                    this.allShoppingItems[i][j].iscorrect=false
                }
            }
            

            if(this.sublevel==2){
                for(let i=0; i<9; i++){
                    this.allShoppingItems[this.sublevel-1][i].iscorrect=false
                }
                this.playTransition()
            } else {
                this.sublevel++
                for(let i=0; i<9; i++){
                    this.allShoppingItems[this.sublevel-1][i].iscorrect=false
                }
                // this.itemboxes[this.sublevel].setTexture('spritesheet', 'boxCorrect.png')
                
                this.currentItem.setTexture('spritesheet', this.shoppingListL1[this.indexes[this.sublevel]]+'.png')
                this.questionIcon.setTexture('spritesheet', 'question.png')
                this.number1 = this.numbersPool[this.level].number1[Phaser.Math.Between(0, 2)]
                this.number2 = this.numbersPool[this.level].number2[this.sublevel]
                this.total = this.number1+this.number2
                this.firstNumber.text= this.number1
                this.secondNumber.text= this.number2
                this.numcorrect = 0
                
                this.currentAnswer.text = this.numcorrect
                for(let i=0; i<9; i++){
                    this.allShoppingItems[this.sublevel-1][i].iscorrect=false
                    this.allShoppingItems[this.indexes[this.sublevel]][i].iscorrect=true
                }
            }
            

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
    const scale = this.game.canvas.height / this.background.height;

    // Bg
    this.background.setScale(scale).setPosition(cX, cY);


    // Basket
    this.basket
    .setScale(scale*2)
    .setPosition(cX+290*scale, 420*scale)
    //   .setScale(scale*1.5)
    //   .setPosition(cX+380*scale, 380*scale)

    //List
    this.list
    .setScale(scale*1.7)
    .setPosition(cX-400*scale, 550*scale)

    this.item1
    .setScale(scale*0.8)
    .setDepth(1)
    .setPosition(cX-400*scale, 350*scale)

    this.item2
    .setDepth(1)
    .setScale(scale*0.8)
    .setPosition(cX-300*scale, 350*scale)

    this.item3
    .setScale(scale*0.8)
    .setDepth(1)
    .setPosition(cX-200*scale, 350*scale)



    this.dock
    .setScale(scale)
    .setDepth(11)
    .setPosition(525, (800)*scale)

    // this.startX1 = this.startX1*scale+250
    // this.startX2 = this.startX2*scale+250
    // this.startX3 = this.startX3*scale+250
    // this.startX4 = this.startX4*scale+250
    // this.startX5 = this.startX5*scale+250

    for(let i=0; i<9; i++){
        this.shoppingItem1[i]
        .setScale(scale)
        .setDepth(11)
        .setPosition(cX+(this.startX1*scale), (800)*scale)

        this.shoppingItem2[i]
        .setScale(scale)
        .setDepth(11)
        .setPosition(cX+(this.startX2*scale), (800)*scale)

        this.shoppingItem3[i]
        .setScale(scale)
        .setDepth(11)
        .setPosition(cX+(this.startX3*scale), (800)*scale)

        this.shoppingItem4[i]
        .setScale(scale)
        .setDepth(11)
        .setPosition(cX+(this.startX4*scale), (800)*scale)

        this.shoppingItem5[i]
        .setScale(scale)
        .setDepth(11)
        .setPosition(cX+(this.startX5*scale), (800)*scale)
    }
    this.currentItem
    .setScale(scale*0.7)
    .setPosition(cX-465*scale, 550*scale)

    this.firstNumber
    .setDepth(100)
    .setScale(scale*1.2)
    .setPosition(cX-420*scale, 550*scale)

    this.addsymbol
    .setDepth(100)
    .setScale(scale*0.7)
    .setPosition(cX-370*scale, 550*scale)

    this.secondNumber
    .setDepth(100)
    .setScale(scale*1.2)
    .setPosition(cX-320*scale, 550*scale)

    this.answerbox
    .setDepth(100)
    .setScale(scale*0.7)
    .setPosition(cX-240*scale, 550*scale)

    this.currentAnswer
    .setDepth(100)
    .setScale(scale*1.2)
    .setPosition(cX-220*scale, 550*scale)

    this.questionIcon
    .setDepth(100)
    .setScale(scale)
    .setPosition(cX-145*scale, 550*scale)

    //hit zone

        // Dropzone
        const b = this.basket;
        this.dropZoneBasket = new Phaser.Geom.Rectangle(
          b.x - b.displayWidth / 2,
          b.y - b.displayHeight / 2,
          b.displayWidth,
          b.displayHeight
        );


        //set up the final positions of each item
        let x1 = [cX+30*scale, cX+60*scale,cX+30*scale, cX+60*scale, cX+30*scale, cX+80*scale, cX+110*scale, cX+80*scale, cX+110*scale]
        let x2 = [cX+120*scale, cX+150*scale,cX+120*scale, cX+150*scale, cX+120*scale, cX+180*scale, cX+210*scale, cX+180*scale, cX+210*scale]
        let x3 = [cX+260*scale, cX+230*scale,cX+260*scale, cX+240*scale, cX+270*scale, cX+240*scale, cX+270*scale, cX+250*scale, cX+280*scale]
        this.xCoord = [x1,x2, x3]
        let y1 = [480*scale, 450*scale, 420*scale ,390*scale, 360*scale, 480*scale, 450*scale, 420*scale ,390*scale ]
        let y2 = [490*scale, 460*scale, 430*scale ,400*scale, 370*scale, 490*scale, 460*scale, 430*scale ,400*scale ]
        let y3 = [490*scale, 470*scale, 450*scale ,430*scale, 410*scale, 390*scale, 370*scale, 350*scale ,330*scale ]
        this.yCoord = [y1,y2, y3]


//dock items

        this.dockItemScale = scale
        for(let i=0; i<9; i++){
            this.allShoppingItems[this.indexes[this.sublevel]][i].iscorrect=true
            this.shoppingItem1[i].startX = cX+(this.startX1*scale)
            this.shoppingItem2[i].startX = cX+(this.startX2*scale)
            this.shoppingItem3[i].startX = cX+(this.startX3*scale)
            this.shoppingItem4[i].startX = cX+(this.startX4*scale)
            this.shoppingItem5[i].startX = cX+(this.startX5*scale)
            }

            this.startY1 = 800*scale
    



  }
        


}

