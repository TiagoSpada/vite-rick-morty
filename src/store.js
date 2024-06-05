import { reactive } from "vue";

export const store = reactive({
	results: [],
	info: {},
	apiUrl: "https://rickandmortyapi.com/api/character",
	status: ["alive", "dead", "unknown"],
	searchStatus: "",
	searchName: "",
});
