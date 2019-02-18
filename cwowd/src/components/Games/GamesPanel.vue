<template>
  <panel title="Jeux">
    <v-card class="pt-2">
      <v-container fluid grid-list-xl>
        <v-btn
          slot="PanelAction"
          color="cyan accent-3"
          fab
          small
          dark
          absolute
          right
          top
          :to="{name:'game-create'}"
        >
          <v-icon>add</v-icon>
        </v-btn>
        <v-layout row wrap>
          <v-flex v-for="game in games" :key="game.id">
            <v-card xs12>
              <v-layout row>
                <v-flex xs7>
                  <v-card-title>
                    <div>
                      <div class="headline">{{game.title}}</div>
                      <div class="game_designer">de {{game.designer}}</div>
                      <div class="game_editor">par {{game.editor}}</div>
                      <div class="ks_resume">sur {{game.plateforme}} jusqu'au {{game.dateEndKS}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img class="game_cover" :src="game.imageUrl" height="125px" contain></v-img>
                </v-flex>
              </v-layout>
              <v-card-actions class="primary white--text">
                <v-btn
                  small
                  flat
                  dark
                  :to="({
                      name: 'game-view', 
                      params: {
                        gameId: game.id
                      }
                    })"
                >En savoir plus</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon flat dark>
                  <v-icon small>favorite</v-icon>
                </v-btn>
                <v-btn icon flat dark>
                  <v-icon small>bookmark</v-icon>
                </v-btn>
                <v-btn icon flat dark>
                  <v-icon small>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </panel>
</template>

<script>
import GamesService from "@/services/GamesService";

export default {
  data() {
    return {
      games: null
    };
  },
  async mounted() {
    this.games = (await GamesService.index()).data;
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.games = (await GamesService.index(value)).data;
      }
    }
  }
};
</script>

<style scoped>
.ks_resume {
  font-size: 12px;
}
</style>
