<template>
  <div>
    <button @click="playSound">播放声音</button>
    <audio controls  v-show="false">
      <source src="../assets/audio/y1262.mp3" >
    </audio>
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
      // const sound = new Howl({
      //   src: ['../assets/audio/y1262.mp3']
      // });
      // sound.play();
      let $audio = document.getElementsByTagName('audio')[0];//获取音乐DOM节点
       $audio.play()

    }

  }

}
</script>
<style scoped lang="less">

</style>
