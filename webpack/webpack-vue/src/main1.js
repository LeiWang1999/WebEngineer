import Vue from 'vue'

const vm = new Vue({
	el: "#app",
// 如此可以实现不更改index.htm 产生模板效果
	template:`
	<div>
		{{msg}}
	</div>
	`,
	data: {
		msg : "hello"
	}
})