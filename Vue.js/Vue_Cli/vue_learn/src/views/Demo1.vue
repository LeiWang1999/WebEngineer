<template>
	<div>
		<h1>This is a test page</h1>
		<p>{{msg}}</p>
		<div>{{msg + ':' +atitle}}</div>
		<div v-bind:title="atitle">This is a new Div</div>
	</div>
</template>

<script>
	export default {
		name: 'demo1',
		data() {
			return {
				msg: "demo1",
				atitle: "这是一个div"
			}
		},
		mounted() {
		}
	}
</script>

<style>
</style>
