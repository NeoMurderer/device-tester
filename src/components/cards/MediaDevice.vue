<template>
    <v-card>
        
        <v-toolbar>
            <v-toolbar-title>MediaDevice</v-toolbar-title>
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
            <v-dialog
                v-model="testerView"
                width="900"
            >
                <!-- <v-btn slot="activator" flat @click="showTester">Try media device</v-btn> -->
                <v-card>
                    <v-card-title
                        class="headline"
                    >MediaDevice Tester</v-card-title>
                    <v-card-text>
                        Supported constraints:
                        <v-list v-for="item in constraints" :key="'ct' + item">
                            <v-list-tile avatar>
                                <v-list-tile-avatar color="green">
                                        <span class="white--text  text-uppercase">{{item[0]}}</span>
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-text-field :label="item"></v-text-field>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-card-actions>
    </v-card>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            testerView: false
        }
    },
    computed: {
        modelValue () {
            return (key) => {
                if(typeof this[key] !== undefined) {
                    return this[key]
                } else {
                    console.warn('Not found', key)
                }
            }
        },
        ...mapGetters('mediaDevice', [
            'available',
            'getUserMedia',
            'constraints'
        ])
    },

    methods: {
        showTester () {
            this.testerView = true
        }
    }
}
</script>
