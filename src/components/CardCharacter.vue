<script>
import { store } from "../store";
export default {
	name: "CardCharacter",
	props: ["image", "name", "status", "species"],
	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<div class="image-character">
		<img :src="image" :alt="name" />
	</div>
	<div class="info-character">
		<div class="name-charcater">{{ name }}</div>
		<div class="state-charcater">{{ status }}</div>
		<div class="species-character">{{ species }}</div>
	</div>
</template>
<style scoped lang="scss">
.image-character {
	img {
		width: 100%;
		border-radius: 50%;
		box-shadow: 5px 5px 5px #d9d9d9;
		margin-bottom: 15px;
	}
}
.info-character {
	text-align: center;
	.name-charcater {
		font-size: 22px;
		margin-bottom: 30px;
	}
	.state-charcater {
		font-size: 14px;
		margin-bottom: 5px;
	}
	.species-character {
		font-size: 16px;
	}
}
</style>
