<template>
  <v-container fluid grid-list-md>
      <v-layout wrap row>
        <v-flex xs4 d-flex>
          <media-device></media-device>
        </v-flex>
        <v-flex xs4 d-flex>
          <media-recorder></media-recorder>
        </v-flex>
        <v-flex xs4 d-flex>
          <user-agent></user-agent>
        </v-flex>
        <v-flex xs4>
          <local-storage></local-storage>
        </v-flex>
        <v-flex xs4>
          <session-storage></session-storage>
        </v-flex>
        <v-flex xs4>
          <cookie-storage></cookie-storage>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import MediaDevice from './cards/MediaDevice'
import MediaRecorder from './cards/MediaRecorder'
import UserAgent from './cards/UserAgent'
import LocalStorage from './cards/LocalStorage'
import SessionStorage from './cards/SessionStorage'
import CookieStorage from './cards/CookieStorage'
export default {
  components: {
    MediaDevice,
    MediaRecorder,
    UserAgent,
    LocalStorage,
    SessionStorage,
    CookieStorage,
  },
  name: 'BrowserCheck',
  data() {
    return {
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
