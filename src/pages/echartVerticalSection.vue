<template>
    <div>

        <div id="chart-container" style="width: 600px; height: 300px"></div>
        <el-form :model="model" ref="form" :rules="rules">
            <el-form-item prop="age">
                <el-input v-model.number="model.age" type="number"></el-input>
            </el-form-item>
            <el-form-item prop="bge">
                <el-input v-model.number="model.bge" type="number"></el-input>
            </el-form-item>
            <el-form-item prop="cge">
                <el-input v-model.number="model.cge" type="number"></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="add">校验</el-button>
    </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "echartVerticalSection",
  mounted() {
    this.initChart();
  },
  data() {

    var checkAge = (rule, value, callback) => {
        if(value === '' ){
            callback();
        }else if (value < 5 || value > 600) {
            callback(new Error('输入内容有误'));
        } else {
            callback();
        }
    };
    var checkBge = (rule, value, callback) => {
        if (value < 5 || value > 600) {
            callback(new Error('输入内容有误'));
        } else {
            callback();
        }
    };
    var checkCge = (rule, value, callback) => {
         if (value < 5 || value > 10) {
            callback(new Error('输入内容有误'));
        } else {
            callback();
        }
    };


    return {
        model:{
            age:'',
            bge:'',
            cge:'',
        },
        rules:{
            age: [ { validator: checkAge, trigger: 'change' } ] ,
            bge: [ { validator: checkBge, trigger: 'change' } ] ,
            cge: [ { validator: checkCge, trigger: 'change' } ] ,
        },
      option: {},
      echart: {},
    };
  },
  methods: {
    add(){
        console.log(this.$refs.form)
        this.$refs.form.validate().then(v=>{
            console.log('v',v)
        }).catch(r=>{
            console.log('r',r)
        })
    },
    initChart() {
      this.echart = echarts.init(document.getElementById("chart-container"));
      let cdistanceList = [
        0, 11.182, 17.235, 23.284, 25.532, 27.683, 29.711, 31.853, 33.992,
        36.105, 40.695, 43.278, 48.317, 67.765, 70.772, 76.278, 95.997, 115.493,
        134.76, 153.085, 170.792, 182.942, 202.305, 222.338, 240.223, 258.011,
        277.409, 295.825, 313.735, 314.761, 315.778, 316.789, 326.547, 328.27,
        371.906, 386.836, 390.672, 405.478, 419.191, 422.911, 426.661, 433.4,
        434.425, 435.466, 436.514, 437.674, 438.724, 439.773, 440.794, 441.799,
        449.105, 449.744, 453, 471.069, 475.142,
      ];
      let eleList = [
        8.138, 8.885, 6.332, 6.006, 5.63, 5.668, 5.738, 5.822, 5.81, 5.939,
        6.422, 6.722, 9.298, 8.759, 9.441, 8.075, 8.013, 7.986, 7.91, 7.865,
        7.739, 7.531, 7.469, 7.41, 7.368, 7.297, 7.175, 7.249, 5.183, 5.08,
        5.106, 5.498, 6.072, 7.388, 7.388, 12.002, 11.997, 6.329, 6.567, 5.193,
        5.136, 5.043, 4.808, 4.486, 4.187, 4.085, 4.111, 4.192, 4.376, 4.599,
        5.273, 5.903, 6.402, 12.569, 12.602,
      ];
      let data = [] 
      cdistanceList.forEach((item,index)=>{
        data.push([item,eleList[index]])
      })
      this.option = {
        title: {
          text: "纵断面图",
        },
        tooltip: {
          trigger: "axis", // 鼠标移动到坐标轴上时触发
          formatter: function (params) {
            let X = "起点距(m):" + params[0].axisValue;
            let Y = "高程(m):" + params[0].value[1];
           
            if(params[1]){
              let S = "水位(m):" + params[1].value[1]
              return `${S}</br>${X}</br>${Y}`
            }else{
              return `${X}</br>${Y}`;
            }
          },
          axisPointer: {
            type: "line", // 指示器类型为线性
            label: {
              show: true, // 显示提示标签
              backgroundColor: '#fff', // 提示标签背景颜色
              borderColor: '#ccc', // 提示标签边框颜色
              borderWidth: 1, // 提示标签边框宽度
              padding: [5, 10], // 提示标签内边距
              textStyle: {
                color: '#000' // 提示标签文本颜色
              }
            }
          },
        },
        xAxis: {
          type: "value",
        //   data: cdistanceList, // 横坐标数据
        },
        yAxis: {
          type: "value",
        //   data:eleList
        },
        legend:{
            data:  {
                    name: "高程",
                    icon: "line",
                },
            textStyle: {
                fontSize: 11,
                color: "#DDECFF",
            },
        },
        series: [
          {
            name:'高程',
            type: "line",
            data: data, // 纵坐标数据
          },
        ],
      };
      this.echart.setOption(this.option);
    },
  },
};
</script>

<style scoped >
</style>