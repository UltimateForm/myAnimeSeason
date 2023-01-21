import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

// Load vuex
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
	state: {
		animes: []
	},
	getters: {
		animes: (state) => {
			return state.animes;
		},
	},
	actions: {
		async fetchSeason(context) {
			let seasonAnimes = [];
			let nextPage = 1
			while (nextPage) {
				const response = await axios.get(`https://api.jikan.moe/v4/seasons/now?page=${nextPage}`);
				seasonAnimes.push(...response.data.data);
				const has_next_page = response.data.pagination.has_next_page;
				if (has_next_page) {
					nextPage += 1;
				}
				else nextPage = 0;
			}
			context.commit("setAnimes", seasonAnimes);
		}
	},
	mutations: {
		setAnimes(state, animes) {
			state.animes = animes;
		}
	}
})