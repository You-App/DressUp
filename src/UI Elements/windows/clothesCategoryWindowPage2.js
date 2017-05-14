class ClothesCategoryWindowPage2 {
    constructor(buttonLibrary, windowLibrary, windowManager, model){
        this.x = 507;
        this.y = 187;
        this.isPaused = false;
        this.windowLibrary = windowLibrary;
        this.buttonLibrary = buttonLibrary;
        this.windowManager = windowManager;
        this.model = model;
        this.spritesheet = windowLibrary.spriteSheet;
        this.windowFrame = windowLibrary.getClothesWindowFrame2();
        this.width = this.windowLibrary.width;
        this.height = this.windowLibrary.height;
        this.buttons = [];
        this.addButtons();
    }

    update() {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].update();
        }
    }

    render(context) {
        context.drawImage(this.spritesheet,this.windowFrame.getX(), this.windowFrame.getY(), this.width, this.height, this.x,this.y, this.width, this.height);
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].render(context);
        }
    }

    handleInputMouseUp(event) {
        let canvas = document.getElementById('canvas');
        let canvasLeft = canvas.offsetLeft;
        let canvasTop = canvas.offsetTop;
        let x = event.pageX - canvasLeft;
        let y = event.pageY - canvasTop;

        //check collision between click and elements
        for (let b = 0; b < this.buttons.length; b++) {
            let current = this.buttons[b];
            if (y > current.y && y < current.y + current.height && x > current.x && x < current.x + current.width) {
                this.buttons[b].isClicked = false;
                this.buttons[b].performAction();
            }
        }
    }

    handleInputMouseDown(event) {
        let canvas = document.getElementById('canvas');
        let canvasLeft = canvas.offsetLeft;
        let canvasTop = canvas.offsetTop;
        let x = event.pageX - canvasLeft;
        let y = event.pageY - canvasTop;

        //check collision between click and elements
        for (let b = 0; b < this.buttons.length; b++) {
            let current = this.buttons[b];
            if (y > current.y && y < current.y + current.height && x > current.x && x < current.x + current.width) {
                this.buttons[b].isClicked = true;
            }
        }
    }

    addButtons() {
        let leftTopsButton = new Button(580, 333, 'arrow-left', this.model.previousBackHair.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftTopsButton);
        let rightTopsButton = new Button(654, 333, 'arrow-right', this.model.nextBackHair.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(rightTopsButton);

        let leftJacketsButton = new Button(851, 333, 'arrow-left', this.model.previousEyebrows.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftJacketsButton);
        let rightJacketsButton = new Button(925, 333, 'arrow-right', this.model.nextEyebrows.bind(this.model.context),this.buttonLibrary);
        this.buttons.push(rightJacketsButton);

        let leftMouthButton = new Button(724, 549, 'arrow-left', this.model.previousFringe.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftMouthButton);
        let rightMouthButton = new Button(798, 549, 'arrow-right', this.model.nextFringe.bind(this.model.context),this.buttonLibrary);
        this.buttons.push(rightMouthButton);

        let prevPageButton = new Button(1000, 725, 'arrow-left-small', this.windowManager.unpauseClothesCategoryWindow1.bind(this.windowManager.context), this.buttonLibrary);
        this.buttons.push(prevPageButton);
    }
}