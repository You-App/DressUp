class Model{
    constructor(){
        this.context = this;
        this.modelLibrary = new ModelLibrary();
        this.bodyBaseFrame = this.modelLibrary.bodyBaseFrames[0];

        this.hairBackStyle = 0;
        this.hairBackColour = 0;
        this.fringeStyle = 0;
        this.fringeColour = 0;
        this.eyesStyle = 0;
        this.eyesColour = 0;
        this.mouthStyle = 0;
        this.eyebrowsStyle = 0;
        this.braStyle = 0;
        this.underwearStyle = 1;
        this.legAccessoryStyle = 1;

    }

    update(){
        this.hairBackFrame = this.modelLibrary.hairBackFrames[this.hairBackStyle][this.hairBackColour];
        this.eyebrowsFrame = this.modelLibrary.eyebrowFrames[this.eyebrowsStyle];
        this.eyesFrame = this.modelLibrary.eyeFrames[this.eyesStyle][this.eyesColour];
        this.mouthFrame = this.modelLibrary.mouthFrames[this.mouthStyle];
        this.fringeFrame = this.modelLibrary.fringeFrames[this.fringeStyle][this.fringeColour];
        this.braFrame = this.modelLibrary.braFrames[this.braStyle];
        this.underwearFrame = this.modelLibrary.underwearFrames[this.underwearStyle];
        this.legAccessorieFrame = this.modelLibrary.legAccessories[this.legAccessoryStyle];
    }

    render(context){
        context.drawImage(this.modelLibrary.backHairSpritesheet, this.hairBackFrame.getX(), this.hairBackFrame.getY(), this.hairBackFrame.getWidth(), this.hairBackFrame.getHeight(), -5, 10, this.hairBackFrame.getWidth(), this.hairBackFrame.getHeight() );
        context.drawImage(this.bodyBaseFrame, 120, 100);
        context.drawImage(this.modelLibrary.eyebrowsSpriteSheet, this.eyebrowsFrame.getX(), this.eyebrowsFrame.getY(), this.eyebrowsFrame.getWidth(), this.eyebrowsFrame.getHeight(), 153, 132, this.eyebrowsFrame.getWidth(), this.eyebrowsFrame.getHeight() );
        context.drawImage(this.modelLibrary.eyesSpriteSheet, this.eyesFrame.getX(), this.eyesFrame.getY(), this.eyesFrame.getWidth(), this.eyesFrame.getHeight(), 147, 177, this.eyesFrame.getWidth(), this.eyesFrame.getHeight() );
        context.drawImage(this.modelLibrary.mouthSpriteSheet, this.mouthFrame.getX(), this.mouthFrame.getY(), this.mouthFrame.getWidth(), this.mouthFrame.getHeight(), 198, 254, this.mouthFrame.getWidth(), this.mouthFrame.getHeight() );
        context.drawImage(this.modelLibrary.underwearSpriteSheet, this.underwearFrame.getX(), this.underwearFrame.getY(), this.underwearFrame.getWidth(), this.underwearFrame.getHeight(), 142, 446, this.underwearFrame.getWidth(), this.underwearFrame.getHeight() );
        context.drawImage(this.modelLibrary.brasSpriteSheet, this.braFrame.getX(), this.braFrame.getY(), this.braFrame.getWidth(), this.braFrame.getHeight(), 145, 290, this.braFrame.getWidth(), this.braFrame.getHeight() );
        context.drawImage(this.modelLibrary.legAcessoriesSpriteSheet, this.legAccessorieFrame.getX(), this.legAccessorieFrame.getY(), this.legAccessorieFrame.getWidth(), this.legAccessorieFrame.getHeight(), 155, 432, this.legAccessorieFrame.getWidth(), this.legAccessorieFrame.getHeight() );
        context.drawImage(this.modelLibrary.fringesSpritesheet, this.fringeFrame.getX(), this.fringeFrame.getY(), this.fringeFrame.getWidth(), this.fringeFrame.getHeight(), -5, 10, this.fringeFrame.getWidth(), this.fringeFrame.getHeight() );
    }


    nextBackHair() {
        this.hairBackStyle++;
        if(this.hairBackStyle >= this.modelLibrary.backHairCount) {
            this.hairBackStyle = 0;
        }
    }

    previousBackHair() {
        this.hairBackStyle--;

        if(this.hairBackStyle < 0){
            this.hairBackStyle = this.modelLibrary.backHairCount - 1;
        }
    }

    nextFringe() {
        this.fringeStyle++;
        if(this.fringeStyle >= this.modelLibrary.fringeCount) {
            this.fringeStyle = 0;
        }
    }

    previousFringe() {
        this.fringeStyle--;

        if(this.fringeStyle < 0){
            this.fringeStyle = this.modelLibrary.fringeCount - 1;
        }
    }

    nextEyebrows() {
        this.eyebrowsStyle++;

        if(this.eyebrowsStyle >= this.modelLibrary.eyebrowsCount) {
            this.eyebrowsStyle = 0;
        }
    }

    previousEyebrows() {
        this.eyebrowsStyle--;

        if(this.eyebrowsStyle < 0){
            this.eyebrowsStyle = this.modelLibrary.eyebrowsCount - 1;
        }
    }

    nextBra() {
        this.braStyle++;

        if(this.braStyle >= this.modelLibrary.brasCount) {
            this.braStyle = 0;
        }
    }

    previousBra(){
        this.braStyle--;

        if(this.braStyle < 0){
            this.braStyle = this.modelLibrary.brasCount - 1;
        }
    }

    nextUnderwear(){
        this.underwearStyle++;

        if(this.underwearStyle >= this.modelLibrary.underwearCount) {
            this.underwearStyle = 0;
        }
    }

    previousUnderwear() {
        this.underwearStyle--;

        if(this.underwearStyle < 0){
            this.underwearStyle = this.modelLibrary.underwearCount - 1;
        }
    }

    nextLegAccessory(){
        this.legAccessoryStyle++;

        if(this.legAccessoryStyle >= this.modelLibrary.legAccessoriesCount) {
            this.legAccessoryStyle = 0;
        }
    }

    previousLegAccessory() {
        this.legAccessoryStyle--;

        if(this.legAccessoryStyle < 0){
            this.legAccessoryStyle = this.modelLibrary.legAccessoriesCount - 1;
        }
    }
}
