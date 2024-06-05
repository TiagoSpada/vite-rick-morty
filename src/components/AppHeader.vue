<script>
export default {
	name: "AppHeader",
};
</script>

<template>
	<header>
		<div class="container">
			<h1>Rick and Morty</h1>
		</div>
	</header>
</template>
<style scoped lang="scss">
header {
	padding: 30px 0;
	.container {
		text-align: center;
		h1 {
			font-size: 40px;
			font-weight: 700;
		}
	}
}
</style>
