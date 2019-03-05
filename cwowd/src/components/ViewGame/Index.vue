<template>
  <v-layout>
    <v-flex xs8>
      <main-datas :game="game" />
    </v-flex>
    <v-flex xs4>
      <panel title="Kickstarter">
        <v-layout column class="pa-5">
          <v-flex>
            <div class="plateforme">Sur {{ game.plateforme }}</div>
            <div class="date-ks">Du {{ game.dateStartKS }}</div>
            <div class="date-ks">Au {{ game.dateEndKS }}</div>
            <div class="game_langue">Jeu en {{ game.langue }}</div>
            <v-btn flat v-bind:href="game.lienKS">Lien KS</v-btn>
          </v-flex>
        </v-layout>
      </panel>
      <v-flex v-show="isUserLoggedIn">
        <bookmarks />
        <recent-views />
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import MainDatas from './MainDatas'
import GamesService from '@/services/GamesService'
import HistoryService from '@/services/HistoryService'
import Bookmarks from '../Games/Bookmarks'
import RecentViews from '../Games/RecentViews'

export default {
  data() {
    return {
      game: {}
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user', 'route'])
  },
  async mounted() {
    const gameId = this.route.params.gameId
    this.game = (await GamesService.show(gameId)).data

    if (this.isUserLoggedIn) {
      HistoryService.post({
        gameId: gameId
      })
    }
  },
  components: {
    MainDatas,
    Bookmarks,
    RecentViews
  } //,
  /* watch: {
    async game() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        const bookmarks = (await BookmarksService.index({
          gameId: this.game.id
        })).data;
        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
        }
      } catch (err) {
        console.log("err");
      }
    }
  },
  methods: {
    async bookmarkThis() {
      try {
        this.bookmark = (await BookmarksService.post({
          gameId: this.game.id
        })).data;
      } catch (err) {
        console.log("err");
      }
    },
    async unMarkThis() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.log("err");
      }
    }
  } */
}
</script>

<style scoped></style>
