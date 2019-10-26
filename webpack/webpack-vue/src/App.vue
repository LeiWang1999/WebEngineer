<template>
	<div>
		<h1 class="title">a App template</h1>
		{{msg}}
	</div>
</template>

<script>
	export default {
		name: "App",
		data: function(){
			return {
				msg : 'hello',
				name : 'wanglei'
			}
		}
	}
</script>

<style>
	.title {
		background-color: #777777;
	}
</style>
