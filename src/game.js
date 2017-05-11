class Game{
    constructor(){
        this.canvasContext =  document.getElementById("canvas").getContext("2d");
        this.screenManager = new ScreenManager();
        this.context = this;
    }

    update(){
        this.screenManager.update();
    }

    render(){
        this.screenManager.render(this.canvasContext);
    }

    run(){
        this.update();
        this.render(this.canvasContext);
        requestAnimationFrame(this.run.bind(this));
    }
}