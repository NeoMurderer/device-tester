const TEST_CONFIG = {
    TEST_VALUE_KEY: 'sessionStorageTest',
    EMPTY_VALUE: 'EMPTY'
}
export default {
    namespaced: true,
    state: {
        testValue: null
    },
    mutations: {
        SET_VALUE (state, value) {
            state.testValue = value
        }
    },
    actions: {
        setItem({dispatch, getters}) {
            const value = Date.now()
            getters['storage'].setItem(TEST_CONFIG.TEST_VALUE_KEY, value)
            dispatch('getItem')
        },
        getItem({getters, commit}) {
            const value = getters['storage'].getItem(TEST_CONFIG.TEST_VALUE_KEY)
            commit('SET_VALUE', value)
        },
        removeItem({dispatch, getters}) {
            getters['storage'].removeItem(TEST_CONFIG.TEST_VALUE_KEY)
            dispatch('getItem')
        },
        clearAll({dispatch, getters}) {
            getters['storage'].clear()
            dispatch('getItem')
        }
    },
    getters: {
        available (state, getters) {
            return getters['storage'] !== undefined
        },
        storage () {
            return window.sessionStorage
        },
    }
}