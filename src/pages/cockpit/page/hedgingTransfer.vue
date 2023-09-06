<template>
        <div :style="`width:100%; height: 320px`" ref="echarts" id="echarts"></div>
  </template>
      
  <script>
  export default {
    name: "hedgingTransfer",
    data() {
      return {
        mychart: "",
        option: {},
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        // 重置echarts
        // if ( this.mychart != "" && this.mychart != null && this.mychart != undefined ) {
        //   this.mychart.dispose();
        // }
        this.getECharts();
      },
      getECharts() {
        this.mychart = this.$echarts.init(document.getElementById("echarts"));
        this.option = {
          legend: {
            left:120,
            top:16,
            icon: `path://M80,50h40q10,0 10,10v40q0,10 -10,10h-40q-10,0 -10,-10v-40q0,-10 10,-10Z`
          },
          tooltip: {
            trigger: "axis", // 鼠标移动到坐标轴上时触发
          },
          grid: {
            left: 35, // 网格左侧距离容器左侧的距离
            right: 5, // 网格右侧距离容器右侧的距离
            top: 80, // 网格顶部距离容器顶部的距离
            bottom: 20, // 网格底部距离容器底部的距离
          },
          dataset: {
            source: [
              ["product", "应转移", "已转移","未转移"],
              ["长春市", 52.5, 220,52.5],
              ["吉林市", 25, 110,52.5],
              ["四平市", 32, 160,52.5],
              ["辽源市", 32, 160,52.5],
              ["通化市", 22, 90.9,52.5],
              ["白山市", 40, 147,52.5],
              ["白城市", 12, 47,52.5],
            ],
          },
          xAxis: {
            type: "category",
            axisTick: {
              show: false, // 不显示刻度点
            },
            // 刻度
            axisLabel: {
              textStyle: {
                color:"#666"
              },
              fontSize: 11,
              interval: 0,
            },
              axisLine: {
                lineStyle: {
                  // color: "#b5fba5",
                  color: "rgba(197, 197, 197,.6)",
                  width: 1,
                },
              },
          },
  
          yAxis: {
              show: true,
              type: "value",
              // 背景线
              splitLine: {
                show: true,
                lineStyle: {
                  width: 1,
                  color: "rgba(197, 197, 197,.6)",
                  type: "dotted", //实线
                },
              },
              axisTick: {
                show: false, // 不显示刻度点
              },
              // y线
              axisLine: {
                lineStyle: {
                  // color: "#b5fba5",
                  color: "rgba(197, 197, 197,.6)",
                  width: 1,
                },
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#BCBCBC"
                },
                fontSize: 11,
                interval: "auto",
                formatter: "{value}",
              },
              name: '数量 : 人',
              nameTextStyle: {
                fontSize:11,
                color: "#BCBCBC"
              },
            },
          series: [
            {
              type: "bar",
              itemStyle: {
                barBorderRadius: [10, 10, 0, 0],
                color: "#aa55f2", // 设置柱状图的颜色
              },
              barWidth: 7,
            },
            {
              type: "bar",
              itemStyle: {
                barBorderRadius: [10, 10, 0, 0],
                color: "#43b2fc", // 设置柱状图的颜色
              },
              barWidth: 7,
            },
            {
              type: "bar",
              itemStyle: {
                barBorderRadius: [10, 10, 0, 0],
                color: "#e5a735", // 设置柱状图的颜色
              },
              barWidth: 7,
            },
          ],
        };
       
        this.mychart.setOption(this.option);
      },
    },
  };
  </script>
      
  <style scoped >
  div{
    margin-bottom: 20px;
  }
  </style>