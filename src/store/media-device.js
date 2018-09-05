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
            return false
        },
        getUserMedia () {
            const getUserMedia = ((navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
            || navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia)

            return typeof getUserMedia !== undefined
        },
        constraints () {
            return Object.keys(navigator.mediaDevices.getSupportedConstraints())
        }
    }
}