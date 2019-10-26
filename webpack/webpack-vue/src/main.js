import Vue from 'vue'
import App from './App.vue' 
import Cpn1 from './Cpn.vue'
// 把模板封装成组件然后调用也是可以的
const vm = new Vue({
	el: "#app",
// 如此可以实现不更改index.htm 产生模板效果
	template:'<div><App></App><Cpn1></Cpn1></div>',
	components:{
		App,
		Cpn1
	}
})