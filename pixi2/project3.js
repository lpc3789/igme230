//pixi.js renderer takes up full screen and is transparent so things will render on screen properly
var app = new PIXI.Application(1000, 600, {
    transparent: true
});

app.renderer.backgroundColor = 0x000000;

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

var container = new PIXI.Container();
container.interactive = true;


// create a texture from an image path
var blueShirt = PIXI.Texture.fromImage("shirtIcon1.png");
var pinkShirt = PIXI.Texture.fromImage("shirtIcon2.png");
var purpleShirt = PIXI.Texture.fromImage("shirtIcon3.png");
var redShirt = PIXI.Texture.fromImage("shirtIcon4.png");

//calls functions
createBlueShirt(830, 275);
createPinkShirt(830, 275);
createPurpleShirt(830, 275);
createRedShirt(830, 275);

//functions to create shirts
function createBlueShirt(x, y) {

    // create shirt
    var clothes = new PIXI.Sprite(blueShirt);

    // enable the clothes to be interactive
    clothes.interactive = true;

    // hand-cursor appears on rollover
    clothes.buttonMode = true;

    // center the clothes anchor point
    clothes.anchor.set(0.5);

    // scale it to size
    clothes.scale.set(.45);

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
function createPinkShirt(x, y) {

    // create shirt
    var clothes = new PIXI.Sprite(pinkShirt);

    // enable the clothes to be interactive
    clothes.interactive = true;

    // hand-cursor appears on rollover
    clothes.buttonMode = true;

    // center the clothes anchor point
    clothes.anchor.set(0.5);

    // scale it to size
    clothes.scale.set(.45);

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
function createPurpleShirt(x, y) {

    // create shirt
    var clothes = new PIXI.Sprite(purpleShirt);

    // enable the clothes to be interactive
    clothes.interactive = true;

    // hand-cursor appears on rollover
    clothes.buttonMode = true;

    // center the clothes anchor point
    clothes.anchor.set(0.5);

    // scale it to size
    clothes.scale.set(.45);

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
function createRedShirt(x, y) {

    // create shirt
    var clothes = new PIXI.Sprite(redShirt);

    // enable the clothes to be interactive
    clothes.interactive = true;

    // hand-cursor appears on rollover
    clothes.buttonMode = true;

    // center the clothes anchor point
    clothes.anchor.set(0.5);

    // scale it to size
    clothes.scale.set(.45);

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

//drag and drop functionality
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
