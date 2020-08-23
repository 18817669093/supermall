<template>
	<div id="home">
  <nav-bar class="home-nav">
   <div slot="center">蘑菇街</div>
  </nav-bar>
  <home-swiper :banners="banners" />
  <recommend-view :recommends="recommends"/>
  <recommend-fashion />
  <tab-control :title="['流行','精品','优惠']" class="main-tab-control"
  @tabclick="tabclick"> </tab-control>
  <goods-list :goods="goods['pop'].list"/>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import RecommendFashion from './childComps/RecommendFashion'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeMultidata,getHomeGoods} from 'network/home'



export default {
  name: 'Home',
  components: {
	  NavBar,
    HomeSwiper,
    RecommendView,
    RecommendFashion,
    TabControl,
    GoodsList
  },
  data(){
    return{
      banners: [],
      recommends: [],
      goods:{
        'pop': {page: 0,list:[]},
        'news': {page: 0,list:[]},
        'sell': {page: 0,list:[]},
      }
    }
  },
  created(){
    this.getHomeMultidata()

    this.getHomeGoods("pop")
    this.getHomeGoods("news")
    this.getHomeGoods("sell")
    
  },
  methods: {
    tabclick(index){
      console.log(index);
    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1
      })
    }
  }
}
</script>

<style scoped>
 .home-nav {
 background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2
}
.main-tab-control {
  position: sticky;
  top: 44px;
}
</style>