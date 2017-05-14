class ModelLibrary {

    constructor(){
        this.hairWidth = 568;
        this.hairHeight = 852;
        this.eyesWidth = 214;
        this.eyesHeight = 82;
        this.mouthWidth = 96;
        this.mouthHeight = 52;
        this.eyebrowsWidth = 194;
        this.eyebrowsHeight = 77;

        this.backHairCount = 6;
        this.fringeCount = 5;
        this.eyesCount = 1;
        this.mouthsCount = 1;
        this.eyebrowsCount = 4;

        this.backHairSpritesheet = new Image();
        this.backHairSpritesheet.src = './assets/backHair_568x852.png';
        this.fringesSpritesheet = new Image();
        this.fringesSpritesheet.src = './assets/fringe_568x852.png';
        this.eyesSpriteSheet = new Image();
        this.eyesSpriteSheet.src = './assets/eyes_214x82.png';
        this.mouthSpriteSheet = new Image();
        this.mouthSpriteSheet.src= './assets/mouths_96x52.png';
        this.eyebrowsSpriteSheet = new Image();
        this.eyebrowsSpriteSheet.src = './assets/eyebrows_194x77.png';

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
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.eyesCount; i++){
            let mouth = [];
            for (let j = 0; j < 5; j++) {
                let current = new Frame(x, y, this.eyesWidth, this.eyesHeight);
                mouth.push(current);
                x += this.eyesWidth;
            }
            y += this.eyesHeight;
            this.eyeFrames.push(mouth);
        }
    }

    addEyebrows(){
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.eyebrowsCount; i++){
            let eyebrows = new Frame(x, y, this.eyebrowsWidth, this.eyebrowsHeight);
            y += this.eyebrowsHeight;
            this.eyebrowFrames.push(eyebrows);
        }
    }

    addMouths(){
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.mouthsCount; i++){
            let mouth = new Frame(x, y, this.mouthWidth, this.mouthHeight);
            y += this.mouthHeight;
            this.mouthFrames.push(mouth);
        }
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
