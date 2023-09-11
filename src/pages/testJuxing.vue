<template>
  <div>
    <!-- <div >
      <cavasJuxing  :coords="coords" v-for="(coords, index) in multipleCoords" :key="index" />
    </div> -->
    <div class="image-container">
      <cavasJuxing :coords="combinedCoords" />
    </div>
  </div>

 
</template>
<script>
import cavasJuxing from "./cavasJuxing.vue"
export default ({
  components:{cavasJuxing},
  data() {
    return {
      multipleCoords: [
        [10, 58, 63, 12], // 第一组四个像素点的位置
        [20, 68, 53, 10], // 第二组四个像素点的位置
        // ...
      ],
    }
  },
  computed: {
    combinedCoords() {
      return this.multipleCoords.flat();
    },
  },
})
</script>

