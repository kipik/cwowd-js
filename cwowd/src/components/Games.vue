<template>
  <v-layout justify-center>
    <panel title="Jeux">
      <v-btn
        slot="PanelAction"
        class="cyan accent-3"
        fab
        small
        dark
        absolute
        right
        :to="{name:'game-create'}"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <v-flex v-for="game in games" :key="game.id">
              <v-card>
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
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import GamesService from "@/services/GamesService";

export default {
  components: {
    Panel
  },
  data() {
    return {
      games: null
    };
  },
  async mounted() {
    this.games = (await GamesService.index()).data;
  }
};
</script>

<style scoped>
.ks_resume {
  font-size: 12px;
}
</style>
