<template>
<div>
    pixiJs
</div>

</template>

<script>
import * as PIXI from 'pixi.js'

export default {
    name:'pixiJs',
    mounted(){
        this.init()
    },
    methods:{
        init(){
            let type = "WebGL"
            if (!PIXI.utils.isWebGLSupported()) {
                type = "canvas"
            }
            PIXI.utils.sayHello(type)
            //Create a Pixi Application
            let app = new PIXI.Application({
                width: 256,         // default: 800 宽度
                height: 256,        // default: 600 高度
                antialias: true,    // default: false 反锯齿
                transparent: false, // default: false 透明度
                resolution: 1       // default: 1 分辨率
            });
            app.renderer.backgroundColor = 0x061639;  // 设置背景色
            app.renderer.autoResize = true;  // 确保画布的大小调整到与分辨率匹配
            app.renderer.view.style.position = "absolute";
            app.renderer.view.style.display = "block";
            app.renderer.resize(window.innerWidth, window.innerHeight);
            //Add the canvas that Pixi automatically created for you to the HTML document
            document.body.appendChild(app.view);

            // 处理图像
            // let texture = PIXI.utils.TextureCache["images/cat.jpg"];
            // let sprite = new PIXI.Sprite(texture);
            // app.stage.addChild(sprite);
            // app.stage 舞台 
            // console.log('app.stage',app.stage)
            // loader
            //     .add("images/cat.png")
            //     .load(setup);

            //     //This `setup` function will run when the image has loaded
            // function setup() {

            // //Create the cat sprite
            // let cat = new Sprite(resources["images/cat.png"].texture);
            
            // //Add the cat to the stage
            // app.stage.addChild(cat);
            // }
        }
    }
}

</script>

<style scoped lang="less">


</style>