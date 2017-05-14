class GameScreen {
    static getContext() {
        return this;
    }
    constructor() {
        this.addEventListener();
        this.isPaused = false;
        this.background = new Image();
        this.background.src = "./assets/gameBackground.jpg";
        this.model = new Model();
        this.buttons = [];
        this.buttonLibrary = new ButtonLibrary();
        this.windowManager = new WindowManager(this.buttonLibrary, this.model);
        this.windows = [];
        this.addButtonsToScreen();
    }

    update() {
        this.model.update();
        for(let b = 0; b < this.buttons.length; b++) {
            this.buttons[b].update();
        }
        this.windowManager.update();
    }

    render(context) {
        context.drawImage(this.background, 0, 0);
        this.model.render(context);
        for(let b = 0; b < this.buttons.length; b++) {
            this.buttons[b].render(context);
        }
        this.windowManager.render(context);
    }

    addButtonsToScreen() {
        let faceCategoryButton = new Button(557, 117, 'category-face', this.windowManager.unpauseFaceCategoryWindow.bind(this.windowManager.context), this.buttonLibrary);
        faceCategoryButton.isClicked = true;
        this.buttons.push(faceCategoryButton);
        let hairCategoryButton = new Button(690, 117, 'category-hair', this.windowManager.unpauseHairCategoryWindow.bind(this.windowManager.context), this.buttonLibrary);
        this.buttons.push(hairCategoryButton);
        let clothesCategoryButton = new Button(817, 122, 'category-clothes', this.windowManager.unpauseClothesCategoryWindow1.bind(this.windowManager.context), this.buttonLibrary);
        this.buttons.push(clothesCategoryButton);
        let accessoriesCategoryButton = new Button(948, 118, 'category-accessories', this.windowManager.unpauseAccessoriesCategoryWindow.bind(this.windowManager.context), this.buttonLibrary);
        this.buttons.push(accessoriesCategoryButton);
    }

    addWindows() {
        let face = new FaceCategoryWindow();
        this.windows.push(face);
        
    }

    handleInputMouseDown(event) {
        let canvas = document.getElementById('canvas');
        let canvasLeft = canvas.offsetLeft;
        let canvasTop = canvas.offsetTop;
        let x = event.pageX - canvasLeft;
        let y = event.pageY - canvasTop;

        //check collision between click and elements
        for(let b = 0; b < this.buttons.length; b++) {
            let current = this.buttons[b];
            if (y > current.y && y < current.y + current.height && x > current.x && x < current.x + current.width) {
                this.resetButtons();
                this.buttons[b].isClicked = true;
                this.buttons[b].performAction();
            }
        }

    }

    resetButtons() {
        for(let b = 0; b < this.buttons.length; b++) {
            this.buttons[b].isClicked = false;
        }
    }

    addEventListener() {
        document.getElementById('canvas').addEventListener('mousedown', this.handleInputMouseDown.bind(this));

    }

    dispose() {
        document.getElementById('canvas').removeEventListener('mousedown', this.handleInputMouseDown);
    }
}