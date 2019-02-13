<template>
  <v-container fluid column>
    <v-flex xs8 offset-xs2>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="PanelAction"/>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot></slot>
        </div>
      </div>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
</style>
