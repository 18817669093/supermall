<template>
  <el-container style="height：100%">
    <el-header class="header">
      IM后管系统
      <div class="user-info">
        <!-- <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <img class="user-logo" src="" alt="" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="loginout">退出 </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(31, 45, 61)">
        <el-menu
          :default-openeds="['1']"
          background-color="#1f2d3d"
          text-color="#fff"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>基础设置
            </template>
            <el-menu-item v-for="(item, index) in a" :key="index">{{
              item
            }}</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-collecting-tag"></i>标注平台
            </template>
            <el-menu-item v-for="(item, index) in b" :key="index">{{
              item
            }}</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-copy-document"></i>模板平台
            </template>
            <el-menu-item v-for="(item, index) in c" :key="index">{{
              item
            }}</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <div>模板管理</div>
        <el-form ref="form" label-position="left" value="3">
          <el-row>
            <el-col :span="20">
              <el-form-item
                class="filter-item"
                label-width="100px"
                label="模板名称"
              >
                <el-input></el-input>
              </el-form-item>
              <el-form-item
                class="filter-item"
                label-width="100px"
                label="归属机器人"
              >
                <el-select placeholder="请选择">
                  <el-option :value="0">小安机器人</el-option>
                  <el-option :value="1">资产机器人</el-option>
                  <el-option :value="2">同花顺机器人</el-option>
                  <el-option :value="3">指令机器人</el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                class="filter-item"
                label-width="100px"
                label="模板名称id"
              >
                <el-input placeholder="请输入id"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-button type="primary">新增</el-button>
              <el-button type="primary">查询</el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-table :data="tableData">
          <el-table-column
            :resizable="false"
            align="center"
            prop="name"
            label="名称"
          ></el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="version"
            label="版本"
          ></el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="picture"
            label="图片"
          ></el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="creater"
            label="创建人"
          ></el-table-column>
          <el-table-column :resizable="false" align="center" label="操作">
            <template>
              <el-link class="span-btn color-font">编辑 </el-link>
              <span>&nbsp;|&nbsp;</span>
              <el-link class="span-btn color-font">上线 </el-link>
              <span>&nbsp;|&nbsp;</span>
              <el-link class="span-btn color-font">删除 </el-link>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      a: ["入口管理", "欢迎语", "运行", "机制", "完美"],
      b: ["入口管理1", "欢迎语1", "运行1", "机制1", "完美1"],
      c: ["入口管理2", "欢迎语2", "运行2", "机制2", "完美2"],
      tableData: [
        {
          name: "小智机器人",
          version: "1.1",
          picture: "无",
          creater: "贺盼盼",
        },
        {
          name: "小安机器人",
          version: "1.2",
          picture: "无",
          creater: "贺盼盼",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 22px;
  line-height: 50px;
  color: #fff;
  overflow: hidden;
  background: linear-gradient(#242f42, #191970);
}
.filter-item {
  float: left;
  width: 33%;
}
.el-select {
  width: 100%;
}
.el-form {
  text-align: left;
}
.header .logo{
  float: left;
  width: 250px;
  text-align: center;
}
</style> 
