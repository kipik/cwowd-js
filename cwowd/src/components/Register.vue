/* eslint-disable */

<template>
  <v-container fluid column>
    <v-flex xs8 offset-xs2>
      <panel title="Inscription">
        <form name="register-form">
          <v-text-field
            label="Email"
            v-model="email"
            autocomplete="username"
          ></v-text-field>
          <br />
          <v-text-field
            label="Mot de passe"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br />
        <div class="danger-alert" v-html="error" />
        <br />
        <v-btn dark class="cyan" @click="register">Je valide</v-btn>
      </panel>
    </v-flex>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  // eslint-disable-next-line
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    // eslint-disable-next-line
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'games'
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
