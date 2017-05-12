class FaceCategoryWindow {
    constructor(buttonLibrary, windowLibrary, model) {
        this.x = 507;
        this.y = 187;
        this.isPaused = false;
        this.windowLibrary = windowLibrary;
        this.buttonLibrary = buttonLibrary;
        this.model = model;
        this.spritesheet = windowLibrary.spriteSheet;
        this.windowFrame = windowLibrary.getFaceWindowFrame();
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
                this.buttons[b].performAction();
            }
        }
    }

    addButtons(){
        let leftEyesButton = new Button(580, 333, 'arrow-left', this.model.previousBackHair.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftEyesButton);
        let rightEyesButton = new Button(654, 333, 'arrow-right', this.model.nextBackHair.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(rightEyesButton);

        let leftEyebrowsButton = new Button(851, 333, 'arrow-left', this.model.previousFringe.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftEyebrowsButton);
        let rightEyebrowsButton = new Button(925, 333, 'arrow-right', this.model.nextFringe.bind(this.model.context),this.buttonLibrary);
        this.buttons.push(rightEyebrowsButton);

        let leftMouthButton = new Button(724, 549, 'arrow-left', this.model.previousFringe.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftMouthButton);
        let rightMouthButton = new Button(798, 549, 'arrow-right', this.model.nextFringe.bind(this.model.context),this.buttonLibrary);
        this.buttons.push(rightMouthButton);
    }
}
