<template>
  <div id="detail">
  <detail-nav-bar />
  <detail-params-info />
</div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailParamsInfo from './childComps/DetailParamsInfo' //商品参数信息

//http://123.207.32.32:8000/detail?iid=1jw0sr6 //详情页请求

import {getDetaill,Goods,Shop} from 'network/detail'; //获取详情页数据



export default {
  name: 'Detail',
  components: {
  	DetailNavBar ,
  	DetailParamsInfo

  },
  created(){

  }

}
</script>

<style scoped>
 #detail {
 	position: relative;
 	z-index: 9;
 	background-color: #fff;
 }
</style> 