let type = "WebGL"
        if (!PIXI.utils.isWebGLSupported()) {
            type = "canvas"
        }

        PIXI.utils.sayHello(type)

        //Create a Pixi Application
        let app = new PIXI.Application({
            width: 256,
            height: 256
        });

