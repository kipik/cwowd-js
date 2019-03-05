<template>
  <div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter vertical-align">
            <h1 class="home-intro">{{ selectedGame.title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GamesService from '@/services/GamesService'

export default {
  data() {
    return {
      selectedGame: games[this.$route.params.id]
    }
  },
  watch: {
    $route() {
      this.selectGame()
      console.log(selectGame)
    }
  },
  methods: {
    selectGame() {
      this.selectedGame = games[this.$route.params.id]
      console.log(selectedGame)
    }
  }
}
</script>

<style></style>
