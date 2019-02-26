/* eslint-disable */
<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <v-btn flat dark :to="{ name: 'games' }">cwowd</v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark :to="{ name: 'games' }">Base Jeux</v-btn>
      <v-btn flat dark :to="{ name: 'games-add' }">Ajouter un Jeu</v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{ name: 'register' }"
        >Inscription</v-btn
      >
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{ name: 'login' }"
        >Connexion</v-btn
      >
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout"
        >Déconnexion</v-btn
      >
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'games'
      })
    }
  }
}
</script>

<style scoped></style>
