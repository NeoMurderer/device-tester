<template>
  <v-container fluid>
    
      <v-layout >
        <v-flex xs4 sm4 >
          <media-device></media-device>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import MediaDevice from './cards/MediaDevice'
export default {
  components: {
    MediaDevice
  },
  name: 'HelloWorld',
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
