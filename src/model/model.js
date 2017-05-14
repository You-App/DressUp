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

    }

    update(){
        this.hairBackFrame = this.modelLibrary.hairBackFrames[this.hairBackStyle][this.hairBackColour];
        this.eyebrowsFrame = this.modelLibrary.eyebrowFrames[this.eyebrowsStyle];
        this.eyesFrame = this.modelLibrary.eyeFrames[this.eyesStyle][this.eyesColour];
        this.mouthFrame = this.modelLibrary.mouthFrames[this.mouthStyle];
        this.fringeFrame = this.modelLibrary.fringeFrames[this.fringeStyle][this.fringeColour];
    }

    render(context){
        context.drawImage(this.modelLibrary.backHairSpritesheet, this.hairBackFrame.getX(), this.hairBackFrame.getY(), this.hairBackFrame.getWidth(), this.hairBackFrame.getHeight(), -5, 10, this.hairBackFrame.getWidth(), this.hairBackFrame.getHeight() );
        context.drawImage(this.bodyBaseFrame, 120, 100);
        context.drawImage(this.modelLibrary.eyebrowsSpriteSheet, this.eyebrowsFrame.getX(), this.eyebrowsFrame.getY(), this.eyebrowsFrame.getWidth(), this.eyebrowsFrame.getHeight(), 153, 132, this.eyebrowsFrame.getWidth(), this.eyebrowsFrame.getHeight() );
        context.drawImage(this.modelLibrary.eyesSpriteSheet, this.eyesFrame.getX(), this.eyesFrame.getY(), this.eyesFrame.getWidth(), this.eyesFrame.getHeight(), 147, 177, this.eyesFrame.getWidth(), this.eyesFrame.getHeight() );
        context.drawImage(this.modelLibrary.mouthSpriteSheet, this.mouthFrame.getX(), this.mouthFrame.getY(), this.mouthFrame.getWidth(), this.mouthFrame.getHeight(), 198, 254, this.mouthFrame.getWidth(), this.mouthFrame.getHeight() );
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
}
