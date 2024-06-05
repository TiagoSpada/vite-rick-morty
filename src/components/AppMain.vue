<script>
import CharacterList from "./CharacterList.vue";
import CharacterSearch from "./SearchCharacter.vue";
import { store } from "../store";
import axios from "axios";

export default {
	name: "MainContent",
	components: {
		CharacterList,
		CharacterSearch,
	},
	data() {
		return {
			store,
		};
	},
	methods: {
		GetCharacters() {
			const params = {
				name: this.store.searchName,
				status: this.store.searchStatus,
			};
			axios
				.get(this.store.apiUrl, {
					params,
				})
				.then((response) => {
					this.store.results = response.data.results;
					this.store.info = response.data.info;
				});
		},
		resetFilter() {
			this.store.searchName = "";
			this.store.searchStatus = "";
			this.GetCharacters();
		},
	},
	created() {
		this.GetCharacters();
	},
};
</script>

<template>
	<main>
		<div class="container">
			<CharacterSearch @search="GetCharacters" @reset="resetFilter" />
			<CharacterList />
		</div>
	</main>
</template>
