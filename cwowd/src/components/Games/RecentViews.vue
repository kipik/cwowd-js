<template>
  <panel title="Historique">
    <v-data-table
      :headers="headers"
      :pagination.sync="pagination"
      :items="histories"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.title }}</td>
        <td class="text-xs-left">{{ props.item.editor }}</td>
      </template>
    </v-data-table>
  </panel>
</template>

<script>
import { mapState } from 'vuex'
import HistoryService from '@/services/HistoryService'

export default {
  data() {
    return {
      headers: [
        {
          text: 'Jeu',
          value: 'title'
        },
        {
          text: 'Editeur',
          value: 'editor'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: 'true'
      },
      histories: []
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      this.histories = (await HistoryService.index()).data
    }
  }
}
</script>

<style></style>
