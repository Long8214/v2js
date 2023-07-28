<template>
  <div class="marquee-wrap">
   <div class="scroll">
    <p class="marquee">{{text}}</p>
    <p class="copy"></p>
   </div>
   <p class="getWidth">{{text}}</p>
  </div>
 </template>
 
 <script>
 export default {
  name: 'marquee',
  props: ['val'],
  data () {
   return {
    timer: null,
    text: ''
   }
  },
  created () {
   let timer = setTimeout(() => {
    this.move()
    clearTimeout(timer)
   }, 1000)
  },
  mounted () {
   for (let item of this.val) {
    this.text += '' + item
   }
  },
  methods: {
   move () {
    let maxWidth = document.querySelector('.marquee-wrap').clientWidth
    let width = document.querySelector('.getWidth').scrollWidth
    if (width <= maxWidth) return
    let scroll = document.querySelector('.scroll')
    let copy = document.querySelector('.copy')
    copy.innerText = this.text
    let distance = 0 
    this.timer = setInterval(() => {
     distance -= 1
     if (-distance >= width) {
      distance = 16
     }
     scroll.style.transform = 'translateX(' + distance + 'px)'
    }, 20)
   }
  },
  beforeDestroy () {
   clearInterval(this.timer)
  }
 }
 </script>
 
 <style scoped>
  .marquee-wrap {
   width: 100%;
   overflow: hidden;
   position: relative;
  }
  .marquee{
   margin-right: 16px;
  }
  p {
   word-break:keep-all;
   white-space: nowrap;
   font-size: 16px;
   font-family: "微软雅黑 Light";
  }
  .scroll {
   display: flex;
  }
  .getWidth {
   word-break:keep-all;
   white-space:nowrap;
   position: absolute;
   opacity: 0;
   top: 0;
  }
 </style>