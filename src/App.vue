<template>
  <div class="rsa-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App'
};
</script>
<style>
.el-scrollbar__view .disabled{
  display: none;
}
.ant-time-picker-panel-combobox li[disabled]{
  display: none;
}
.rsa-container{
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
body,html{
  height: 100%;
}
html {
  font-size: 10px;
}
@media screen and (max-width: 767px) {
  html {
    font-size: 10px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  html {
    font-size: 15px;
  }
}
@media screen and (min-width: 1024px) {
  html {
    font-size: 20px;
  }
}

</style>

