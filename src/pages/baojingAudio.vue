<template>
  <div>
    <button @click="playSound">播放声音</button>
  </div>
</template>

<script>
import { Howl, Howler } from 'howler';

export default {
  data() {
    return {

    };
  },
  methods:{
    playSound() {
      const sound = new Howl({
        src: ['/src/assets/audio/y1262.mp3']
      });
      sound.play();
    }

  }

}
</script>
<style scoped lang="less">

</style>
