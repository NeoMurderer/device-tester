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
            return navigator.mediaDevices
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