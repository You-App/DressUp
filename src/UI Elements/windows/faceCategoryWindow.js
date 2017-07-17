class FaceCategoryWindow {
    constructor(buttonLibrary, windowLibrary, model, colourHandler) {
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
        this.colourPickers = [];
        this.colourHandler = colourHandler;
        this.addColourPickers();
        this.addButtonsToCP();
        this.addCPButtonsToButtons();
        this.orderButtonsInCPs();
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
        
        for (let p of this.colourPickers){
            p.render(context);
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

        let leftEyebrowsButton = new Button(851, 333, 'arrow-left', this.model.previousEyebrows.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftEyebrowsButton);
        let rightEyebrowsButton = new Button(925, 333, 'arrow-right', this.model.nextEyebrows.bind(this.model.context),this.buttonLibrary);
        this.buttons.push(rightEyebrowsButton);

        let leftMouthButton = new Button(724, 549, 'arrow-left', this.model.previousFringe.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftMouthButton);
        let rightMouthButton = new Button(798, 549, 'arrow-right', this.model.nextFringe.bind(this.model.context),this.buttonLibrary);
        this.buttons.push(rightMouthButton);
    }

    addColourPickers() {
        this.colourPickers.push(new ColourPicker(720, 310, false));
    }

    addButtonsToCP(){
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-brown', () => this.model.changeEyeColour('brown'), this.buttonLibrary));

        // this.colourHandler.changeEyesBrown.bind(this.colourHandler.context)
        // this.colourHandler.changeEyesPurple.bind(this.colourHandler.context)

        this.colourPickers[0].addButton(new Button(0, 0, 'colour-purple', () => this.model.changeEyeColour('purple'), this.buttonLibrary));
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-sky', () => this.model.changeEyeColour('sky'), this.buttonLibrary));
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-green', () => this.model.changeEyeColour('green'), this.buttonLibrary));
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-rainbow', () => this.model.changeEyeColour('special'), this.buttonLibrary));
    }

    addCPButtonsToButtons(){
        for (let p of this.colourPickers) {
            console.dir(p);
            for (let b of p.buttons) {
                this.buttons.push(b);
            }
        }
    }

    orderButtonsInCPs(){
        for (let p of this.colourPickers) {
            p.positionButtons();
        }
    }
}
