<template>
  <v-container>
    <v-layout>
      <v-flex xs7>
        <panel title="Modifier une fiche jeu">
          <v-flex pa-3>
            <v-text-field
              label="Titre"
              v-model="game.title"
              required
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              label="Editeur"
              v-model="game.editor"
              required
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              label="Auteur"
              v-model="game.designer"
              required
              :rules="[required]"
            ></v-text-field>
            <v-text-field label="Artiste" v-model="game.artist"></v-text-field>
            <v-text-field
              label="Photo du jeu"
              v-model="game.imageUrl"
              required
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              label="Photo illustrative pour la fiche du jeu"
              v-model="game.imageBackgroundUrl"
              required
              :rules="[required]"
            ></v-text-field>
            <v-textarea
              label="Résumé du jeu"
              v-model="game.description"
              required
              :rules="[required]"
            ></v-textarea>
          </v-flex>
        </panel>
      </v-flex>
      <v-flex xs5>
        <panel title="Détails du KS">
          <v-flex pa-3>
            <v-text-field
              label="Plateforme"
              v-model="game.plateforme"
              required
              :rules="[required]"
            ></v-text-field>
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
            <v-text-field
              label="Langue"
              v-model="game.langue"
              required
              :rules="[required]"
            ></v-text-field>
            <v-text-field
              label="Lien vers la page KS"
              v-model="game.lienKS"
              required
              :rules="[required]"
            ></v-text-field>
          </v-flex>
        </panel>
        <v-alert
          class="ml-4"
          :value="error"
          transition="scale-transition"
          error
          >{{ error }}</v-alert
        >
        <v-btn dark class="cyan" @click="save">Enregistrer</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import GamesService from '@/services/GamesService'

export default {
  data() {
    return {
      game: {
        title: null,
        designer: null,
        artist: null,
        editor: null,
        imageUrl: null,
        imageBackgroundUrl: null,
        description: null,
        plateforme: null,
        dateStartKS: null,
        dateEndKS: null,
        langue: null,
        lienKS: null
      },
      error: null,
      required: value => !!value || 'Obligatoire.'
    }
  },
  methods: {
    async save() {
      this.error = null
      const allFilled = Object.keys(this.game).every(key => !!this.game[key])
      if (!allFilled) {
        this.error = 'Merci de renseigner tous les champs.'
        return
      }
      const gameId = this.$store.state.route.params.gameId

      try {
        await GamesService.put(this.game)
        this.$router.go(-1)
        /* this.$router.push({
          name: "game",
          params: {
            gameId: gameId
          } 
        });*/
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted() {
    try {
      const gameId = this.$store.state.route.params.gameId
      this.game = (await GamesService.show(gameId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped></style>
