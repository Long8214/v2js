<template>
  <div>
    <el-tag
    v-for="(item, index) in items"
    :key="index"
    :type="item.type"
    effect="dark"
    @click.native="handleClick(item.page)">
    {{ item.data }}
  </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { type: 'success', data: '标题1', page: '/page1' },
        { type: 'info', data: '标题2', page: '/page2' },
        { type: 'warning', data: '标题3', page: '/page3' }
      ]
    }
  },
  methods: {
    handleClick(page) {
      // 进行页面跳转
      this.$router.push(page);
    }
  }
};
</script>

<style scoped lang="less">
  /* h1 { font-size: 24px; }
  h2 { font-size: 20px; }
  h3 { font-size: 16px; } */
  /deep/ .el-tag {
    margin: 4px;
  }
</style>

<!-- 下拉框多选 -->
<!-- <template>
  <a-select
    mode="multiple"
    placeholder="Inserted are removed"
    v-model="selectedItems"
    style="width: 100%"
  >
    <a-select-option
      v-for="option in filteredOptions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </a-select-option>
  </a-select>
</template> -->

<!-- <script>
export default {
  data() {
    return {
      selectedItems: [],
      options: [
        { label: 'Apples', value: 1 },
        { label: 'Nails', value: 2 },
        { label: 'Bananas', value: 3 },
        { label: 'Helicopters', value: 4 }
      ]
    }
  },
  computed: {
    filteredOptions() {
      const selectedValues = this.selectedItems.map(item => {
        const found = this.options.find(option => option.label === item)
        return found ? found.value : null
      })
      const availableOptions = this.options.filter(option => !selectedValues.includes(option.value))
      return availableOptions
    }
  }
}
</script> -->
