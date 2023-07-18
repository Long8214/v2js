<template>
        <div style="width:100%;height:100%" id="chart-container">
    
        </div>


</template>

<script>
import echarts from 'echarts'

export default {
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      // 创建一个容器
      const container = document.getElementById('chart-container')
      // 创建一个图表实例
      const chart = echarts.init(container)
      let arr = []

      for(let i = 0 ; i < 40000 ; i++){
        // arr.push(Math.floor(Math.random() * 10001))
        arr.push(i)
      }
      // 设置图表的配置项和数据
      const options = {
        tooltip: {
          trigger: "axis", // 鼠标移动到坐标轴上时触发
        //   formatter: function (params) {
        //     let t = yTitle + ':' + params[0].value;
        //     let tm = (_info.ptype == 1 ? "时刻:" : "时间(h):" ) + params[0].axisValue;
        //       return `${t}</br>${tm}`;
        //   },
          axisPointer: {
            type: "line", // 指示器类型为线性
            // label: {
            //   show: true, // 显示提示标签
            //   backgroundColor: '#fff', // 提示标签背景颜色
            //   borderColor: '#ccc', // 提示标签边框颜色
            //   borderWidth: 1, // 提示标签边框宽度
            //   padding: [5, 10], // 提示标签内边距
            //   textStyle: {
            //     color: '#000' // 提示标签文本颜色
            //   }
            // }
          },
        },
        xAxis: {
            type: 'category',
            data: arr
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: arr,
            type: 'line'
        }]
      }

      // 使用刚指定的配置项和数据显示图表
      chart.setOption(options)


    }
  }
}
</script>

<style scoped lang="less">


</style>