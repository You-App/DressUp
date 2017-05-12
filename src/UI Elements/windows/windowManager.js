class WindowManager {
    constructor(buttonLibrary, model) {
        this.model = model;
        this.windowLibrary = new WindowLibrary();
        this.buttonLibrary = buttonLibrary;
        this.windows = [];
        let faceCategoryWindow = new FaceCategoryWindow(this.buttonLibrary, this.windowLibrary, this.model);
        faceCategoryWindow.isPaused = false;
        let hairCategoryWindow = new HairCategoryWindow(this.buttonLibrary, this.windowLibrary, this.model);
        let clothesCategoryWindow = new ClothesCategoryWindow(this.buttonLibrary, this.windowLibrary, this.model);
        let accessoriesCategoryWindow = new AccessoriesCategoryWindow(this.buttonLibrary, this.windowLibrary, this.model);

        this.windows.push(faceCategoryWindow);
        this.windows.push(hairCategoryWindow);
        this.windows.push(clothesCategoryWindow);
        this.windows.push(accessoriesCategoryWindow);
        this.context = this;
        this.addEventListeners();
    }

    update() {
        if (!this.isWindowListEmpty())
        {
            let window = this.getCurrentWindow();

            if (!window.isPaused)
            {
                window.update();
            }
        }
    }

    render(context) {
        if (!this.isWindowListEmpty())
        {
            let window = this.getCurrentWindow();

            if (!window.isPaused)
            {
                window.render(context);
            }
        }
    }

    pushWindow(window) {
        if(!this.isWindowListEmpty()){
            let currentWindow = this.getCurrentWindow();
            currentWindow.isPaused = true;
        }
        this.windows.push(window);

    }

    popWindow() {
        this.windows.pop();
    }

    isWindowListEmpty() {
        return this.windows.length <= 0;
    }

    getCurrentWindow() {
        let result = null;
        for (let i = 0; i < this.windows.length; i++) {
            if(!this.windows[i].isPaused){
                result = this.windows[i];
                break;
            }
        }
        return result;
    }

    unpauseFaceCategoryWindow() {
        this.pauseWindows();
        this.windows[0].isPaused = false;
    }

    unpauseHairCategoryWindow() {
        this.pauseWindows();
        this.windows[1].isPaused = false;
    }

    unpauseClothesCategoryWindow() {
        this.pauseWindows();
        this.windows[2].isPaused = false;
    }

    unpauseAccessoriesCategoryWindow() {
        this.pauseWindows();
        this.windows[3].isPaused = false;
    }

    pauseWindows() {
        for (let i = 0; i < this.windows.length; i++) {
            this.windows[i].isPaused = true;
        }
    }

    handleInputMouseDown(event){
        let current = this.getCurrentWindow();
        current.handleInputMouseDown(event);
    }

    handleInputMouseUp(event) {
        let current = this.getCurrentWindow();
        current.handleInputMouseUp(event);
    }

    addEventListeners() {
        document.getElementById('canvas').addEventListener('mousedown', this.handleInputMouseDown.bind(this));
        document.getElementById('canvas').addEventListener('mouseup', this.handleInputMouseUp.bind(this));

    }

    dispose() {
        document.getElementById('canvas').removeEventListener('mousedown', this.handleInputMouseDown);
        document.getElementById('canvas').removeEventListener('mouseup', this.handleInputMouseUp);
    }
}
