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
  <goods-list :goods="showGoods"/>
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

import HomeSwiper from './childComps/HomeSwiper'     //首页轮播图组件
import RecommendView from './childComps/RecommendView'  //推荐信息组件
import RecommendFashion from './childComps/RecommendFashion'  //推荐大图的组件

import NavBar from 'components/common/navbar/NavBar'  //公共组件导航
import TabControl from 'components/content/tabControl/TabControl' //公共组件
import GoodsList from 'components/content/goods/GoodsList' //商品列表

import {getHomeMultidata,getHomeGoods} from 'network/home'   //导入home页面的网络请求封装



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
      currentIndex: 'pop',
      recommends: [],
      saveY: 0,
      goods:{
        'pop': {page: 0,list:[{src:"https://s5.mogucdn.com/mlcdn/776a41/200917_6k65h0dhh626li13lk2afj7jgh37b_750x1125.jpg_440x587.v1cAC.40.webp",
        title:'休闲宽松显瘦高腰阔腿裤',price:'95.99'},{src:"https://s5.mogucdn.com/mlcdn/776a41/200918_65a5818i3fl76agkc39ikj5jiaahj_750x1125.jpg_440x587.v1cAC.40.webp",
        title:'夏季新款时尚套装小个子减龄显瘦小香风上衣休闲短裤两件套女',price:'87.99'},{src:"https://s5.mogucdn.com/mlcdn/776a41/200918_40echb4jk041301efb3cecli4d3fb_750x1125.jpg_440x587.v1cAC.40.webp",title:'韩版翻领撞色针织短袖T恤',price:'41.40'}]},

        'news': {page: 0,list:[{src:'https://s5.mogucdn.com/mlcdn/776a41/200917_7e93j9dbhhhh2k4g75ikl78jb5l69_750x1125.jpg_440x587.v1cAC.40.webp',title:'网红薄款复古格子七分袖百搭短外套+美背+牛仔裤套装三件套',price:'24.7'},
        {src:'https://s5.mogucdn.com/mlcdn/776a41/200917_8f1jbhf4b8fieh4la8ifl0dlcgbdk_750x1125.jpg_440x587.v1cAC.40.webp',title:'碎花雪纺裙气质连衣裙短款小个子女夏装新款复古牛仔裙子短裤套装',price:'35.91'}]},

        'fashion': {page: 0,list:[{src:'https://s5.mogucdn.com/mlcdn/776a41/200918_51lkkdidlea7jl4fi0dggghj7hk81_750x1125.jpg_440x587.v1cAC.40.webp',title:'牛油果绿针织开衫+抽绳吊带背心+格子短裙半身裙套装两件套女',price:'38.7'},
        {src:'https://s5.mogucdn.com/mlcdn/776a41/200917_35f8e8gc6268kf3bi667fjj2hl24d_750x1125.jpg_440x587.v1cAC.40.webp',title:'小个子两件套夏装白色短袖T恤大码吊带阔腿裤宽松背带裤时尚套装',price:'52.7'}]},
      }
    }
  },
  created(){
    this.getHomeMultidata()    //在组件创建后请求网络数据;

    // this.getHomeGoods("pop")
    // this.getHomeGoods("news")
    // this.getHomeGoods("sell")
  },
  activated(){
    console.log('enter home')
  },
  deactivated(){
    console.log('leave home')
  },
  computed: {
    showGoods(){
    return this.goods[this.currentIndex].list
  }
  },
  methods: {
    tabclick(index){
      switch (index){
        case 0:
        this.currentIndex = 'pop';
        break
        case 1:
        this.currentIndex = 'news';
        break
        case 2:
        this.currentIndex = 'fashion';
        break
      }
    },
    getHomeMultidata(){         //对请求网络的方法进行包装
      getHomeMultidata().then(res=>{    
        this.banners = res.data.banner.list;     //拿到到返回的数据后提取想要的数据；
        this.recommends = res.data.recommend.list;
      })
    },
    // getHomeGoods(type){
    //   const page = this.goods[type].page+1;
    //   getHomeGoods(type,page).then(res => {
    //     this.goods[type].list.push(...res.data.list);
    //     this.goods[type].page+=1
    //   })
    // }
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