<template>
  <div>
    <p>原手机号:{{ num }}</p>
    <button @click="dealNum">脱敏</button>{{ newNum }}
  </div>
</template>

<script>

export default {
  data() {
    return{
    num : '13313221321',
    newNum:''
}
  },
  mounted() {
  },
  methods: {
    // 手机号脱敏显示
  //所有显示手机号的位置，都脱敏展示，显示前三位及后四位，中间四位脱敏
  desensitization(number) {
    if (number) {
      let newNumber = number.replace(/^(.{3}).*(.{4})$/, "$1****$2");
      return newNumber;
    }
  },
  dealNum() {
  this.newNum =  this.desensitization(this.num)
  }
  }
}
</script>

<style scoped lang="less"></style>
