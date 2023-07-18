<template>
 <!-- <div>123</div> -->
 <dv-scroll-board :items="carouselData" @change="handleChange">
  <div slot="item" slot-scope="{item}">
    <div :class="['carousel-item', item.customClass]">
      <label>{{ item.id }}</label>
      <label>{{ item.name }}</label>
      <label>{{ item.value }}</label>
    </div>
  </div>
</dv-scroll-board>
  </template>
  
  <script>
    export default {
      data() {
        return {
          selectedRowIndex: -1,
          carouselData: [
            { id: 1, name: 'one', value: 1, customClass: '' },
            { id: 2, name: 'two', value: 2, customClass: '' },
            { id: 3, name: 'three', value: 3, customClass: '' },
            { id: 4, name: 'four', value: 4, customClass: '' },
            { id: 5, name: 'five', value: 5, customClass: '' }
          ]
        };
      },
      computed: {
        selectedRowClass() {
          if (this.selectedRowIndex !== -1) {
            return this.carouselData[this.selectedRowIndex].customClass;
          }
          return '';
        }
      },
      methods: {
        handleChange(index) {
          // 记录当前选中的行索引
          this.selectedRowIndex = index;
        }
      },
      watch: {
        // 监听carouselData数据变化，为变化后的那一行添加自定义class并去掉其他行的class
        'carouselData': {
          handler: function(newValue, oldValue) {
            const index = this.selectedRowIndex;
            if (index !== -1) {
              // 取消上一次选中行的高亮
              this.carouselData.forEach(item => {
                item.customClass = '';
              });
              // 给选中的行添加高亮
              const selectedItem = newValue[index];
              selectedItem.customClass = 'selected-row-item';
            }
          },
          deep: true
        }
      }
    };
  </script>
  
  <style scoped>
  .carousel-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 20px;
  }
  
  .selected-row-item {
    background-color: #c3e6cb;
  }
  </style>
  