<template>
  <panel title="Chercher un jeu">
    <v-flex class="ml-5 mr-5">
      <v-text-field label="Reherche par jeu, auteur, artiste ou éditeur" v-model="search"></v-text-field>
    </v-flex>
  </panel>
</template>

<script>
export default {
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search(value) {
      const route = {
        path: "games"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      if (this.$route.name === "games") this.$router.push(route);
    },
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>

<style></style>