<template>
    <div>
        <h1>Inscription</h1>
        <input
            type="email"
            name="Email"
            v-model="email"
            placeholder="email" />
        <br>
        <input
            type="password"
            name="Password"
            v-model="password"
            placeholder="mot de passe" />
        <br>
        <button
          @click="register">
          Je valide
          </button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
