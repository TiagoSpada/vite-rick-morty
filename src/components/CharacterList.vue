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
	<div class="container-lg">
		<div class="row">
			<div
				v-for="character in store.results"
				class="col-6 col-md-4 col-lg-3 mb-5"
			>
				<CardCharacter
					:image="character.image"
					:name="character.name"
					:status="character.status"
					:species="character.species"
				/>
			</div>
		</div>
		<h2 class="Ncharcter">Found {{ store.results.length }} characters</h2>
	</div>
</template>
<style scoped lang="scss">
.Ncharcter {
	padding: 20px;
	text-align: center;
}
</style>
