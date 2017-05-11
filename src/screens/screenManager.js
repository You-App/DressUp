class ScreenManager {
    constructor(){
        this.gameScreens = [];
        let gameScreen = new GameScreen();
        this.pushScreen(gameScreen);
    }

    update(){
        if (!this.isScreenListEmpty())
        {
            let screen = this.getCurrentScreen();

            if (!screen.isPaused)
            {
                screen.update();
            }
        }
    }

    render(context){
        if (!this.isScreenListEmpty())
        {
            let screen = this.getCurrentScreen();

            if (!screen.isPaused)
            {
                screen.render(context);
            }
        }
    }

    pushScreen(screen){
        if(!this.isScreenListEmpty()){
            let currentScreen = this.getCurrentScreen();
            currentScreen.isPaused = true;
            currentScreen.dispose();
        }
        this.gameScreens.push(screen);

    }

    popScreen(){

    }

    isScreenListEmpty(){
        return this.gameScreens.length <= 0;
    }

    getCurrentScreen(){
       return this.gameScreens[this.gameScreens.length - 1];
    }
}
