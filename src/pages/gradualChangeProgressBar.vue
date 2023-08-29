<template>
  <div class="main" >
    <div class="videoBox">
         <div class="box">
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.one}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.two}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.three}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.four}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.five}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.six}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.seven}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.eight}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.nine}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.ten}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.eleven}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.twelve}%`"></div>
            </div>
          <div class="container"> 
              <div class="inner"></div>
              <div class="percentage" :style="`height:${list.thirteen}%`"></div>
            </div>
         </div>
         <audio controls loop  >
              <source src="http://m801.music.126.net/20230825164029/021bf84d7fe90273734e5037b638cd07/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482036682/8f4a/af03/cb54/af89db478aae352165a3f0a5d44e1197.m4a" type="audio/ogg">
              <source src="http://m801.music.126.net/20230825164029/021bf84d7fe90273734e5037b638cd07/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/28482036682/8f4a/af03/cb54/af89db478aae352165a3f0a5d44e1197.m4a" type="audio/mpeg">
              您的浏览器不支持 audio 元素。
         </audio>
    </div>
    <svg class="svg" @mouseenter="mouseenter" @mouseleave="mouseleave" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>
  </div>
</template>

<script>
export default {
    name:'gradualChangeProgressBar',
    data(){
        return {
            list:{
                one:0,
                two:0,
                three:0,
                four:0,
                five:0,
                six:0,
                seven:0,
                eight:0,
                nine:0,
                ten:0,
                eleven:0,
                twelve:0,
                thirteen:0
            },
            time:null
        }
    },
    mounted(){
        this.init()
    },
    methods:{
        init(){
            //初始化一次
            for(let i in this.list){
                this.list[i] = this.random(0,100)
            }
            //定时调用
            this.autoplay()
            // 先暂停一次
            clearInterval(this.time)
            // 监听
            let $audio = document.getElementsByTagName('audio')[0];//获取音乐DOM节点
            $audio.addEventListener("playing", this.playing);
            $audio.addEventListener("pause",this.pause);
        },
        // 随机数
        random(max,min){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        // 定时播放
        autoplay(){
            this.time = setInterval(()=>{
                for(let i in this.list){
                    this.list[i] = this.random(0,100)
                }
            },200)
        },
        // 播放回调
        playing(){
            this.autoplay()
        },
        // 暂停回调
        pause(){
            clearInterval(this.time)
        },
        mouseenter(){
            let dom =  document.querySelector('.svg')
            dom.classList.add('ddd')
        },
        mouseleave(){
            let dom =  document.querySelector('.svg')
            dom.classList.remove('ddd'); //删除类名
        }
    },
    beforeDestroy(){
       clearInterval(this.time)
    }
}

</script>

<style scoped lang="less">
.main{
  width: 100%;
  height: 100%;
  background-color: #efeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
}
    .box{
        display: flex;
    }
  .container {
    width: 20px;
    height: 180px;
    position: relative;
    margin-right: 4px;
  }
  
  .inner {
    width: 20px;
    height: 180px;
    background: linear-gradient(0deg, #2d4264 50%, #0a1431 50%);
    background-size: 100% 6px;
  }
  .percentage {
    position: absolute;
    bottom: 0;
    width: 20px;
    background: linear-gradient(to bottom, #24a1d8 0%, #3e25c8 100%);
    transition: all .2s;
  }
  
  .percentage::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 180px;
    width: 20px;
    background: linear-gradient(0deg, transparent 50%, #0a1431 50%);
    background-size: 100% 6px;
  }
    audio {
        border-radius: 30px;
        width: 308px;
        height: 40px;
        outline: none;
        filter: invert(180); 
    }
    
    audio::-webkit-media-controls-enclosure {
        background: rgb(129, 73, 200);
        /* 滤镜反转为 rgba(0, 162, 255, 1);rgba(255, 93, 0, 0.8) #7eb637 10,10,10 #757575 */
        border-radius: 4px;
    }
    .media-controls-container,
    .media-controls-container * {
    background: rgb(129, 73, 200);
    border-radius: 4px;
    }
    
    audio::-webkit-media-controls-play-button {
    height: 22px;
    width: 22px;
    min-width: 22px;
    border-radius: 50%;
    flex-basis: 22px;
    }
    
    audio::-webkit-media-controls-volume-control-container {
    display: none;
    }
    
    audio::-webkit-media-controls-current-time-display {
    order: 1; //设置弹性盒对象元素的顺序
    color: #000;
    text-shadow: unset;
    }
    
    audio::-webkit-media-controls-time-remaining-display {
    order: 2;
    color: rgba(0, 0, 0, 0.6);
    text-shadow: unset;
    }

    .videoBox{
      max-width: max-content;
      padding: 30px;
      transition: all 1s;
      border-radius: 30px;
      margin: 20px 0;
    }
    .videoBox:hover{
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(255, 255, 255, 0.8),
      inset 18px 18px 30px rgba(0, 0, 0, 0.1),
      inset -18px -18px 30px rgba(255, 255, 255, 1);
    }
    @keyframes ball {
      0% { transform: rotate(0deg) scale(1.2); }
      45% { transform: rotate(10deg) scale(1.2); }
      60% { transform: rotate(-10deg) scale(1.2);} 
      75% { transform: rotate(10deg) scale(1.2); }
      90% { transform: rotate(-10deg) scale(1.2);} 
      100% { transform: rotate(0deg) scale(1);} 
    }
    .svg{
      width: 100px;
      height: 100px;
    }
    .ddd {
      transition: all 1s;
      animation-duration: 1s;
      border-radius: 20px;
      animation-name: ball;
    }
</style>