<template>
  <panel title="Projets suivis">
    <v-data-table :headers="headers" :pagination.sync="pagination" :items="bookmarks">
      <template slot="items" scope="props">
        <td class="text-xs-left">{{props.item.title}}</td>
        <td class="text-xs-left">{{props.item.editor}}</td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  data() {
    return {
      headers: [
        {
          text: "Jeu",
          value: "title"
        },
        {
          text: "Editeur",
          value: "editor"
        }
      ],
      pagination: {
        sortBy: "createdAt",
        descending: true
      },
      bookmarks: []
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data;
    }
  }
};
</script>

<style></style>
