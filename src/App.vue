<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";
import axios from "axios";
export default {
	name: "AppRickMorty",
	components: {
		AppHeader,
		AppMain,
	},
	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<AppHeader />
	<AppMain />
</template>

<style></style>
