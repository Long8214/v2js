vue
<template>
  <div>
    <video ref="videoElement" style="width100px;height:100px"></video>
    <button @click="takePhoto">拍照</button>
    <img v-if="photoData" :src="photoData" alt="拍摄" style="width100px;height:100px">
  </div>
</template>

<script>
// import VueWebCam from 'vue-web-cam';

export default {
  components: {
    // VueWebCam
  },
  data() {
    return {
      photoData: null,
      videoElement: null
    };
  },
  mounted() {
    console.log(navigator)
    this.videoElement = this.$refs.videoElement;
    this.startCamera();
  },
  methods: {
    startCamera() {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          this.videoElement.srcObject = stream;
          this.videoElement.play();
        })
        .catch(error => {
          this.$message.error('摄像头启动失败')
        });
    },
    takePhoto() {
      const canvas = document.createElement('canvas');
      canvas.width = this.videoElement.videoWidth;
      canvas.height = this.videoElement.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
      console.log(canvas.toDataURL())
      this.photoData = canvas.toDataURL();
    }
  }
};
</script>