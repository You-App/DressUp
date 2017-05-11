class ButtonLibrary {
    constructor(){
        this.arrowButtonWidth= 58;
        this.arrowButtonHeight = 88;
        this.categoryButtonWidth = 65;
        this.categoryButtonHeight = 49;
        this.categoryButtonsCount = 4;
        this.arrowButtonsCount = 2;
        this.buttonStateCount = 2;

        this.arrowButtonSpritesheet = new Image();
        this.arrowButtonSpritesheet.src = './assets/buttons_58x88.png';
        this.arrowButtons = [];

        this.categoryButtonSpriteSheet = new Image();
        this.categoryButtonSpriteSheet.src = './assets/categoryButtons_65x49.png';
        this.categoryButtons = [];

        this.addArrowButtons();
        this.addCategoryButtons();
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

    getButtonByType(type) {
        let result = null;
        switch (type){
            case 'arrow-left':
                result = this.arrowButtons[1];
                break;
            case 'arrow-right':
                result = this.arrowButtons[0];
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
            default:
                alert('Invalid button type');
                break;
        }
        return result;
    }

    getButtonSpriteSheetByType(type) {
        let result = null;
        if(type.includes('arrow')) {
            result = this.arrowButtonSpritesheet;
        } else if(type.includes('category')) {
            result = this.categoryButtonSpriteSheet;
        } else {
            alert('Invalid spritesheet');
        }

        return result;
    }

    getHeightByType(type) {
        let result = null;
        if(type.includes('arrow')) {
            result = this.arrowButtonHeight;
        } else if(type.includes('category')) {
            result = this.categoryButtonHeight;
        }
        return result;
    }

    getWidthByType(type) {
        let result = null;
        if(type.includes('arrow')) {
            result = this.arrowButtonWidth;
        } else if(type.includes('category')) {
            result = this.categoryButtonWidth;
        }
        return result;
    }
}