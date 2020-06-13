<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
import {obj} from './utils.js'
	
	export default {
	  name: 'App',
	  components:{
	  },
	  mounted:function(){
	  	obj.setRem()
	  }
	}
<style>
</style>
