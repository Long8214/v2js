<template>
  <div class="wrap">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item class="Sinput">
        <el-select v-model="formInline.region" placeholder="岗位">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <span>|</span>
        <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="el-icon-search"></el-button>
      </el-form-item>
    </el-form>
    <!-- <div class="filtrate">
      <h2>工作地点：</h2>

      <ul>
        <li
          v-for="(item,index) in subject"
          :key="index"
          @click="subjectClick(item.tag)"
        >{{item.name}}</li>
      </ul>
      <h2>城 市：</h2>
      <ul>
        <li
          v-for="(item,index) in detail"
          :key="index"
          @click="detailClick(item.tag)"
          v-show="a=='all'||a==item.tag"
        >{{item.name}}1111111111111111111111111111111111111111111</li>
      </ul>
    </div> -->
    <div>
        <div v-for="(i,index) in arr" :key="index" style="position: relative;">
          <span style="position: absolute;top:0;display: inline-block;width:100px;text-align: center;line-height: 40px;" >{{ i.title}} :</span>
            <div style="display: inline-block;margin-left:100px">
              <span style="display: inline-block;padding: 6px 10px;" v-for="(k,index1) in i.rows" :key="index1"> {{ k.name}}</span>
            </div>
        <br/></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhaopin",
  data() {
    return {
      formInline: {
        region: "",
      },
      arr:[
        {
            title:'工作地点',
            rows:[
                {
                name: "全部",
                tag: "all",
                },
                {
                name: "HTML语言",
                tag: "html",
                },
                {
                name: "CSS技术",
                tag: "css",
                },
                {
                name: "Javascript",
                tag: "js",
                },
                {
                name: "前端框架",
                tag: "front",
                },
                {
                name: "后台框架",
                tag: "back",
                },
                {
                name: "数据库",
                tag: "database",
                },
            ],
        },
        {
            title:'城市',
            rows:[
                {
                name: "HTML",
                tag: "html",
                },
                {
                name: "HTML5",
                tag: "html",
                },
                {
                name: "CSS",
                tag: "css",
                },
                {
                name: "HTML",
                tag: "html",
                },
                {
                name: "HTML5",
                tag: "html",
                },
                {
                name: "CSS",
                tag: "css",
                },
                {
                name: "HTML",
                tag: "html",
                },
                {
                name: "HTML5",
                tag: "html",
                },
                {
                name: "CSS",
                tag: "css",
                },
                {
                name: "CSS3",
                tag: "css",
                },
                {
                name: "Js语法基础",
                tag: "js",
                },
                {
                name: "DOM文档对象模型",
                tag: "js",
                },
                {
                name: "面向对象的程序设计",
                tag: "js",
                },
                {
                name: "Vue.js",
                tag: "front",
                },
                {
                name: "Bootstrap",
                tag: "front",
                },
                {
                name: "Node.js",
                tag: "front",
                },
                {
                name: "Express",
                tag: "front",
                },
                {
                name: "PHP",
                tag: "back",
                },
                {
                name: "JSP",
                tag: "back",
                },
                {
                name: "Java",
                tag: "back",
                },
                {
                name: "MySQL",
                tag: "database",
                },
                {
                name: "mongDB",
                tag: "database",
                },
            ]
        },
        {
            title:'城市',
            rows:[
                {
                name: "HTML",
                tag: "html",
                },
                {
                name: "HTML5",
                tag: "html",
                },
                {
                name: "CSS",
                tag: "css",
                },
                {
                name: "HTML",
                tag: "html",
                },
                {
                name: "HTML5",
                tag: "html",
                },
                {
                name: "CSS",
                tag: "css",
                },
                {
                name: "HTML",
                tag: "html",
                },
                {
                name: "HTML5",
                tag: "html",
                },
                {
                name: "CSS",
                tag: "css",
                },
                {
                name: "CSS3",
                tag: "css",
                },
                {
                name: "Js语法基础",
                tag: "js",
                },
                {
                name: "DOM文档对象模型",
                tag: "js",
                },
                {
                name: "面向对象的程序设计",
                tag: "js",
                },
                {
                name: "Vue.js",
                tag: "front",
                },
                {
                name: "Bootstrap",
                tag: "front",
                },
                {
                name: "Node.js",
                tag: "front",
                },
                {
                name: "Express",
                tag: "front",
                },
                {
                name: "PHP",
                tag: "back",
                },
                {
                name: "JSP",
                tag: "back",
                },
                {
                name: "Java",
                tag: "back",
                },
                {
                name: "MySQL",
                tag: "database",
                },
                {
                name: "mongDB",
                tag: "database",
                },
            ]
        }
      ],
      subject: [
        {
          name: "全部",
          tag: "all",
        },
        {
          name: "HTML语言",
          tag: "html",
        },
        {
          name: "CSS技术",
          tag: "css",
        },
        {
          name: "Javascript",
          tag: "js",
        },
        {
          name: "前端框架",
          tag: "front",
        },
        {
          name: "后台框架",
          tag: "back",
        },
        {
          name: "数据库",
          tag: "database",
        },
      ],
      detail: [
        {
          name: "HTML",
          tag: "html",
        },
        {
          name: "HTML5",
          tag: "html",
        },
        {
          name: "CSS",
          tag: "css",
        },
        {
          name: "CSS3",
          tag: "css",
        },
        {
          name: "Js语法基础",
          tag: "js",
        },
        {
          name: "DOM文档对象模型",
          tag: "js",
        },
        {
          name: "面向对象的程序设计",
          tag: "js",
        },
        {
          name: "Vue.js",
          tag: "front",
        },
        {
          name: "Bootstrap",
          tag: "front",
        },
        {
          name: "Node.js",
          tag: "front",
        },
        {
          name: "Express",
          tag: "front",
        },
        {
          name: "PHP",
          tag: "back",
        },
        {
          name: "JSP",
          tag: "back",
        },
        {
          name: "Java",
          tag: "back",
        },
        {
          name: "MySQL",
          tag: "database",
        },
        {
          name: "mongDB",
          tag: "database",
        },
      ],
      a: "all",
      b: "",
    };
  },
  methods: {
    methods: {
      onSubmit() {
        console.log("submit!");
      },
    },
    subjectClick(tag) {
      this.a = tag;
      console.log(tag);
    },
    detailClick(tag) {
      this.b = tag;
      console.log(tag);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 890px;
  margin: 0 auto;

  .filtrate {
    ul {
      width: 70px;
      list-style: none;
      li {
      }
    }
  }

  .subjectItem {
    margin-right: 20px;
  }
  .bold {
    font-weight: bold;
  }
}
.Sinput {
  span {
    border-top: 1px solid #dcdfe6;
    border-bottom: 1px solid #dcdfe6;
    height: 36px;
    color: #dcdfe6;
  }
}
::v-deep .el-form .Sinput {
  width: 710px;
  margin-right: 0;
}
::v-deep .el-form .el-form-item .el-form-item__content .el-select {
  width: 100px;
}
::v-deep
  .el-form
  .el-form-item
  .el-form-item__content
  .el-select
  .el-input__inner {
  border-radius: 5px 0px 0 5px;
  border-right: none;
}
::v-deep .el-form .el-form-item .el-form-item__content .input .el-input__inner {
  border-right: none;
  border-left: none;
  border-radius: 0;
}
::v-deep .el-form .Sinput .el-form-item__content {
  display: flex;
}
::v-deep .el-form .el-form-item .el-form-item__content button {
  width: 120px;
  border-radius: 0 5px 5px 0;
}
</style>