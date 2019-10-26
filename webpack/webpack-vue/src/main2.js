import Vue from 'vue'


const App = {
	template:`
	<div>
		{{msg}}
	</div>
	`,
	data: function(){
		return {
			msg : 'hello'
		}
	}
}


// 把模板封装成组件然后调用也是可以的
const vm = new Vue({
	el: "#app",
// 如此可以实现不更改index.htm 产生模板效果
	template:'<App></App>',
	components:{
		App
	}
})