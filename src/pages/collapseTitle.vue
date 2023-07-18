<!-- <template>
    <div>
      <div class="title-container">
        <div class="content-container">
          <el-collapse accordion v-model="activeNames" @change="handleChange">
            <el-collapse-item title="标题1" name="1">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </el-collapse-item>
            <el-collapse-item title="标题2" name="2">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </el-collapse-item>
            <el-collapse-item title="标题2" name="3">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </el-collapse-item>
            <el-collapse-item title="标题2" name="4">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </el-collapse-item>
            <el-collapse-item title="标题2" name="5">
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </template>
  <script>
    export default {
        data(){
            return {
                activeNames:'1'
            }
        },
        methods:{
            handleChange(){

            }
        }
    }
</script>
  <style>
  .title-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 1;
  }
  
  .title-wrapper {
    padding: 16px;
  }
  
  .content-container {
    margin-top: 50px; /* 设置内容容器的上边距，避免被标题遮挡 */
    height: 200px;  /* 设置内容容器的高度 */
    overflow-y: auto;  /* 设置内容容器的滚动条样式 */
  }
  </style>
   -->
   <!-- <template>
    <div>
      <div class="sticky-title-wrapper" ref="stickyTitleWrapper">
        <el-collapse accordion>
          <el-collapse-item v-for="item in items" :title="item.title" :name="item.id" :key="item.id">
            <div class="content">
              <ul>
                <li v-for="content in item.contents" :key="content.id">{{ content.text }}</li>
              </ul>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            id: 1,
            title: '标题1',
            contents: [
              { id: 1, text: '内容1-1' },
              { id: 2, text: '内容1-2' },
              { id: 3, text: '内容1-3' },
              // ...
            ],
          },
          {
            id: 2,
            title: '标题2',
            contents: [
              { id: 4, text: '内容2-1' },
              { id: 5, text: '内容2-2' },
              // ...
            ],
          },
          // ...
        ],
        sticky: false,
        stickyTitle: ''
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const stickyTitleWrapper = this.$refs.stickyTitleWrapper;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        const wrapperRect = stickyTitleWrapper.getBoundingClientRect();
        this.sticky = scrollTop >= wrapperRect.top;
  
        const collapseItems = document.querySelectorAll('.el-collapse-item');
        const currentCollapse = Array.from(collapseItems).find(item => item.getBoundingClientRect().top > 0);
        this.stickyTitle = currentCollapse ? currentCollapse.getAttribute('title') : '';
      }
    }
  };
  </script>
  
  <style>
  .sticky-title-wrapper {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #fff; /* 标题的背景色 */
    /* 其他样式设置 */
  }
  
  .content {
    /* 其他样式设置 */
  }
  </style>
  .sticky-title-wrapper {
    position: relative;
    height: 30px; /* 标题的高度 */
  }
  
  .sticky-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff; /* 标题的背景色 */
    /* 其他样式设置 */
  }
  
  .sticky-title.fixed {
    position: fixed;
    /* 设置其他相关样式，如固定在顶部，z-index等 */
  }
  
  .content {
    /* 其他样式设置 */
  }
  </style> -->
  <!-- <template>
    <div style="height:400px">
        <ul></ul>
    </div>

  </template> -->

  <template>
    <div class="container">
      <div class="header">
        <h1 :style="`position:${isSticky ? 'sticky' : 'static'};top:21.44px;z-index:200`">Page Title</h1>
        <el-collapse  ref="collapse">
          <el-collapse-item title="Section A">
            <div>Content A</div>
            <div>Content A</div>
            <div>Content A</div>
            <div>Content A</div>
            <div>Content A</div>
            <div>Content A</div>
            <div>Content A</div>
            <div>Content A</div>
            <div>Content A</div>
          </el-collapse-item>
          <el-collapse-item title="Section B">
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
            <div>Content B</div>
          </el-collapse-item>
          <el-collapse-item title="Section C">
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
            <div>Content C</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="content">
        ...
      </div>
    </div>
  </template>
  <style>
  .container {
    width: 200px;
    height: 300px;
    margin: 200px auto;
    position: relative;
  }
  .header {
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  .el-collapse {
    position: relative;
  }
  .el-collapse.is-sticky {
    position: fixed;
    top: 60px; /* adjust as necessary */
    z-index: 1;
  }
  </style>
  <script>
  export default {
    data() {
      return { isSticky: false };
    },
    mounted() {
      document.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      document.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        console.log(this.$refs.collapse.$el.getBoundingClientRect().top)
        const el = this.$refs.collapse.$el;
        const top = el.getBoundingClientRect().top;
        this.isSticky = (top < 84.875); 
        console.log(top < 50.875)// adjust as necessary
      },
    },
  };
  </script>