var app = new PIXI.Application(800, 600, {
    backgroundColor: 0xffffff
});

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);


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
