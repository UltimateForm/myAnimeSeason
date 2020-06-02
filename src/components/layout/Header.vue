<template>
	<header class="header">
		<div>
			<router-link to="/">Home</router-link>|
			<router-link to="/about">About</router-link>
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header"
	};
</script>

<style scoped>
	.header {
		background: transparent;
		color: rgb(241, 173, 55);
		text-align: center;
		padding: 10px;
	}
	.header a {
		color: black;
		padding-right: 5px;
		text-decoration: none;
	}
</style>