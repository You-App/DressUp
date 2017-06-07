class ButtonLibrary {
    constructor(){
        this.arrowButtonWidth= 58;
        this.arrowButtonHeight = 88;
        this.smallArrowButtonWidth = 40;
        this.smallArrowButtonHeight = 50;
        this.categoryButtonWidth = 65;
        this.categoryButtonHeight = 49;
        this.colourButtonSide = 28;
        this.colourButtonsCount = 10;
        this.categoryButtonsCount = 4;
        this.arrowButtonsCount = 2;
        this.smallArrowButtonsCount = 2;
        this.buttonStateCount = 2;

        this.arrowButtonSpritesheet = new Image();
        this.arrowButtonSpritesheet.src = './assets/buttons_58x88.png';
        this.arrowButtons = [];

        this.smallArrowButtonSpritesheet = new Image();
        this.smallArrowButtonSpritesheet.src = './assets/pageButtons_40x50.png';
        this.smallArrowButtons = [];

        this.categoryButtonSpriteSheet = new Image();
        this.categoryButtonSpriteSheet.src = './assets/categoryButtons_65x49.png';
        this.categoryButtons = [];

        this.colourButtonSpriteSheet = new Image();
        this.colourButtonSpriteSheet.src = './assets/colourButtons_28x28.png';
        this.colourButtons = [];

        this.addArrowButtons();
        this.addSmallArrowButtons();
        this.addCategoryButtons();
        this.addColourButtons();
    }

    addArrowButtons() {
        let x = 0;
        let y = 0;
        for (let i = 0; i < this.arrowButtonsCount; i++) {
            x = 0;
            let currentButton = [];
            for (let j = 0; j < this.buttonStateCount; j++) {
                let buttonState = new Frame(x, y, this.arrowButtonWidth, this.arrowButtonHeight);
                currentButton.push(buttonState);
                x += this.arrowButtonWidth;
            }
            this.arrowButtons.push(currentButton);
            y += this.arrowButtonHeight;
        }
    }

    addSmallArrowButtons() {
        let x = 0;
        let y = 0;
        for (let i = 0; i < this.smallArrowButtonsCount; i++) {
            x = 0;
            let currentButton = [];
            for (let j = 0; j < this.buttonStateCount; j++) {
                let buttonState = new Frame(x, y, this.smallArrowButtonWidth, this.smallArrowButtonHeight);
                currentButton.push(buttonState);
                x += this.smallArrowButtonWidth;
            }
            this.smallArrowButtons.push(currentButton);
            y += this.smallArrowButtonHeight;
        }
    }

    addCategoryButtons() {
        let x = 0;
        let y = 0;
        for (let i = 0; i < this.categoryButtonsCount; i++) {
            x = 0;
            let currentButton = [];
            for (let j = 0; j < this.buttonStateCount; j++) {
                let buttonState = new Frame(x, y, this.categoryButtonWidth, this.categoryButtonHeight);
                currentButton.push(buttonState);
                x += this.categoryButtonWidth;
            }
            this.categoryButtons.push(currentButton);
            y += this.categoryButtonHeight;
        }
    }

    addColourButtons(){
        let x = 0;
        let y = 0;

        for (let i = 0; i < this.colourButtonsCount; i++) {
            x = 0;
            let currentButton = [];
            for (let j = 0; j < this.buttonStateCount; j++) {
                let buttonState = new Frame(x, y, this.colourButtonSide, this.colourButtonSide);
                currentButton.push(buttonState);
                x += this.colourButtonSide;
            }
            this.colourButtons.push(currentButton);
            y += this.colourButtonSide;
        }
    }

    getButtonByType(type) {
        let result = null;
        switch (type){
            case 'arrow-left':
                result = this.arrowButtons[1];
                break;
            case 'arrow-right':
                result = this.arrowButtons[0];
                break;
            case 'arrow-left-small':
                result = this.smallArrowButtons[1];
                break;
            case 'arrow-right-small':
                result = this.smallArrowButtons[0];
                break;
            case 'category-face':
                result = this.categoryButtons[0];
                break;
            case 'category-hair':
                result = this.categoryButtons[1];
                break;
            case 'category-clothes':
                result = this.categoryButtons[2];
                break;
            case 'category-accessories':
                result = this.categoryButtons[3];
                break;
            case 'colour-yellow':
                result = this.colourButtons[8];
                break;
            case 'colour-gray':
                result = this.colourButtons[9];
                break;
            case 'colour-black':
                result = this.colourButtons[5];
                break;
            case 'colour-red':
                result = this.colourButtons[7];
                break;
            case 'colour-rainbow':
                result = this.colourButtons[0];
                break;
            case 'colour-mauve':
                result = this.colourButtons[1];
                break;
            case 'colour-purple':
                result = this.colourButtons[2];
                break;
            case 'colour-green':
                result = this.colourButtons[3];
                break;
            case 'colour-brown':
                result = this.colourButtons[6];
                break;
            case 'colour-sky':
                result = this.colourButtons[4];
                break;
            default:
                alert('Invalid button type');
                break;
        }
        return result;
    }

    getButtonSpriteSheetByType(type) {
        let result = null;
        if (type.includes('small')){
            result = this.smallArrowButtonSpritesheet;
        } else if (type.includes('arrow')) {
            result = this.arrowButtonSpritesheet;
        } else if (type.includes('category')) {
            result = this.categoryButtonSpriteSheet;
        } else if (type.includes('colour')){
            result = this.colourButtonSpriteSheet;
        } else {
            alert('Invalid spritesheet');
        }

        return result;
    }

    getHeightByType(type) {
        let result = null;
        if(type.includes('small')){
            result = this.smallArrowButtonHeight;
        } else if (type.includes('arrow')) {
            result = this.arrowButtonHeight;
        } else if (type.includes('category')) {
            result = this.categoryButtonHeight;
        } else if (type.includes('colour')){
            result = this.colourButtonSide;
        }
        return result;
    }

    getWidthByType(type) {
        let result = null;
        if (type.includes('small')){
            result = this.smallArrowButtonWidth;
        } else if (type.includes('arrow')) {
            result = this.arrowButtonWidth;
        } else if (type.includes('category')) {
            result = this.categoryButtonWidth;
        } else if (type.includes('colour')){
            result = this.colourButtonSide;
        }
        return result;
    }
}