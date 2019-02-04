<template>
  <v-container fluid column>
    <v-flex xs8 offset-xs2>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Connexion</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email">
          </v-text-field>
          <br>
          <v-text-field
            label="Mot de passe"
            v-model="password">
          </v-text-field>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn dark class="cyan"
            @click="login">
            Je me connecte
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  // eslint-disable-next-line
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    // eslint-disable-next-line
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: white;
}
</style>
