<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>Cookie Storage</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon>
                    <v-icon color="success" v-if="available">done</v-icon>
                    <v-icon color="error" v-else>error</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
            <v-list>
                <v-subheader>Test value: </v-subheader>
                <v-list-tile v-html="testValue"></v-list-tile>
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-btn @click="setItem">Set item</v-btn>
            <v-btn @click="getItem">Get item</v-btn>
            <v-btn @click="removeItem">Remove item</v-btn>
            <v-btn @click="clearAll">Clear all</v-btn>
            
        </v-card-actions>
    </v-card>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    data () {
        return {
            fields: [
            ]
        }
    },
    computed: {
        testValue () {
            return this.$store.state.cookieStorage.testValue || 'Get or set to see current'
        },
        param () {
            return (key) => {
                return this.$store.getters[`cookieStorage/${key}`]
            }
        },
        ...mapGetters('cookieStorage', [
            'available',
        ])
    },
    methods: {
        ...mapActions('cookieStorage', [
            'setItem',
            'getItem',
            'removeItem',
            'clearAll'
        ])
    }
}
</script>
