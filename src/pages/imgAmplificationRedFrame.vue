<template>
<div>
    <div class="imgAllBox">
        <img @click="imgAmplification(i.url)" v-for="(i,index) in imgAll" :src="i.url" :key="index" alt="">
    </div>
    <svg id="svgId" width="720" height="540" v-if="flag">
        <image  width="100%" height="100%" :href="imgUrl"></image>
        <template  v-for="val in rectArr" >
          <!-- <rect  :x="val.x1" :y="val.y1" :width="val.x2-val.x1" :height="val.y2-val.y1" style="stroke-width:1;stroke:red;fill-opacity:0.1"/> -->
          <!-- <rect  :x="100" :y="10" :width="10-10" :height="10-10" style="fill:rgba(0,0,0,0);stroke-width:1;stroke:red;fill-opacity:0.1"/> -->
            <rect   :x="val.x1" :y="val.y1" :width="val.x2" :height="val.y2" style="fill:rgba(0,0,0,0);stroke-width:1;stroke:red;fill-opacity:0.1"/>
        </template>
    </svg>
</div>

</template>

<script>
export default {
    name:'imgAmplificationRedFrame',
    data(){
        return  {
            flag:false,
            imgAll:[
                { url:'/img/驾驶舱白.15bb15a2.png'},
                { url:'/img/404.4b444096.gif'},
                { url:'/img/cat.c3efab58.jpg'}
            ],
            imgUrl:'',
            rectArr:[
                {
                    id:0,
                    x1:101,
                    x2:102,
                    y1:103,
                    y2:104
                },
                {
                    id:2,
                    x1:201,
                    x2:202,
                    y1:203,
                    y2:204
                },
                {
                    id:3,
                    x1:301,
                    x2:302,
                    y1:303,
                    y2:304
                },
            ]
           
        }
    },
    methods:{
        imgAmplification(imgUrl){
            this.flag = true
            this.imgUrl = imgUrl
            document.querySelector("#svgId")
            // this.rectArr[id].svg.addEventListener(
            //     "mousedown",
            //     ev=>{ this.Down(ev,id) },
            //     true
            // );

        }
    }

}

</script>

<style scoped lang="less">
.imgAllBox{
    img{
        width: 100px;
        height: 100px;
        margin: 10px;
    }
}

</style>