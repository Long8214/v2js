<template>
  <div>
    <!-- <WebCam :height="400" :width="200" ref="webcam"></WebCam> -->
    <button @click="capture">Capture</button>
    <el-button @click="start">开启</el-button>
    <el-button @click="stop">结束</el-button>
    <img :src="imageSrc"  v-if="imageSrc"/>
  </div>
</template>

<script>
// import {WebCam} from 'vue-web-cam';
export default {
  components: {
    // WebCam
  },
  data(){
    return {
      imageSrc:''
    }
  },  
  methods: {
    async capture() {
      this.imageSrc = await this.$refs.webcam.capture(r=>{
        console.log(1111,r)
      })
      // 处理捕获的图像数据
    },
    start(){
      // console.log(this.$refs.webcam.start())
      this.$refs.webcam.snap(r=>{
        console.log('r',r)
      })

    },
    stop(){
      this.$refs.webcam.stop();

    }
  },
  mounted(){
    this.$refs.webcam.capture();

    // console.log(this.$refs.webcam)
  }
}
</script>