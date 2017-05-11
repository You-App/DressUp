class Button {
    constructor(x, y, type, onClick, buttonLibrary) {
        this.x = x;
        this.y = y;
        this.buttonLibrary = buttonLibrary;
        this.buttonStateFrames = this.buttonLibrary.getButtonByType(type);
        this.isClicked = false;
        this.buttonState = 0;
        this.performAction = onClick;
        this.height = this.buttonLibrary.getHeightByType(type);
        this.width = this.buttonLibrary.getWidthByType(type);
        this.buttonSpriteSheet = this.buttonLibrary.getButtonSpriteSheetByType(type);
    }

    update() {
        if (!this.isClicked) {
            this.buttonState = 0;
        } else {
            this.buttonState = 1;
        }
    }

    render(context) {
        context.drawImage(this.buttonSpriteSheet, this.buttonStateFrames[this.buttonState].getX(), this.buttonStateFrames[this.buttonState].getY(), this.buttonStateFrames[this.buttonState].getWidth(), this.buttonStateFrames[this.buttonState].getHeight(), this.x, this.y, this.buttonStateFrames[this.buttonState].getWidth(), this.buttonStateFrames[this.buttonState].getHeight());
    }
}
