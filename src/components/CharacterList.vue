<script>
import CardCharacter from "./CardCharacter.vue";
import { store } from "../store";
export default {
	name: "CharacterList",
	components: {
		CardCharacter,
	},
	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<div class="container">
		<div class="row">
			<div v-for="character in store.results" class="col">
				<CardCharacter :character="character" />
			</div>
		</div>
		<h2 class="Ncharcter">Found {{ store.results.length }} characters</h2>
	</div>
</template>
<style scoped lang="scss">
.col {
	width: calc(100% / 4 - 40px);
	margin: 20px;
}
.Ncharcter {
	padding: 20px;
	text-align: center;
}
</style>
