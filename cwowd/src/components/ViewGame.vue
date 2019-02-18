<template>
  <v-layout>
    <v-flex xs8>
      <panel title="Fiche jeu">
        <v-btn
          slot="PanelAction"
          fab
          small
          color="cyan accent-3"
          error
          dark
          absolute
          right
          :to="{
            name: 'game-edit',
            params () {
              return {
              gameId: game.id
          }}}"
        >
          <v-icon>edit</v-icon>
        </v-btn>
        <v-layout row class="pa-2">
          <v-flex xs8>
            <div class="headline">{{game.title}}</div>
            <div class="game_designer">Auteur(s): {{game.designer}}</div>
            <div class="game_artist">Illustrateur(s): {{game.artist}}</div>
            <div class="game_editor">Editeur(s): {{game.editor}}</div>
          </v-flex>
          <v-img class="game_cover" :src="game.imageUrl" height="200px" contain></v-img>
        </v-layout>
        <div class="game_body pa-3">{{game.description}}</div>
      </panel>
    </v-flex>
    <v-flex xs4>
      <panel title="Kickstarter">
        <v-layout column class="pa-5">
          <div class="plateforme">Sur {{game.plateforme}}</div>
          <div class="date-ks">Du {{game.dateStartKS}}</div>
          <div class="date-ks">Au {{game.dateEndKS}}</div>
          <div class="game_langue">Jeu en {{game.langue}}</div>
          <v-btn flat :to="game.lienKS">Lien KS</v-btn>
          <!-- A corriger, ne link pas -->
        </v-layout>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import GamesService from "@/services/GamesService";

export default {
  data() {
    return {
      game: {}
    };
  },
  async mounted() {
    const gameId = this.$store.state.route.params.gameId;
    this.game = (await GamesService.show(gameId)).data;
  }
};
</script>

<style scoped>
</style>
