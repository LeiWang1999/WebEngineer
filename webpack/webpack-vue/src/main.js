import Vue from 'vue'

const vm = new Vue({
	el: "#app",
	template:`
	<div>
		{{msg}}
	</div>
	`,
	data: {
		msg : "hello"
	}
})