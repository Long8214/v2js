<template>
   <div id="app" class="test" >
    <svg id="svgId" width="720" height="540">
      <image id="imgId" x="0" y="0" width="720" height="540" href="../assets/images/驾驶舱白.png"></image>
      <template v-for="(val, i) in rectArr" >
        <rect  :id="val.id" :x="val.x1" :y="val.y1" :width="val.x2-val.x1" :height="val.y2-val.y1" style="fill:rgba(0,0,0,0);stroke-width:1;stroke:red;fill-opacity:0.1"/>
        <!-- <text :key="i" :x="val.x1+(val.x2-val.x1)/2-5" :y="val.y1+(val.y2-val.y1)/2+5" fill="red">{{val.id+1}}</text> -->
      </template>
    </svg>
    <div>
      <el-input-number v-model="num" :min="1" :max="10" @keydown.native="channelInputLimit"></el-input-number>
      <el-row  v-for="(val, key) in rectArr" :key="key">
        <el-col :span="4">
          <el-button type="primary" @click.stop="rectMouseEvent(key)">点击画图{{key+1}}</el-button>
        </el-col>
        <el-col :span="4">
          <el-select v-model="val.optionValue" placeholder="事件设置">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          坐标轴：起点x:{{val.x1}},y:{{val.y1}}  终点x:{{val.x2}},y:{{val.y2}}
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click.stop="reChange(key)">重选</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  name: "",
  data() {
    return {
      num:1,
        optionValue:null,
        options:[{
          value:0,
          label:'放大图片'
        },{
          value:1,
          label:'播放视频'
        },{
          value:2,
          label:'课堂习题'
        }],
        rectArr:[],
        isComplete:true,
    };
  },

  methods: {
      //禁用输入框手动输入
      channelInputLimit(e) {
        e.returnValue = "";
      },
      //移动事件
      Move(ev,i) {
        let ce = ev;
        if(this.rectArr[i].flag){
          let x2 = ce.offsetX;
          let y2 = ce.offsetY;
          if (!this.isComplete){
            if (((x2 - this.rectArr[i].x1) > 10 || (y2 - this.rectArr[i].y1) > 10) && x2 > 0 && y2 > 0) {
              this.drawRect(this.rectArr[i].x1, this.rectArr[i].y1, x2, y2, i);
            }
          }
        }
      },
      // 按下鼠标
      Down(ev,i) {
        let ce = ev;
        // 获取鼠标点击后的坐标
        if(this.rectArr[i].flag){
          this.isComplete= false;
          if(!this.isComplete){
            this.rectArr[i].x1 = ce.offsetX;
            this.rectArr[i].y1 = ce.offsetY;
          }
        }
      },
      // 抬起鼠标
      Up(ev,i) {
        if(!this.rectArr[i].flag){ return;}
        let ce = ev;
        this.rectArr[i].x2 = ce.offsetX;
        this.rectArr[i].y2 = ce.offsetY;
        this.drawRect(this.rectArr[i].x1, this.rectArr[i].y1, this.rectArr[i].x2, this.rectArr[i].y2, i);
        this.isComplete = true;
        this.rectArr[i].flag = false
      },
      rectMouseEvent(id) {
        for (let i = 0; i < this.rectArr.length; i++) {
          this.rectArr[i].flag = false
        }
        this.rectArr[id].flag = true
        this.rectArr[id].svg = document.querySelector("#svgId")
        this.rectArr[id].svg.addEventListener(
          "mousedown",
          ev=>{ this.Down(ev,id) },
          true
        );
        this.rectArr[id].svg.addEventListener(
          "mousemove",
          ev=>{ this.Move(ev,id) },
          true
        );
        this.rectArr[id].svg.addEventListener(
          "mouseup",
          ev=>{ this.Up(ev,id) },
          true
        );
      },
      drawRect(x1, y1, x2, y2, id){
        if (x2-x1<10 || y2-y1<10) {
          return
        }
        if(x2-x1>=10 && y2-y1>=10){
          this.rectArr[id].x1 = x1
          this.rectArr[id].y1 = y1
          this.rectArr[id].x2 = x2
          this.rectArr[id].y2 = y2
        }
      },
      //重新选择区域
      reChange(id){
        this.rectMouseEvent(id)
      }
    },
    created() {
      for (let index = 0; index < this.num; index++) {
        var a = {
            id: index,
            optionValue: null,
            flag:false,
            x1:'',
            y1:'',
            x2:'',
            y2:'',
        };
        this.rectArr.push(a);
      }
    },
    watch: {

      rectArr: {
        //深度监听，可监听到对象、数组的变化
        handler(currentValue, oldValue) {
          console.log('currentValue: ', currentValue);
          
        },
        deep: true, //true 深度监听
      },
      num: {
        //深度监听，可监听到对象、数组的变化
        handler(currentValue, oldValue) {
          if (currentValue > oldValue) {
            var a = {
              id: currentValue-1,
              optionValue: null,
              flag:false,
              x1:'',
              y1:'',
              x2:'',
              y2:'',
            };
            this.rectArr.push(a);
          } else {
            this.rectArr.pop();
          }
        },
        deep: true, //true 深度监听
      }
    }
  }
</script>

