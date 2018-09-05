<template>
  <v-app>
    <v-toolbar
      app
    >
    <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <HelloWorld/>
    </v-content>
    <v-footer app>
      <span>&copy; 2018</span>
    </v-footer>
    <v-snackbar
      v-model="snackbar"
      :timeout="6000"
      color="error"
      :top="true"
      :vertical="true"
    >
      {{errorText}}
      <v-btn
        flat
        @click="snackbar = false"
      >Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import HelloWorld from './components/BrowserCheck'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  errorCaptured (err, vm, info) {
      this.errorText = err.message
      this.snackbar = true
  },
  data () {
    return {
      snackbar: false,
      title: 'Browser tester',
      errorText: 'Hello'
    }
  }
}
</script>
