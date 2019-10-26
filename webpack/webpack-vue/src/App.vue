<template>
	<div>
		<h1 class="title">a App template</h1>
		{{msg}}
		<Cpn></Cpn>
	</div>
</template>

<script>
	import Cpn from './Cpn.vue'
	export default {
		name: "App",
		data: function(){
			return {
				msg : 'hello',
				name : 'wanglei'
			}
		},
		components:{
			Cpn
		}
	}
</script>

<style>
	.title {
		background-color: #777777;
	}
</style>
