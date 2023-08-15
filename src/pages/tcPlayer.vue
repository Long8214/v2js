<template>
<div>
    <video :src="playUrl" ref="video" id="video" class="video-js vjs-default-skin" controls preload="none">
        <!-- <source   type="video/mp4"> -->
        Your browser doesn't support HTML5 video.
    </video>
    <video :src="playUrl1" ref="video1" id="video1"  class="video-js vjs-default-skin" controls preload="none">
        <!-- <source   src="" type="video/mp4"> -->
    </video>
    <el-button @click="begin">同步暂停</el-button>
    <el-button @click="suspend">同步开始</el-button>
    <br />
    <el-time-picker
        v-model="value1"
        @change="videoLeftChange"
        format="HH:mm:ss"
        value-format="HH:mm:ss"
        placeholder="任意时间点">
    </el-time-picker>
    <el-time-picker
        v-model="value2"
        format="HH:mm:ss"
        value-format="HH:mm:ss"
        @change="videoRgihtChange"
        placeholder="任意时间点">
    </el-time-picker>
    <br />
    <el-button @click="cutLeft">切换第一个视频源</el-button>
    <el-button @click="cutRight">切换第二个视频源</el-button>
    <br />
    <el-input placeholder="回退n秒" v-model="leftTime"></el-input>
    <el-button @click="currentTimeLeft">回退第一个视频</el-button>
    <el-input placeholder="回退n秒" v-model="rightTime"></el-input>
    <el-button @click="currentTimeRight">回退第二个视频</el-button>
</div>

</template>

<script>
import video from 'video.js'
export default {
    name:'tcPlayer',
    mounted(){
            this.initLeft()
            this.initRight()
    },
    data(){
        return {
            value1:'',
            value2:'',
            leftTime:'',
            rightTime:'',
            playerLeft:null,
            playerRight:null,
            playUrl:'',
            playUrl1:''
        }
    },
    methods:{
        // 回退秒z
        currentTimeLeft(){
            if(!this.leftTime) return 
            var whereYouAt = this.playerLeft.currentTime();
            this.playerLeft.currentTime(whereYouAt-this.leftTime)
        },
        // 回退秒y
        currentTimeRight(){
            if(!this.rightTime) return 
            var whereYouAt = this.playerRight.currentTime();
            this.playerRight.currentTime(whereYouAt-this.leftTime)
        },
        // Change左
        videoLeftChange(value){
            let HH = value.split(':')[0] * 60 * 60
            let MM = value.split(':')[1] * 60
            let SS = value.split(':')[2] * 1
            let num = HH + MM + SS
            this.playerLeft.currentTime(num)
            this.playerLeft.pause()
        },
        // Change右
        videoRgihtChange(value){
            let HH = value.split(':')[0] * 60 * 60
            let MM = value.split(':')[1] * 60
            let SS = value.split(':')[2] * 1
            let num = HH + MM + SS
            this.playerRight.currentTime(num)
            this.playerRight.pause()

        },
        cutLeft(){
            this.playUrl = 'https://highlight-video.cdn.bcebos.com/video/6s/db7dd394-2b9b-11ee-82a5-7cd30a6992c0.mp4'
            this.playerLeft.poster('https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641')
        },
        cutRight(){
            // this.playUrl = 'http://vjs.zencdn.net/v/oceans.mp4'
            this.playUrl1 = 'http://vjs.zencdn.net/v/oceans.mp4'
            this.playerRight.poster('https://img0.baidu.com/it/u=3021883569,1259262591&fm=253&fmt=auto&app=120&f=JPEG?w=1140&h=641')
            this.playerRight.playbackRates([0.5, 1, 1.5, 2])
            this.playerRight.defaultPlaybackRate(3)

        },
        // 同步暂停
        begin(){
            this.playerLeft.pause()
            this.playerRight.pause()
        },
        // 同步播放
        suspend(){
            this.playerLeft.play()
            this.playerRight.play()
        },
        async initLeft(){
            this.playUrl = 'http://vjs.zencdn.net/v/oceans.mp4'
            
             this.playerLeft =  video('video',{
                // src:'http://vjs.zencdn.net/v/oceans.mp4',
                bigPlayButton: true, 
                poster:'https://pic.616pic.com/photoone/00/00/56/618ce8b3797b76152.jpg',
                width:500,
                height:300,
                playbackRates: [1,2,4,8],
                // muted: true ,// //静音模式   解决首次页面加载播放。
                controls: { progressControl: true }
            } )

        


            // video.PowerOff = video.Button.extend({
            //   /* @constructor */
            //    init: function(player, options){

            //     video.Button.call(this, player, options);
            //      //onClick为默认事件，不需要人为邦定，否则会调两次
            //      //this.on('click', this.onClick);
            //    }
            //  });

            // video.PowerOff = video.Button.extend({
            //   /* @constructor */
            //    init: function(player, options){

            //     video.Button.call(this, player, options);
            //      //onClick为默认事件，不需要人为邦定，否则会调两次
            //      //this.on('click', this.onClick);
            //    }
            //  });

            /* This function is called when X button is clicked */
            // video.PowerOff.prototype.onClick = function() {
            //     console.log('ddd')                //这里添加做你想要干的事情
            // };

            //  /* Create X button */
            //  var createPowerOffButton = function() {
            //    var props = {
            //        className: 'vjs-off-button vjs-control',
            //        innerHTML: '<div class="vjs-control-content">X</div>',
            //        role: 'button',
            //        'aria-live': 'polite',
            //        tabIndex: 0
            //      };

            //    return video.Component.prototype.createEl(null, props);
            //  };

            // /* Add X button to the control bar */
            // var X;
            // video.plugin('PowerOff', function() {
            //    var options = { 'el' : createPowerOffButton() };
            //    X = new video.PowerOff(this, options);
            //    this.controlBar.el().appendChild(X.el());
            //  });


             










        },
        initRight(){
            let options =  {
                bigPlayButton: true, 
                poster:'https://pic.616pic.com/photoone/00/00/56/618ce8b3797b76152.jpg',
                width:500,
                height:300,
                playbackRates: [1,2,4,8],
                defaultPlaybackRate:1,
                muted: true // //静音模式   解决首次页面加载播放。
            }
            this.playerRight =  video('video1',options)
            // var newOptions = {
            //     src:'https://highlight-video.cdn.bcebos.com/video/6s/db7dd394-2b9b-11ee-82a5-7cd30a6992c0.mp4',
            //     loop: true,
            //     playbackRates: [0.5, 1, 1.5, 2] // 新的播放速率选项
            // };

            // var mergedOptions = video.mergeOptions(this.playerRight.options_, newOptions);
            // this.playerRight.options(newOptions);
            this.playUrl1 = 'https://highlight-video.cdn.bcebos.com/video/6s/db7dd394-2b9b-11ee-82a5-7cd30a6992c0.mp4'


        }
    }

}

</script>

<style scoped lang="less">


</style>