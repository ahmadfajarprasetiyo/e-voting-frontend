<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2 class="pt-5">
        <v-card dark color="primary" class="mt-5">
          <v-card-title primary-title>
            <v-flex xs12>
              <div class="headline">
                Hasil Pemilihan
              </div>
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items="datas"
                item-key="name"
                select-all
                class="elevation-1 mt-5"
              >
                <template v-slot:items="props">
                  <td class="text-xs-right">{{ props.item.result1 }}</td>
                  <td class="text-xs-right">{{ props.item.result2 }}</td>
                </template>
              </v-data-table>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn depressed color="orange" class="mr-5">Home</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      dialog: false,
      headers: [
          {
            text: 'Blockchain/Pilihan',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Pilihan 1', sortable: false, value: 'result1' },
          { text: 'Pilihan 2', sortable: false, value: 'result2' },
        ],
        datas: [
          {
            name: 'Blockchain 1',
            result1: 159,
            result2: 6.0,
          },
          {
            name: 'Blockchain 2',
            result1: 518,
            result2: 26.0,
          }
        ]
    }
  }
};
</script>
