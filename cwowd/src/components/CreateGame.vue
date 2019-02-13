<template>
  <v-container>
    <v-layout>
      <v-flex xs7>
        <panel title="Nouveau jeu">
          <v-text-field label="Titre *" required :rules="[required]" v-model="game.title"></v-text-field>
          <v-text-field label="Editeur" v-model="game.editor"></v-text-field>
          <v-text-field label="Auteur" v-model="game.designer"></v-text-field>
          <v-text-field label="Artiste" v-model="game.artist"></v-text-field>
          <v-text-field label="Photo du jeu" v-model="game.imageUrl"></v-text-field>
          <v-textarea label="Résumé du jeu" v-model="game.description"></v-textarea>
        </panel>
      </v-flex>
      <v-flex xs5>
        <panel title="Détails du KS">
          <v-text-field label="Plateforme" v-model="game.plateforme"></v-text-field>
          <v-text-field label="Début de la campagne" v-model="game.dateStartKS"></v-text-field>
          <v-text-field label="Fin de la campagne" v-model="game.dateEndKS"></v-text-field>
          <v-text-field label="Langue" v-model="game.langue"></v-text-field>
          <v-text-field label="Lien vers la page KS" v-model="game.lienKS"></v-text-field>
        </panel>
        <v-btn dark class="cyan" @click="create">Ajouter</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from "@/components/Panel";
import GamesService from "@/services/GamesService";

export default {
  data() {
    return {
      game: {
        title: null,
        designer: null,
        artist: null,
        editor: null,
        imageUrl: null,
        description: null,
        plateforme: null,
        dateStartKS: null,
        dateEndKS: null,
        langue: null,
        lienKS: null
      },
      error: null,
      required: value => !!value || "Obligatoire."
    };
  },
  methods: {
    async create() {
      try {
        await GamesService.post(this.game);
        this.$router.push({
          name: "games"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  components: {
    Panel
  }
};
</script>

<style scoped>
</style>
