<!-- 高亮展示  三秒后熄灭 -->
<!-- <template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="date" label="时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{name: '订单A', date: '2022-01-01 10:42:12'}],
        highlightData: [] // 用于记录需要高亮的订单数据
      }
    },
    methods: {
      addNewOrder() {
        const newOrder = {name: `订单${this.tableData.length+1}`, date: new Date().toLocaleString()}

        // 将新增订单添加到表格中
        this.tableData.push(newOrder)

        // 记录需要高亮的订单数据
        // this.highlightData.push(newOrder)

        // 15秒钟后取消高亮
        // setTimeout(() => {
        //   const index = this.highlightData.indexOf(newOrder)
        //   if (index > -1) {
        //     this.highlightData.splice(index, 1)
        //   }
        // }, 15000)
        this.$nextTick(()=>{
          const rows = this.$el.querySelectorAll('.el-table__row')
          rows[rows.length-1].classList.add('highlight')
          rows[rows.length-1].time = Date.now() //打标记号

          setTimeout(()=>{
            const aa = this.$el.querySelectorAll('.el-table__row')
            aa.forEach(item=>{
              if(item.time <= Date.now()-3000){
                item.classList.remove('highlight')
              }
            })
          },3000)
        })
      }
    },
    mounted() {
      // 定时添加订单数据
      setInterval(() => {
        this.addNewOrder()
      }, 1000)
    },
    updated() {
      // // 每次数据更新后高亮新增的订单
      // this.$nextTick(() => {
      //   const rows = this.$el.querySelectorAll('.el-table__row')
      //   // console.log(1123,this.$el.querySelectorAll('.el-table__row'))
      //   rows.forEach((row, index) => {
      //     if (this.highlightData.includes(this.tableData[index])) {
      //       console.log(row)
      //       row.classList.add('highlight')
      //       // row.classList.remove('highlight')
      //     }
      //   })
      // })
    },
    watch:{
      
    }
  }
</script>

<style scoped>
 /deep/ .highlight {
  background-color: yellow;
}
</style>  -->



<!-- 轮播 鼠标滑入停  -->

<template>
  <div @mouseleave="mouseleave" @mouseenter="mouseenter">
    <el-table class="customer-table" :data="config" stripe  style="height:300px" :header-cell-style="{background: '#1e116d'}"  >
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tableV",
  data() {
    return {
      time:null,
      config: [{ name: 1, age: "23", address: "北京" },{ name: "2", age: "23", address: "北京" },{ name: 3, age: "23", address: "北京" },{ name: 4, age: "23", address: "北京" },{ name: 5, age: "23", address: "北京" },{ name: "6", age: "23", address: "北京" }],
    };
  },
  created(){
     this. getright_table()//轮播 
     
    //  setTimeout(()=>{

    //   // 如果有数据的情况
    //   if(this.content[0]){
    //     clearInterval(this.time)
    //   }

    //   // 如果有数据的情况 需要开启定时器赋值
    //   if(this.content[0]){
    //     setTimeout(()=>{
    //       this.content = [{ name: 21231, age: "23", address: "北京" },{ name: 21231, age: "23", address: "北京" },{ name: 21231, age: "23", address: "北京" },{ name: 21231, age: "23", address: "北京" },{ name: "12313", age: "23", address: "北京" },{ name: "313131", age: "23", address: "北京" }]
    //     })
    //   }else{
    //     // 如果没有数据直接赋值
    //     this.content = [{ name: 21231, age: "23", address: "北京" },{ name: 21231, age: "23", address: "北京" },{ name: 21231, age: "23", address: "北京" },{ name: 21231, age: "23", address: "北京" },{ name: "12313", age: "23", address: "北京" },{ name: "313131", age: "23", address: "北京" }]
    //   }

    //   // 如果有数据的情况
    //   if(this.content[0]){
    //     this.getright_table()
    //   }

    //  },3000)
    
  },
  methods:{
    // getright_table(){
    //     var this_ = this

    //     this.$nextTick(() => {
    //       let div = document.getElementsByClassName("el-table__body-wrapper")[0];

    //       div.style.height = "100%";

    //       let t = document.getElementsByClassName("el-table__body")[0];

    //       let count = 0 

    //       this.time = setInterval(() => {
    //         count++
    //         // if (isScroll) {
    //           var data = this_.content[0];
    //           var data1 = this_.content[1];
    //           // t.style.transition = "all .5s";
    //           if(count == 1){
    //             // 滚动
    //             // t.style.transition = "all .5s";
    //             t.style.marginTop = "-47px";
    //             // setTimeout(()=>{
    //             //   t.style.marginTop = "-47px";

    //             // },500)
    //           }
    //           if(count == 2){
    //             // t.style.transition = "all .5s";
    //             // t.style.marginTop = '-94px';
    //             console.log('t.style.marginTop',t.style.marginTop)

    //             this_.content.push(data);
    //             this_.content.push(data1);

    //             this_.content.splice(0, 2);
    //             t.style.transition = "all 0s ease 0s";
    //             t.style.marginTop = "0";

    //             // t.style.transition = "all .5s";
    //             // t.style.marginTop = "-47px";

    //             count = 0
                
    //           }

    //           // if(count == 2){
    //           //   // 滚动

    //           //   // 塞数据   //滚动两次塞
    //           //   setTimeout(() => {
    //           //     this_.content.push(data);
    //           //     this_.content.push(data1);
    //           //   });
  
    //           //   // 截取数据  //滚动两次截取
    //           //   setTimeout(() => {
    //           //     this_.content.splice(0, 2);

    //           //     t.style.transition = "all 0s ease 0s";

    //           //     t.style.marginTop = "0";

    //           //   });
    //           //   count = 0
    //           // }
             

    //         // }

    //       }, 1000);





          
    //     });

    //   },
      getright_table() {
        var this_ = this;
        let count = 0
        this.$nextTick(() => {
          let div = document.getElementsByClassName('el-table__body-wrapper')[0];
          div.style.height = '100%';
          let t = document.getElementsByClassName('el-table__body')[0];
          this.time = setInterval(() => {
            var item = this_.config[count];

            count++;
            // 尾部追加
            this_.config.push(item);

            // 滚动动画
            t.style.transition = 'all .5s';
            t.style.marginTop = `-${count * 47}px`;

            if (count >= 2) {
              count = 0;
              setTimeout(() => {
                // 尾部截取
                this_.config.splice(0, 2);
                t.style.transition = 'none';

                t.style.marginTop = '0';
              },1000);
            }
          }, 2500);
        });
      },
      getright_table() {
        var this_ = this;
        this.$nextTick(() => {
          let div = document.getElementsByClassName('el-table__body-wrapper')[0];
          div.style.height = '100%';
          let t = document.getElementsByClassName('el-table__body')[0];
          this.time = setInterval(() => {
            var item = this_.config.data[count];

            count++;

            this_.config.data.push(item);

            t.style.transition = 'all .5s';
            t.style.marginTop = `-${count * 23}px`;

            if (count >= 2) {
              count = 0;
              setTimeout(() => {
                this_.config.data.splice(0, 2);
                t.style.transition = 'none';
                t.style.marginTop = '0';
              }, 1000);
            }
          }, 2500);
        });
      },

      mouseenter(){
        clearInterval(this.time)
      },
      mouseleave(){
        this.getright_table()
      }
  }

};
</script>

<style scoped >
/deep/ .el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
  /* border-bottom: 1px solid #EBEEF5; */
  border: none;
}

</style>