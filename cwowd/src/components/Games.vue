<template>
  <v-layout column>
    <v-flex xs8 offset-xs2>
      <panel title="Jeux">
        <v-btn
          slot="addGame"
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
        <div v-for="game in games" :key="game.id">
          {{game.title}} -
          {{game.designer}} -
          {{game.editor}}
        </div>
      </panel>
    </v-flex>
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
</style>
