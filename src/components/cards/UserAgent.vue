<template>
    <v-card>
        <v-toolbar>
            <v-toolbar-title>User Agent</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn icon>
                    <v-icon color="success" v-if="available">done</v-icon>
                    <v-icon color="error" v-else>error</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
            <v-list v-for="field in visibleFields" :key="field.key">
                <v-subheader v-html="field.label" />
                <v-list-tile-content v-html="param(field.key)" />
            </v-list>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            show: false,
            fields: [
                { label: 'Browser CodeName', key: 'appCodeName'},
                { label: 'Browser Name', key: 'appName'},
                { label: 'Browser Version', key: 'appVersion'},
                { label: 'Cookies Enabled', key: 'cookieEnabled'},
                { label: 'Browser Language', key: 'language'},
                { label: 'Browser Online', key: 'onLine'},
                { label: 'Platform', key: 'platform'},
                { label: 'User-agent header', key: 'userAgent'},
            ]
        }
    },
    computed: {
        visibleFields () {
            if(this.show) {
                return this.fields
            }
            return  this.fields.splice(0, 1)
        },
        param () {
            return (key) => {
                return this.$store.getters[`userAgent/${key}`]
            }
        },
        ...mapGetters('userAgent', [
            'available'
        ])
    }
}
</script>
