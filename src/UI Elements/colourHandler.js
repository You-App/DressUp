class ColourHandler{
    constructor(model){
        this.model = model;
        this.context = this;
    }

    changeHairYellow(){
        this.model.changeHairColour('yellow');
    }

    changeHairGray(){
        this.model.changeHairColour('gray');
    }

    changeHairBlack(){
        this.model.changeHairColour('black');
    }


    changeEyesBrown(){
        this.model.changeEyeColour('brown');
    }
    
    changeEyesPurple(){
        this.model.changeEyeColour('purple');
    }

    changeEyesGreen(){
        this.model.changeEyeColour('green');
    }

    changeEyesSkyBlue(){
        this.model.changeEyeColour('sky');
    }

    changeEyesSpecial(){
        this.model.changeEyeColour('special');
    }

}
