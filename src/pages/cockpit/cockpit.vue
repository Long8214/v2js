<template>
<section>
  <!-- 左盒子 -->
  <div class="leftInfoBox z-index" v-show="leftInfoBox">
    <!-- 防御对象 -->
    <childSlot title="防御对象" >
      <template v-slot:main>
        <defenseObj></defenseObj>
      </template>
    </childSlot>
    <!-- 风险分布 -->
    <childSlot title="风险分布" >
      <template v-slot:main>
        <riskDistribute></riskDistribute>
      </template>
    </childSlot>
    <!-- 风险隐患清单 -->
    <childSlot title="风险隐患清单">
      <template v-slot:main>
        <hazardList></hazardList>
      </template>
    </childSlot>
  </div>

  <!-- 右盒子 -->
  <div class="rightInfoBox z-index" style="background:rgba(255, 255, 255,.95);" v-show="rightInfoBox">
    <!-- 避险转移 -->
    <childSlot title="避险转移" >
      <template v-slot:main>
        <hedgingTransfer></hedgingTransfer>
      </template>
    </childSlot>
    <!-- 风险预警 -->
    <childSlot title="风险预警" >
      <template v-slot:main>
        <riskWarning></riskWarning>
      </template>
    </childSlot>
    <!-- 风险预警 -->
    <childSlot title="风险预警" >
      <template v-slot:main>
        <noteRiskWarning></noteRiskWarning>
      </template>
    </childSlot>
  </div>

  <div class="toolBox z-index">

  </div>

  <!-- <Map ref="map" key="cockpit" :noneTools="true"></Map> -->
  <!-- 箭头样式 start -->
  <div class="leftbox_right z-index" v-show="leftInfoBox" @click="boxShowBtn('leftInfoBox')">
    <span class="el-icon-caret-left lefts" style="left: -17px;"></span>
  </div>
  <div class="leftbox_left z-index" v-show="!leftInfoBox" @click="boxShowBtn('leftInfoBox')">
    <span class="el-icon-caret-right lefts" style="left: -17px;"></span>
  </div>
  <div class="rightbox_right z-index" v-show="rightInfoBox" @click="boxShowBtn('rightInfoBox')">
    <span class="el-icon-caret-right rights" style="right: -17px;"></span>
  </div>
  <div class="rightbox_left z-index" v-show="!rightInfoBox" @click="boxShowBtn('rightInfoBox')">
    <span class="el-icon-caret-left rights" style="right: -17px;"></span>
  </div>
  <!-- 箭头样式 end -->

</section>
</template>


<script scoped>
import childSlot from './page/childSlot'
import defenseObj from './page/defenseObj'
import riskDistribute from './page/riskDistribute'
import hazardList from './page/hazardList'
import hedgingTransfer from './page/hedgingTransfer'
import riskWarning from './page/riskWarning'
import noteRiskWarning from './page/noteRiskWarning'
// import map from '@/components/map/map.vue'
export default {
  name: "cockpit",
  components:{
    childSlot,
    defenseObj,
    riskDistribute,
    hedgingTransfer,
    hazardList,
    riskWarning,
    noteRiskWarning,
    // 'Map': map,
  },
  data(){
    return {
      leftInfoBox:true, // 左侧盒子状态
      rightInfoBox:true,  // 右侧盒子状态
    }
  },
  methods:{
    boxShowBtn(val){
      this[val]=!this[val]
    },


  },
  mounted() {
    // this.$refs.map.map.fitBounds([[121.638373-3.8, 40.862161], [131.314587+3.8, 46.303409]])
  }
}
</script>


<style scoped lang="less">
.z-index{
  z-index: 200;
}
section{
  box-sizing: border-box;
  width:100%;
  height: 100%;
  position: relative;
  overflow: hidden;

}
.leftInfoBox,.rightInfoBox{
  box-sizing: border-box;
  position: absolute;
  overflow-y: auto;
  max-height: calc(100% - 14px);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.41);
  width: 400px;
  padding: 13px 10px ;

}
.rightInfoBox{
  max-height: calc(100% - 27px - 40px);
  top: 58px;
  right: 10px;
}
.leftInfoBox{
  top: 7px;
  left: 10px;
}


.leftbox_right,.leftbox_left,.rightbox_right,.rightbox_left{
  position: absolute;
  top: 88px;
  height: 35px;
  border-left: 12px solid rgba(255, 255, 255,.95);
  border-right: 12px solid transparent;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  cursor: pointer;
  z-index: 201;
}

.rightbox_right,.rightbox_left{
  top: calc(88px + 58px);
  border-left: 12px solid transparent;
  border-right: 12px solid rgba(255, 255, 255,.95);
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
}
.leftbox_right{
  left: 410px;
}
.leftbox_left{
  left: 0;
}
.lefts,.rights{
  font-size: 18px;
  color: #c3c3c3;
  position: absolute;
  top: 6px;
}

.rightbox_right{
  right: 410px;
}
.rightbox_left{
  right: 0px;
}
.toolBox{
  width: 400px;
  height: 40px;
  background: rgba(255, 255, 255,1);
  border: 1px solid #E3E3E3;
  position: absolute;
  right: 10px;
  top: 9px;
}
</style>
