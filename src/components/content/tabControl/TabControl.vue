<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" class="tab-control-item" 
    :class="{active: index === currentIndex}":key =index @click="itemclick(index)">
    	<span>{{item}}</span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'TabControl',
  props: {
  	title: {
  	  type: Array,
  	    default(){
  	      return[]	
  	    }
  	}
  },
  data(){
  	return{
  		currentIndex: 0,
  	}
  },
  methods: {
  	itemclick(index){
  		this.currentIndex=index;
      this.$emit('tabclick',index)

  	}
  }
}
</script>

<style scoped>
 .tab-control {
 	display: flex;
	margin-bottom: 2px solid red;
	line-height: 40px;
	height: 40px;
	border-top:2px solid red;
	background-color: #fff;
 }

 .tab-control-item {
 	flex:1;
 }
 .tab-control-item span {

 }
  .active {
  	color: var(--color-high-text);	
  }
  .active span {
  	border-bottom: 2px solid var(--color-tint);
  	padding: 5px;	
  }

</style> 