<template>
  <v-layout justify-center>
    <v-flex>
      <search-panel />
      <games-panel />
    </v-flex>
  </v-layout>
</template>

<script>
import GamesPanel from './GamesPanel'
import SearchPanel from './SearchPanel'
import GamesService from '@/services/GamesService'

export default {
  components: {
    GamesPanel,
    SearchPanel
  },
  data() {
    return {
      games: null
    }
  },
  async mounted() {
    this.games = (await GamesService.index()).data
  }
}
</script>

<style scoped>
.ks_resume {
  font-size: 12px;
}
</style>
