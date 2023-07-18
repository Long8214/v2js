<template>
    <div>
      <div class="app-container"          
       @mouseenter="autoScroll(true)"
      @mouseleave="autoScroll">
        <el-table
          v-loading="loading"
          :data="tableData"
          :max-height="300"
          ref="scrollTable"

        >
        <el-table-column label="名字" prop="name"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="身高" prop="height"></el-table-column>
        </el-table>
      </div>
    </div>
  </template>
  <script>
// import mixins from "./mixins";
export default {
  data() {
  	return {
  		loading: false,
        tableData: [
            {
                name:'小王',
                age:'14',
                height:'35',
            },
            {
                name:'a',
                age:'14',
                height:'35',
            },
            {
                name:'v',
                age:'14',
                height:'35',
            },
            {
                name:'c',
                age:'14',
                height:'35',
            },
            {
                name:'x',
                age:'14',
                height:'35',
            },
            {
                name:'z',
                age:'14',
                height:'35',
            },
            {
                name:'q',
                age:'14',
                height:'35',
            },
            {
                name:'w',
                age:'14',
                height:'35',
            },
            {
                name:'e',
                age:'14',
                height:'35',
            },
        ],
        time: '', // 自动滚动的定时任务
  	}
  },
  mounted() {
      this.autoScroll()
  },
  beforeDestroy() {
   	this.autoScroll(true)
  },
  methods: {
  	// 设置自动滚动
    autoScroll(stop) {
        const table = this.$refs.scrollTable
        // 拿到表格中承载数据的div元素
        const divData = table.$refs.bodyWrapper
        let t = document.getElementsByClassName("el-table__body")[0];
        // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
        const rows = this.$el.querySelectorAll('.el-table__row')
          rows[5].classList.add('highlight')
        // console.log('t',t)
        t.style.transition = "all 0s ease 0s"
        if (stop == true) {
            //再通过事件监听，监听到 组件销毁 后，再执行关闭计时器。
            window.clearInterval(this.time)
        } else {

            this.time = window.setInterval(() => {
                // 元素自增距离顶部1像素
                divData.scrollTop += 48
                // divData.style.transition = "all 0s ease 0s"
                console.dir(divData)
                // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
                if (divData.clientHeight + divData.scrollTop == divData.scrollHeight) {
                    // 重置table距离顶部距离
                    divData.scrollTop = 0
                    // 重置table距离顶部距离。值=(滚动到底部时，距离顶部的大小) - 整个高度/2
                    // divData.scrollTop = divData.scrollTop - divData.scrollHeight / 2
                }
            }, 1500) // 滚动速度
        }
    },
  }
};
</script>

<style scoped>
 /deep/ .highlight {
  background-color: yellow;
}
</style> 

