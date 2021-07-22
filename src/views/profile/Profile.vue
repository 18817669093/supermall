<template>
  <div>
    <input type="submit" @click="back()" value="<" />
    <span>第{{ page }}页</span>
    <input type="submit" @click="next()" value=">" />
    <select name="" @change="lick(pagenumber)" v-model="pagenumber">
      <option :value="5">5</option>
      <option :value="10">10</option>
      <option :value="15">15</option>
    </select>
    <span>条/页</span>
    <span class="p">共{{allgoods}}条数据</span>
    <table class="table-striped">
      <thead>
        <tr>
          <th>编号</th>
          <th>上架时间</th>
          <th>价格</th>
          <th>分类</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in allgoods" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.archived }}</td>
          <td>{{ item.decription }}</td>
          <td><button @click="add(item.id)">添加</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { find, add, remove, replace, findall } from "network/curd"; //获取数据组件

export default {
  name: "Profile",
  data() {
    return {
      allgoods: "5",
      pagenumber: 5,
      page: 1,
    };
  },
  created() {
    this.findall(this.page, this.pagenumber);
  },
  methods: {
    findall(page, pagenumber) {
      findall(page, pagenumber).then((res) => {
        this.allgoods = res;
      });
    },
    add(id) {
      add(id).then((res) => alert(res));
    },
    next() {
      if (this.page < 5) {
        this.page += 1;
        this.findall(this.page, this.pagenumber);
      }
    },
    back() {
      if (this.page > 1) {
        this.page -= 1;
        this.findall(this.page, this.pagenumber);
      }
    },
    lick(x) {
      this.pagenumber = x;
      this.findall(this.page, this.pagenumber);
    }
  }
};
</script>

<style scoped>
tr {
  border-bottom: 1px solid res;
  line-height: 50px;
}
table{
  border-collapse: collapse;
}
table-striped{
  font-size: 16px;
  font-family: 'Times New Roman',Times,serif;
  width: 100%;
  text-align: center;
}
</style> 