////let type = "WebGL";
////if (!PIXI.utils.isWebGLSupported()) {
////    type = "canvas"
////}
////
////PIXI.utils.sayHello(type)
////
//////Create a Pixi Application
////let app = new PIXI.Application({
////    width: 256,
////    height: 256
////});
//
////Create a Pixi Application
//let app = new PIXI.Application({
//    width: 256,
//    height: 256
//});
//
//
//
////styling to make application take up all of window
//app.renderer.view.style.position = "absolute";
//app.renderer.view.style.display = "block";
//app.renderer.autoResize = true;
//app.renderer.resize(window.innerWidth, window.innerHeight);
//
////sets stage
//app.stage
//
////runs before setup
//PIXI.loader
//    .add([
//                "pinkShirt.svg",
//                "blueShirt.svg",
//                "purpleShirt.svg"
//            ])
//    .load(setup);
//
//let pinkShirt = new PIXI.Sprite(
//    PIXI.loader.resources["pinkShirt.svg"].texture
//);
//
//function setup() {
//
//
//    pinkShirt.x = 50;
//    pinkShirt.y = 50;
//
//    //sets scale of shirt
//    //cat.scale.set(0.5, 0.5);
//
//
//    //adds shirt to stage so it can be seen
//    app.stage.addChild(pinkShirt);
//
//    app.ticker.add(delta => gameLoop(delta));
//}
//
//function gameLoop(delta) {
//
//    //Move the cat 1 pixel
//    pinkShirt.x += 1;
//}

var app = new PIXI.Application(800, 600, {
    backgroundColor: 0x1099bb
});


// create a texture from an image path
var texture = PIXI.Texture.fromImage("shirtIcon1.png");



createClothing(500, 500);

function createClothing(x, y) {

    // create our little bunny friend..
    var clothes = new PIXI.Sprite(texture);

    // enable the clothes to be interactive
    clothes.interactive = true;

    // hand-cursor appears on rollover
    clothes.buttonMode = true;

    // center the clothes anchor point
    clothes.anchor.set(0.5);

    // scale it to size
    clothes.scale.set(.5);

    // setup events for mouse + touch using
    // the pointer events
    clothes
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);

    // move the sprite to its designated position
    clothes.x = x;
    clothes.y = y;

    // add it to the stage
    app.stage.addChild(clothes);
}

function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}
