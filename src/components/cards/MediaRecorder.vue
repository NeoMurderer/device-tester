<template>
    <v-card>
        
        <v-toolbar>
            <v-toolbar-title>Media Recorder</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon>
                    <v-icon color="success" v-if="available">done</v-icon>
                    <v-icon color="error" v-else>error</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
    </v-card>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
        }
    },
    computed: {
        ...mapGetters('mediaRecorder', [
            'available',
        ])
    },

    methods: {
        showTester () {
            this.testerView = true
        }
    }
}
</script>
