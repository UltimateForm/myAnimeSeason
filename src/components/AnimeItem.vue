<template>
  <div class="anime-card">
    <expandable-image
      v-bind:src="anime.images.webp.image_url"
      alt="Poster"
      close-on-background-click

    />
    <div class="overlay">
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <div v-on="on" class="anime-title">{{ anime.title }}</div>
        </template>
        <span>{{ anime.title }}</span>
      </v-tooltip>
    </div>

    <img
      class="edge-icon header-icon mal-icon "
      src="@/assets/malIcon.png"
      v-bind:alt="this.anime.score"
      @click="openMALUrl()"
    />
    <img
      class="rating-shiba header-icon"
      :src="this.getShibaRating()"
      v-bind:alt="this.anime.score"
    />
    <div @click="openWatchUrl()" class="edge-icon header-icon watch-icon">
      <i class="fas fa-tv fa-lg" style="color:white"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['anime'],
  name: 'AnimeItem',
  methods: {
    getShibaRating() {
      const score = this.anime.score
      if (score < 5) {
        return require('../assets/jsHsl.png')
      }
      if (score < 6) {
        return require('../assets/ohno.png')
      }
      if (score < 7) {
        return require('../assets/gross.png')
      }
      if (score < 8) {
        return require('../assets/high.png')
      } else return require('../assets/yassqueenn.png')
    },
    openMALUrl() {
      window.open(this.anime.url)
    },
    openWatchUrl() {
      window.open(`https://www.google.com/search?q=watch anime legally ${this.anime.title}`)
    },
  },
}
</script>

<style scoped>
.anime-card {
  margin: 2rem 1rem 1rem 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: fit-content;
  height: fit-content;
  min-width: 220px;
  display: flex;
  justify-content: center;
  position: relative;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.overlay {
  position: absolute;
  background: rgba(250, 223, 178, 1);
  align-self: flex-end;
  width: 220px;
  min-height: 10px;
  display: flex;
  place-items: center;
  place-content: center;
  border-radius: 35% 35% 0 0;
  padding: 10px 5px 5px 5px;
  box-shadow: 0px -8px 8px 0 rgba(0, 0, 0, 0.2);
}
.anime-title {
  text-align: center;
  height: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}
.header-icon {
  height: auto;
  position: absolute;
}
.rating-shiba {
  width: 70px;
  margin-top: -35px;
}
.edge-icon {
  width: 50px;
  border-radius: 50%;
  margin-top: -20px;
  cursor: pointer;
  box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.2);
}
.mal-icon {
  left: 10%;
}
.watch-icon {
  height: 50px;
  background-color: #2e51a2;
  place-content: center;
  place-items: center;
  display: flex;
  right: 10%;
}
</style>
