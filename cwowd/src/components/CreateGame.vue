<template>
  <v-container>
    <v-layout>
      <v-flex xs7>
        <panel title="Nouveau jeu">
          <v-text-field label="Titre" v-model="game.title" required :rules="[required]"></v-text-field>
          <v-text-field label="Editeur" v-model="game.editor" required :rules="[required]"></v-text-field>
          <v-text-field label="Auteur" v-model="game.designer" required :rules="[required]"></v-text-field>
          <v-text-field label="Artiste" v-model="game.artist"></v-text-field>
          <v-text-field label="Photo du jeu" v-model="game.imageUrl" required :rules="[required]"></v-text-field>
          <v-textarea label="Résumé du jeu" v-model="game.description" required :rules="[required]"></v-textarea>
        </panel>
      </v-flex>
      <v-flex xs5>
        <panel title="Détails du KS">
          <v-text-field label="Plateforme" v-model="game.plateforme" required :rules="[required]"></v-text-field>
          <v-text-field
            label="Début de la campagne"
            v-model="game.dateStartKS"
            required
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Fin de la campagne"
            v-model="game.dateEndKS"
            required
            :rules="[required]"
          ></v-text-field>
          <v-text-field label="Langue" v-model="game.langue" required :rules="[required]"></v-text-field>
          <v-text-field
            label="Lien vers la page KS"
            v-model="game.lienKS"
            required
            :rules="[required]"
          ></v-text-field>
        </panel>
        <v-alert class="ml-4" :value="error" transition="scale-transition" error>{{error}}</v-alert>
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
      this.error = null;
      const allFilled = Object.keys(this.game).every(key => !!this.game[key]);
      if (!allFilled) {
        this.error = "Merci de renseigner tous les champs.";
        return;
      }
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
