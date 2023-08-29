<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-table :data="leftData" style="width: 100%" stripe :row-class-name="rowClassName" @row-click="handleRowClick">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-table :data="rightData" style="width: 100%" stripe @row-dblclick="handleDbClick">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftData: [
        { name: '张三', age: 20 },
        { name: '李四', age: 30 },
        { name: '王五', age: 40 }
      ],
      rightData: [
        { name: '小明', age: 18 },
        { name: '小红', age: 19 },
        { name: '小刚', age: 20 }
      ],
      currentIdx: -1,   // 用于记录当前选中行的索引
      selRow: null      // 用于记录当前选中行的数据
    }
  },
  methods: {
    handleRowClick(row, column, event) {
      console.log('handleRowClick--event: ', event);
      console.log('handleRowClick--column: ', column);
      console.log('handleRowClick--row: ', row);
      if (this.selRow) {
        // 取消上一次选中行的样式
        const lastIdx = this.leftData.indexOf(this.selRow);
        if (lastIdx !== -1) {
          const lastEl = this.$refs[`row-${lastIdx}`][0];
          // console.log('this.$refs[`row-${lastIdx}`]: ', this.$refs[`row-${lastIdx}`]);

          // lastEl.style.backgroundColor = '';
        }
      }
      // 设定该行为当前选中行
      this.selRow = row;
      this.currentIdx = this.leftData.indexOf(row);
      // 设定当前选中行的样式
      const el = event.currentTarget;
      el.style.backgroundColor = 'red';
    },
    handleDbClick(row) {
      console.log('handleDbClick--row: ', row);

      // 在当前选中行下方插入选中的数据
      if (this.currentIdx !== -1) {
        const insertIdx = this.currentIdx + 1;
        this.leftData.splice(insertIdx, 0, row);
        // 更新选中行
        this.selRow = row;
        this.currentIdx = insertIdx;
        // 将左侧表格中的所有行背景色清空
        this.$nextTick(() => {
          this.leftData.forEach((row, index) => {
            const el = this.$refs[`row-${index}`][0];
            el.style.backgroundColor = '';
          });
        });
        // 设定新选中行的样式
        const el = this.$refs[`row-${this.currentIdx}`][0];
        el.style.backgroundColor = 'red';
      }
    },
    rowClassName(row, index) {
      // 检查当前行是否为选中行
      if (index === this.currentIdx) {
        console.log('index === this.currentIdx: ', index === this.currentIdx);

        // 返回样式类名
        return 'red-row';
      } else {
        return '';
      }
    }
  }
}
</script>

<style scoped>
.red-row {
  background-color: red;
}
</style>
