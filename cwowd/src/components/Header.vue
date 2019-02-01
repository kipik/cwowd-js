<template>
    <v-toolbar fixed class="cyan" dark>
        <v-toolbar-title class="mr-4">
            <v-btn flat dark router-link to="root">
                cwowd
            </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat dark to="register">
                Inscription
            </v-btn>
            <v-btn flat dark to="login">
                Connexion
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
