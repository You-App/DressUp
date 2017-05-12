class WindowLibrary {
    constructor() {
        this.width = 560;
        this.height = 614;
        this.windowsCount = 2;
        this.spriteSheet = new Image();
        this.spriteSheet.src = './assets/categoryWindows_560x614.png';
        this.windows = [];

        this.addWindows();
    }

    addWindows() {
        let x = 0;
        let y = 0;
        for(let i = 0; i < this.windowsCount; i++) {
            let currentFrame = new Frame(x, y, this.width, this.height);
            this.windows.push(currentFrame);
            x += this.width;
        }
    }

    getFaceWindowFrame(){
        return this.windows[0];
    }

    getHairWindowFrame(){
        return this.windows[1];
    }
}
