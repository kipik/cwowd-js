<template>
  <v-layout>
    <v-flex xs8>
      <panel title="Fiche jeu">
        <v-layout>
          <v-flex xs8>
            <div class="headline">{{game.title}}</div>
            <div class="game_designer">Auteur(s): {{game.designer}}</div>
            <div class="game_artist">Illustrateur(s): {{game.artist}}</div>
            <div class="game_editor">Editeur(s): {{game.editor}}</div>
            <div class="game_body">{{game.description}}</div>
          </v-flex>
          <v-flex xs4>
            <v-img class="game_cover" :src="game.imageUrl" height="200px" contain></v-img>
          </v-flex>
        </v-layout>
      </panel>
    </v-flex>
    <v-flex xs4>
      <panel title="Kickstarter">
        <div class="plateforme">Sur {{game.plateforme}}</div>
        <div class="date-ks">Du {{game.dateStartKS}}</div>
        <div class="date-ks">Au {{game.dateEndKS}}</div>
        <div class="game_langue">Jeu en {{game.langue}}</div>
        <v-btn flat :to="game.lienKS">Lien KS</v-btn>
        <!-- A corriger, ne link pas -->
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
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
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
.game_cover {
  margin: 0 auto;
  height: 80%;
}
</style>
