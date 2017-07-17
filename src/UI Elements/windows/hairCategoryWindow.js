class HairCategoryWindow  {
    constructor(buttonLibrary, windowLibrary, model, colourHandler){
        this.x = 507;
        this.y = 187;
        this.isPaused = true;
        this.buttonLibrary = buttonLibrary;
        this.windowLibrary = windowLibrary;
        this.spritesheet = windowLibrary.spriteSheet;
        this.windowFrame = windowLibrary.getHairWindowFrame();
        this.width = this.windowLibrary.width;
        this.height = this.windowLibrary.height;
        this.model = model;
        this.colourHandler = colourHandler;
        this.buttons = [];
        this.addButtons();
        this.colourPickers = [];
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

    addButtons(){
        let leftBackHairButton = new Button(724, 549, 'arrow-left', this.model.previousBackHair.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftBackHairButton);
        let rightBackHairButton = new Button(798, 549, 'arrow-right', this.model.nextBackHair.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(rightBackHairButton);

        let leftFringeButton = new Button(724, 333, 'arrow-left', this.model.previousFringe.bind(this.model.context), this.buttonLibrary);
        this.buttons.push(leftFringeButton);
        let rightFringeButton = new Button(798, 333, 'arrow-right', this.model.nextFringe.bind(this.model.context),this.buttonLibrary);
        this.buttons.push(rightFringeButton);
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

    addColourPickers() {
        this.colourPickers.push(new ColourPicker(860, 315, false));
        this.colourPickers.push(new ColourPicker(690, 315, true));
    }

    addButtonsToCP(){
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-gray', () => this.model.changeHairColour('gray'), this.buttonLibrary));
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-yellow', () => this.model.changeHairColour('yellow'), this.buttonLibrary));
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-red', null, this.buttonLibrary));
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-brown', null, this.buttonLibrary));
        this.colourPickers[0].addButton(new Button(0, 0, 'colour-black', () => this.model.changeHairColour('black'), this.buttonLibrary));
        this.colourPickers[1].addButton(new Button(0, 0, 'colour-sky', null, this.buttonLibrary));
        this.colourPickers[1].addButton(new Button(0, 0, 'colour-green', null, this.buttonLibrary));
        this.colourPickers[1].addButton(new Button(0, 0, 'colour-purple', null, this.buttonLibrary));
        this.colourPickers[1].addButton(new Button(0, 0, 'colour-mauve', null, this.buttonLibrary));
        this.colourPickers[1].addButton(new Button(0, 0, 'colour-rainbow', null, this.buttonLibrary));
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
