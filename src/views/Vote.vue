<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs4 offset-xs1>
        <v-card dark color="primary">
          <v-img
            :src="myImage"
            height="400px"
            style="background:white;"
            >
          </v-img>
          <v-card-title dark >
            <div class="headline">Calon 1</div>
          </v-card-title>
          <v-card-actions>
            <v-btn depressed block color="orange" class="mr-5" @click="goto_thanks">Pilih</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs4 offset-xs2>
        <v-card dark color="primary">
          <v-img
            :src="myImage"
            height="400px"
            style="background:white;"
            >
          </v-img>
          <v-card-title dark >
            <div class="headline">Calon 2</div>
          </v-card-title>
          <v-card-actions>
            <v-btn depressed block color="orange" class="mr-5" @click="goto_thanks">Pilih</v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      myImage: require('@/assets/user.png')
    }
  },
  methods: {
    goto_thanks: function(){
      this.$router.push({name: "thanks"})
    }
  }
}
</script>
