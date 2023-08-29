<template>
  <section>
    <el-card class="bodyLeft">
     <router-link :to="i.link" v-for="i in data" :key="i.link"> 
      <el-tooltip class="item" effect="dark" :content="i.name" placement="bottom">
        <el-button type="primary" > {{ i.name }} </el-button>
      </el-tooltip>
     </router-link>
    </el-card>
    <el-card  class="bodyRight">
      <router-view></router-view>
    </el-card>
  </section>
</template>
<script >
import route from '../router'
export  default {
  name:'home',
  data:()=>({data:[]}),
  created(){
    this.data = route.options.routes[0].children.map(item=>({link:item.path, name:item.meta.name}))
  }

}

</script>

<style scoped lang="less">

section{
  height: 100%;
  width: 100%;
  padding: 20px;
  .bodyLeft,.bodyRight{
    overflow-y: auto;
    display: inline-block;
    height: 100%;
  }
  .bodyLeft {
    width: 20%;
  }
  .bodyRight{
    margin-left: 10px;
    width: calc(80% - 10px);
  }
}

/deep/  .el-button--primary{
  margin: 6px;
}
/deep/ .el-card__body{
  height: 100%;
}
</style>
