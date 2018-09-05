const TEST_CONFIG = {
    TEST_VALUE_KEY: 'cookieStorageTest'
}
function getCookie(name, value, options) {
    options = options || {};
  
    var expires = options.expires;
  
    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }
  
    value = encodeURIComponent(value);
  
    var updatedCookie = name + "=" + value;
  
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }
  
    return updatedCookie;
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
            const storageValue = getCookie(TEST_CONFIG.TEST_VALUE_KEY, value)
            getters['storage'].cookie = storageValue
            dispatch('getItem')
        },
        getItem({getters, commit}) {
            const matches = getters['storage'].cookie.match(new RegExp(
                "(?:^|; )" + TEST_CONFIG.TEST_VALUE_KEY.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
              ));
            commit('SET_VALUE', matches ? decodeURIComponent(matches[1]) : undefined)
        },
        removeItem({dispatch, getters}) {
            const storageValue = getCookie(TEST_CONFIG.TEST_VALUE_KEY, '')
            getters['storage'].cookie = storageValue
            dispatch('getItem')
        },
        clearAll({dispatch, getters}) {
            const storageValue = getCookie(TEST_CONFIG.TEST_VALUE_KEY, '')
            getters['storage'].cookie = storageValue
            dispatch('getItem')
        }
    },
    getters: {
        available (state, getters) {
            return getters['storage'].cookie !== undefined
        },
        storage () {
            return document
        },
    }
}