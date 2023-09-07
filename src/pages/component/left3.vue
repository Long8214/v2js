<template>
    <div>
        <div id="chart" class="box">

        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    name:'left1',
    data() {
      return {
      }
    },
    mounted () {
      this.dealChart()
    },
    methods :{

        dealChart( ) {
          const myChart = echarts.init(document.getElementById('chart'));
          const option = {
                legend: {   //设置legend
                  data: ['影响村庄数', '影响人数']
                },
                title: {
                  // text: '柱状图'
                },
                xAxis: {
                  axisLine: {
                    show: false  // 隐藏y轴刻度线
                  },
                  axisTick :{
                    show:false
                  },
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                yAxis: {
                  show: false, // 隐藏 y 轴
                  axisLine: {
                    show: false  // 隐藏y轴刻度线
                  },
                  
                  type: 'value'
                },
                series: [
                  {
                      name: '影响村庄数',
                      type: 'bar',
                      data: [5, 20, 36, 10, 10, 20],
                      barWidth: 10, // 设置柱状条宽度
                      itemStyle: {  // 系列一的颜色
                        color: '#ab56f2',
                        barBorderRadius: [8, 8, 0, 0],    //圆柱顶部为椭圆
                      }
                    },
                    {
                      name: '影响人数',
                      type: 'bar',
                      data: [15, 6, 12, 7, 18, 33],
                      barWidth: 10, // 设置柱状条宽度
                      itemStyle: {  // 系列一的颜色
                        color: '#22b5fd',
                        barBorderRadius: [8, 8, 0, 0], 
                      }
                    },
                  ],
                    // 设置图例的颜色块尺寸
  legend: {
      itemWidth: 10,
      itemHeight: 10,
  }
              };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        }

    }
}
</script>
<style lang="less" scoped>
.box {
  padding: 10px;
  box-sizing: border-box;
  width: 400px;
  height: 300px;
}
</style>