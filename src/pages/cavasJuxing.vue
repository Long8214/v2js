<template>
  <div class="canvas-container">
    <canvas
    class="canvas"
      :width="imageWidth"
      :height="imageHeight"
      ref="canvas"
    />
    <img src="../assets/images/cat.jpg" alt="" @load="drawRect"  width="500px" height="400px"/>
  </div>
</template>

<script>
export default {
  props: {
    coords: {
      type: Array, // 坐标 [x, y, width, height]
      required: true
    }
  },
  data() {
    return {
      imageWidth: null,
      imageHeight: null
    };
  },
  mounted() {
    this.getImageSize();
  },
  methods: {
    getImageSize() {
      const img = new Image();
      img.src = this.imageUrl;
      img.onload = () => {
        this.imageWidth = img.width;
        this.imageHeight = img.height;
      };
    },
    drawRect() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      const [x, y, width, height] = this.coords;
      ctx.strokeStyle = "#FF0000";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
    }
  }
};
</script>
<style scoped>
.canvas-container {
  position: relative;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
