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
        this.brasWidth = 230;
        this.brasHeight = 286;
        this.underwearWidth = 244;
        this.underwearHeight = 132;
        this.legAccessoriesWidth = 205;
        this.legAccessoriesHeight = 410;
        this.topWidth = 403;
        this.topHeight = 278;
        this.bottomsWidth = 441;
        this.bottomsHeight = 432;

        this.backHairCount = 6;
        this.fringeCount = 5;
        this.eyesCount = 1;
        this.mouthsCount = 1;
        this.eyebrowsCount = 4;
        this.brasCount = 3;
        this.underwearCount = 2;
        this.legAccessoriesCount = 2;
        this.topsCount = 3;
        this.bottomsCount = 1;

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
        this.brasSpriteSheet = new Image();
        this.brasSpriteSheet.src = './assets/bras_230x286.png';
        this.underwearSpriteSheet = new Image();
        this.underwearSpriteSheet.src = './assets/underwear_244x132.png';
        this.legAcessoriesSpriteSheet = new Image();
        this.legAcessoriesSpriteSheet.src = './assets/legAccessories_205x410.png';
        this.topsSpriteSheet = new Image();
        this.topsSpriteSheet.src = './assets/tops_403x278.png';
        this.bottomsSpriteSheet = new Image();
        this.bottomsSpriteSheet.src = './assets/bottoms_441x432.png';


        //Arrays holding frame coordinates
        this.bodyBaseFrames = [];
        this.eyeFrames = [];
        this.eyebrowFrames = [];
        this.mouthFrames = [];
        this.fringeFrames = [];
        this.hairBackFrames = [];
        this.topFrames = [];
        this.bottomFrames = [];
        this.braFrames = [];
        this.underwearFrames = [];
        this.legAccessoryFrames = [];
        this.topFrames = [];
        this.bottomFrames = [];

        this.addBodyBases();
        this.addEyes();
        this.addEyebrows();
        this.addMouths();
        this.addFringes();
        this.addHairBack();
        this.addTops();
        this.addBottoms();
        this.addBras();
        this.addUnderwear();
        this.addLegAccessories();
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
            let eyes = [];
            for (let j = 0; j < 5; j++) {
                let current = new Frame(x, y, this.eyesWidth, this.eyesHeight);
                eyes.push(current);
                x += this.eyesWidth;
            }
            y += this.eyesHeight;
            x = 0;
            this.eyeFrames.push(eyes);
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
            for (let j = 0; j < 3; j++) {
                let currentFrame = new Frame(x, y, this.hairWidth, this.hairHeight);
                currentFringe.push(currentFrame);
                x += this.hairWidth;
            }
            y += this.hairHeight;
            x = 0;
            this.fringeFrames.push(currentFringe);
        }
    }

    addHairBack(){
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.backHairCount; i++){
            let hairStyle = [];
            for (let j = 0; j < 3; j++) {
                let currentFrame = new Frame(x, y, this.hairWidth, this.hairHeight);
                hairStyle.push(currentFrame);
                x += this.hairWidth;
            }
            y += this.hairHeight;
            x = 0;
            this.hairBackFrames.push(hairStyle);
        }
    }

    addTops(){
        let x = 0;

        for (let i = 0; i < this.topsCount; i++){
            let top = new Frame(x, 0, this.topWidth, this.topHeight);
            x += this.topWidth;
            this.topFrames.push(top);
        }
    }

    addBottoms(){
        let x = 0;

        for (let i = 0; i < this.bottomsCount; i++){
            let bot = new Frame(x, 0, this.bottomsWidth, this.bottomsHeight);
            x += this.bottomsWidth;
            this.bottomFrames.push(bot);
        }
    }

    addBras(){
        let x = 0;

        for (let i = 0; i < this.brasCount; i++){
            let bra = new Frame(x, 0, this.brasWidth, this.brasHeight);
            x += this.brasWidth;
            this.braFrames.push(bra);
        }
    }

    addUnderwear() {
        let x = 0;

        for (let i = 0; i < this.underwearCount; i++) {
            let undie = new Frame(x, 0, this.underwearWidth, this.underwearHeight);
            x += this.underwearWidth;
            this.underwearFrames.push(undie);
        }
    }


    addLegAccessories() {
        let x = 0;

        for (let i = 0; i < this.legAccessoriesCount; i++) {
            let leg = new Frame(x, 0, this.legAccessoriesWidth, this.legAccessoriesHeight);
            x += this.legAccessoriesWidth;
            this.legAccessoryFrames.push(leg);
        }
    }
}
