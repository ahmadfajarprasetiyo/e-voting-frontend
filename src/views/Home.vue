<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2 class="pt-5">
        <v-card dark color="primary" class="mt-5">
          <v-card-title primary-title>
            <v-flex xs12>
              <div class="headline">
                Kunci Private Pemilih
              </div>
              <v-flex xs12>
                <v-text-field
                  label="Nilai n"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Nilai e"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Nilai c"
                ></v-text-field>
              </v-flex>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn fab drak small color="orange" class="mr-5" @click="dialog = true">
              <v-icon dark>info</v-icon>
            </v-btn>
            <v-btn depressed color="orange" class="mr-5" @click="goto_vote">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Tata Cara Memilih
        </v-card-title>

        <v-card-text class="mt-5">
          1. Masukkan Kunci Private yang telah diberikan.<br>
          2. Setelah selesai klik Submit.<br>
          3. Pilihlah pasangan sesuai pilihan.<br>
          4. Selesai memilih.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    goto_vote: function(){
      this.$router.push({name: "vote"})
    }
  }
};
</script>
