<template>
    <div class="container">
       <marquee :val="title"></marquee>
    </div>
   </template>
   <script>
   import marquee from './contentRollSon'
  export default {
    name: 'index',
    components: {
     marquee
    },
    data () {
     return {
        title: '123456789012345678901234567890'
     }
    },
  }
   </script>

   <style scoped>
   .container{
    width: 100px;
   }
</style>