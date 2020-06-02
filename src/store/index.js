import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

// Load vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
	state: {
		season: []
	},
	getters:{
		season:(state)=>{
			return state.season;
		},
		animes:(state, getters)=>{
			return getters.season.anime;
		},
		seasonName:(state, getters)=>{
			return getters.season.season_name;
		},
		seasonYear:(state, getters)=>{
			return getters.season.season_year;
		}
	},
	actions: {
		async fetchSeason(context) {
			const response = await axios.get("https://api.jikan.moe/v3/season");
			console.log("axios fetch season response", response);
			context.commit("setSeason", response.data);
		}
	},
	mutations: {
		setSeason(state, season) {
			state.season = season;
		}
	}
})