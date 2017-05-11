class Model{
    constructor(){
        this.context = this;
        this.modelLibrary = new ModelLibrary();
        this.bodyBaseFrame = this.modelLibrary.bodyBaseFrames[0];

        this.hairBackStyle = 0;
        this.hairBackColour = 0;
        this.fringeStyle = 0;
        this.fringeColour = 0;

    }

    update(){
        this.hairBackFrame = this.modelLibrary.hairBackFrames[this.hairBackStyle][this.hairBackColour];
        this.fringeFrame = this.modelLibrary.fringeFrames[this.fringeStyle][this.fringeColour];
    }

    render(context){
        context.drawImage(this.modelLibrary.backHairSpritesheet, this.hairBackFrame.getX(), this.hairBackFrame.getY(), this.hairBackFrame.getWidth(), this.hairBackFrame.getHeight(), -5, 10, this.hairBackFrame.getWidth(), this.hairBackFrame.getHeight() );
        context.drawImage(this.bodyBaseFrame, 120, 100);
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
}
