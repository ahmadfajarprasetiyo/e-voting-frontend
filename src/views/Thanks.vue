<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2 class="pt-5">
        <v-card dark color="primary" style="margin-top:150px;">
          <v-card-title primary-title>
            <v-flex xs12>
              <div class="text-xs-center" style="text-align:center">
                Terima kasih anda telah ikut berpartisipasi dalam e-voting. Anda akan teredirect otomatis ke Home.
              </div>
            </v-flex>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn depressed color="orange" class="mr-5" @click="goto_home()">Home({{second}})</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  mounted() {
    this.count_down()
  },
  components: {
  },
  data () {
    return {
      second: 10
    }
  },
  methods:{
    count_down: async function() {
      const delay = require("delay");
      var i;
      for (i = 10; i >= 0; i--) {
        await delay(1000);
        this.second = i;
      }
      this.goto_home()
    },
    goto_home: function() {
      window.location.href = "/";
    }
  } 
};
</script>
