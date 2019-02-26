<template>
  <panel title="Chercher un jeu">
    <v-flex class="ml-5 mr-5">
      <v-text-field
        label="Recherche par titre, auteur, artiste ou éditeur"
        v-model="search"
      ></v-text-field>
    </v-flex>
  </panel>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function(value) {
      const route = {
        path: 'games'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      if (this.$route.name === 'games') this.$router.push(route)
    }, 600),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value
      }
    }
  }
}
</script>

<style></style>
