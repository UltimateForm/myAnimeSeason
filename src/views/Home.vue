<template>
	<div id="home">
		<div id="season-grid">
			<AnimeItem v-for="anime in animes" :key="anime.mal_id" v-bind:anime="anime" />
		</div>
	</div>
</template>

<script>
	import store from "../store";
	import { mapGetters } from "vuex";
	import AnimeItem from "../components/AnimeItem";

	export default {
		name: "Home",
		store,
		computed: {
			...mapGetters(["season", "animes", "seasonYear", "seasonName"])
		},
		components: { AnimeItem },
		created() {
			this.$store.dispatch("fetchSeason");
		}
	};
</script>

<style>
	#home {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #000;
	}
	#season-grid {
		display: flex;
		flex-wrap: wrap;
		place-content: center;
	}
</style>
