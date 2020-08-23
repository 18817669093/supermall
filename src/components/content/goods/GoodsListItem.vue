<template>
  <div>
    <img :src="goodsitem.show.img">
    <div>
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
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
  }
}
</script>

<style>

</style> 