class ModelLibrary {

    constructor(){
        this.hairWidth = 568;
        this.hairHeight = 852;
        this.backHairCount = 6;
        this.fringeCount = 5;

        this.backHairSpritesheet = new Image();
        this.backHairSpritesheet.src = './assets/backHair_568x852.png';
        this.fringesSpritesheet = new Image();
        this.fringesSpritesheet.src = './assets/fringe_568x852.png';

        //Arrays holding frame coordinates
        this.bodyBaseFrames = [];
        this.eyeFrames = [];
        this.eyebrowFrames = [];
        this.mouthFrames = [];
        this.fringeFrames = [];
        this.hairBackFrames = [];
        this.topFrames = [];
        this.bottomFrames = [];

        //populate arrays
        this.addBodyBases();
        this.addEyes();
        this.addEyebrows();
        this.addMouths();
        this.addFringes();
        this.addHairBack();
        this.addTops();
        this.addBottoms();
    }

    addBodyBases(){
        //TODO: update
        let paleBodyBase = new Image();
        paleBodyBase.src = './assets/paleBodyBase_330x728.png';
        this.bodyBaseFrames.push(paleBodyBase);
    }

    addEyes(){
        
    }

    addEyebrows(){

    }

    addMouths(){

    }

    addFringes(){
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.fringeCount; i++){
            let currentFringe = [];
            for (let j = 0; j < 1; j++) {
                let currentFrame = new Frame(x, y, this.hairWidth, this.hairHeight);
                currentFringe.push(currentFrame);
            }
            y += this.hairHeight;
            this.fringeFrames.push(currentFringe);
        }
    }

    addHairBack(){
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.backHairCount; i++){
            let hairStyle = [];
            for (let j = 0; j < 1; j++) {
                let currentFrame = new Frame(x, y, this.hairWidth, this.hairHeight);
                hairStyle.push(currentFrame);
            }
            y += this.hairHeight;
            this.hairBackFrames.push(hairStyle);
        }
    }

    addTops(){

    }

    addBottoms(){

    }
}
