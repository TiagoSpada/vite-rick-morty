<script>
import { store } from "../store";
import axios from "axios";
export default {
	name: "CharacterSearch",

	data() {
		return {
			store,
		};
	},
};
</script>
<template>
	<div class="mb-5 text-center">
		<div class="row row-cols-auto justify-content-md-center">
			<div class="col">
				<input
					class="form-control"
					type="text"
					placeholder="Search character"
					aria-label="default input example"
					v-model="store.searchName"
				/>
			</div>
			<div class="col">
				<select class="form-select" v-model="store.searchStatus">
					<option selected value="">Select status</option>
					<option v-for="(status, id) in store.status" :key="id">
						{{ status }}
					</option>
				</select>
			</div>
			<div class="col">
				<button type="button" class="btn btn-primary" @click="$emit('search')">
					Search
				</button>
			</div>
			<div class="col">
				<button type="button" class="btn btn-warning" @click="$emit('reset')">
					Reset
				</button>
			</div>
		</div>
	</div>
</template>
