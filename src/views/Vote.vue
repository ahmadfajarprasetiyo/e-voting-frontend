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
            <v-btn depressed block color="orange" class="mr-5" @click="vote(1)">Pilih</v-btn>
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
            <v-btn depressed block color="orange" class="mr-5" @click="vote(2)">Pilih</v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
const axios = require('axios')

export default {
  data () {
    return {
      myImage: require('@/assets/user.png')
    }
  },
  computed: {
    nilai_n(){
      return this.$store.getters.getNilaiN
    },
    nilai_e(){
      return this.$store.getters.getNilaiE
    },
    nilai_d(){
      return this.$store.getters.getNilaiD
    },
  },
  methods: {
    goto_thanks: function(){
      this.$router.push({name: "thanks"})
    },
    goto_home: function(){
      this.$router.push({name: "home"})
    },
    vote: function(choice){
      var payload = {
        "sender_n": this.nilai_n,
        "sender_e": this.nilai_e,
        "sender_d": this.nilai_d,
        "choice": choice
      }

      console.log(payload)
      var url = 'http://localhost:8081/vote'
      var vueObj = this
      
      axios.post(url, payload)
        .then(response => {
          if(response.data == "1"){
            alert("Selamat Anda telah berpartisipasi dalam e-voting")
            vueObj.goto_thanks()
          }else if(response.data == "0"){
            alert("Kunci private Anda tidak valid atau telah digunakan")
            vueObj.goto_home()
          }else{
            alert("Silahkan coba lagi dalam waktu 1 menit")
          }
        })
    }
  }
}
</script>
