<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsitem.src">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'GoodsListItem',
  props: {
  	goodsitem: {
  	  type: Object,
  		default(){
  		  return {}
  		}
  	}
  },
  methods: {
    itemClick(){   //进入商品详情
      this.$router.push('/detail')
    }
  }
}
</script>

<style>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  
  .good-item,img {
    width: 100%;
    border-radius: 5px;
    border-color: blue;
  }
  .good-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;

  }
  .goods-info p {
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
    .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
</style> 