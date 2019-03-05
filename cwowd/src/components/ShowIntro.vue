<template>
  <v-container fluid>
    <v-layout class="hero-body">
      <v-flex class="columns">
        <h1 class="home-intro">La sélection de CWOWD</h1>
        <p class="home-subintro">
          Choisissez un projet parmi la sélection ci-dessous.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      games: null
    }
  }
}
</script>

<style>
.hero-body {
  background: #1e1d1d;
}
.home-intro,
.home-subintro {
  color: white;
}
</style>
