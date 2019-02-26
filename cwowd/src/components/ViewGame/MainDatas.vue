<template>
  <!-- <panel title="Infos Jeu"> -->
  <v-layout>
    <panel title="Fiche jeu">
      <v-btn
        slot="PanelAction"
        v-show="isUserLoggedIn"
        fab
        small
        color="cyan accent-3"
        error
        dark
        absolute
        right
        :to="{
          name: 'game-edit',
          params() {
            return {
              gameId: game.id
            }
          }
        }"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-layout row class="pa-2">
        <v-flex xs8>
          <div class="headline">{{ game.title }}</div>
          <div class="game_designer">Auteur(s): {{ game.designer }}</div>
          <div class="game_artist">Illustrateur(s): {{ game.artist }}</div>
          <div class="game_editor">Editeur(s): {{ game.editor }}</div>
        </v-flex>
        <v-img
          class="game_cover"
          :src="game.imageUrl"
          height="200px"
          contain
        ></v-img>
      </v-layout>

      <div class="game_body pa-3">{{ game.description }}</div>
      <v-btn
        v-show="isUserLoggedIn && !bookmark"
        small
        color="cyan accent-3"
        error
        @click="bookmarkThis"
      >
        <!-- <v-icon>favorite_border</v-icon> -->
        Ajouter à vos favoris
      </v-btn>
      <v-btn
        v-show="isUserLoggedIn && bookmark"
        small
        color="cyan accent-3"
        error
        @click="unMarkThis"
        >Supprimer de vos favoris</v-btn
      >
    </panel>
  </v-layout>
  <!-- </panel> -->
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: ['game'],

  data() {
    return {
      bookmark: null
    }
  },

  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },

  watch: {
    async game() {
      if (!this.isUserLoggedIn) {
        return
      }

      try {
        const bookmarks = (await BookmarksService.index({
          gameId: this.game.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },

  methods: {
    async bookmarkThis() {
      try {
        this.bookmark = (await BookmarksService.post({
          gameId: this.game.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unMarkThis() {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style></style>
