<template>
  <v-layout justify-center>
    <v-flex>
      <search-panel />
      <v-layout>
        <v-flex
          :class="{
            xs8: isUserLoggedIn,
            xs12: !isUserLoggedIn
          }"
        >
          <games-panel />
        </v-flex>
        <v-flex xs4 v-show="isUserLoggedIn">
          <bookmarks />
          <recent-views />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import GamesPanel from './GamesPanel'
import Bookmarks from './Bookmarks'
import RecentViews from './RecentViews'
import SearchPanel from './SearchPanel'
import GamesService from '@/services/GamesService'
import { mapState } from 'vuex'

export default {
  components: {
    GamesPanel,
    SearchPanel,
    Bookmarks,
    RecentViews
  },
  computed: {
    ...mapState(['isUserLoggedIn'])
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
