class ColourPicker{

    constructor(x, y, reversed, buttons = []) {
        this.x = x;
        this.y = y;
        this.buttons = buttons;
        this.isReversed = reversed;
    }


    addButton(button){
        this.buttons.push(button);
    }

    addButtons(buttons){
        for (let b of buttons) {
            this.buttons.push(b);
        }
    }

    positionButtons() {

        if (this.isReversed) {
            this.buttons[0].x = this.x;
            this.buttons[0].y = this.y;
            this.buttons[1].x = this.x - 22;
            this.buttons[1].y = this.y + 22;
            this.buttons[2].x = this.x - 32;
            this.buttons[2].y = this.y + 52;
            this.buttons[3].x = this.x - 22;
            this.buttons[3].y = this.y + 82;
            this.buttons[4].x = this.x;
            this.buttons[4].y = this.y + 102;
        } else {
            this.buttons[0].x = this.x;
            this.buttons[0].y = this.y;
            this.buttons[1].x = this.x + 22;
            this.buttons[1].y = this.y + 22;
            this.buttons[2].x = this.x + 32;
            this.buttons[2].y = this.y + 52;
            this.buttons[3].x = this.x + 22;
            this.buttons[3].y = this.y + 82;
            this.buttons[4].x = this.x;
            this.buttons[4].y = this.y + 102;
        }
    }

    update(){
    }

    render(context) {
        for (let b of this.buttons){
            b.render(context);
        }
    }
}
