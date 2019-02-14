<template>
  <v-container fluid column>
    <v-flex xs12 sm6>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="PanelAction"/>
        </v-toolbar>
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
