export default {
    namespaced: true,
    state: {
    },
    mutations: {

    },
    actions: {
    },
    getters: {
        available () {
            return navigator.userAgent
        },
        appCodeName () {
            return navigator.appCodeName
        },
        appName () {
            return navigator.appName
        },
        appVersion () {
            return navigator.appVersion
        },
        cookieEnabled () {
            return navigator.cookieEnabled
        },
        language () {
            return navigator.language
        },
        onLine () {
            return navigator.onLine
        },
        platform () {
            return navigator.platform
        },
        userAgent () {
            return navigator.userAgent
        },
    }
}