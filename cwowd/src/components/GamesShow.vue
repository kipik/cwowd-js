<template>
  <v-container fluid>
    <game-choice />
    <show-intro />
    <v-layout row class="show-footer">
      <v-layout v-for="game in games" :key="game.id" class="column">
        <v-flex class="footer-column">
          <router-link
            class="game-choice"
            :to="{
              name: 'game-choice',
              params: {
                gameId: game.id
              }
            }"
          >
            <v-img
              class="hidden-sm-and-down"
              :src="game.imageUrl"
              height="125px"
              width="150px"
              contain
            ></v-img>
            <p class="titre-small hidden-md-and-up">{{ game.title }}</p>
          </router-link>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import GamesService from '@/services/GamesService'
import ShowIntro from './ShowIntro'
import GameChoice from './GameChoice'

export default {
  data() {
    return {
      games: null
    }
  },
  props: ['selectedGame'],
  components: {
    ShowIntro,
    GameChoice
  },
  async mounted() {
    this.games = (await GamesService.index()).data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        this.games = (await GamesService.index(value)).data
      }
    }
  },
  methods: {
    selectGame() {
      this.selectedGame = games[this.$route.params.id]
    }
  }
}
</script>

<style scoped>
.show-footer {
  background: linear-gradient(to bottom right, #7d1e24, #bb2d35);
  cursor: pointer;
}
.column {
  padding: 20px;
  text-align: center;
}
.titre-small {
  color: white;
}
</style>
