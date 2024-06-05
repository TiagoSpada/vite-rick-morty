<script>
import CharacterList from "./CharacterList.vue";
import { store } from "../store";
import axios from "axios";

export default {
	name: "MainContent",
	components: {
		CharacterList,
	},
	data() {
		return {
			store,
		};
	},
	created() {
		axios.get(this.store.apiUrl).then((response) => {
			this.store.results = response.data.results;
			this.store.info = response.data.info;
		});
	},
};
</script>

<template>
	<main>
		<div class="container">
			<CharacterList />
		</div>
	</main>
</template>
