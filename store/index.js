export const state = () => ({
  weather: null,
  currentCityId: '',
  error: '',
  loading: false,
})

export const getters = {
  dataWeather: (state) => {
    return state.weather
  },

  currentCityId: (state) => {
    return state.currentCityId || ''
  },

  error: (state) => {
    return state.error
  },

  hasError: (state) => {
    return !!state.error
  },

  isLoading: (state) => {
    return state.loading
  },
}

export const mutations = {
  ADD_INIT_CITY(state, { newCity }) {
    state.cities.cities.push(newCity)
  },

  UPDATE_LOADING(state, loading) {
    state.loading = loading
  },

  UPDATE_ERROR(state, error = 'Something went wrong...') {
    state.error = error
  },

  UPDATE_WEATHER(state, weather) {
    state.weather = weather
  },

  CHANGE_CITY(state, { newCityId }) {
    state.currentCityId = newCityId
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    try {
      await dispatch('cities/getlistCities')
    } catch (e) {
      commit('UPDATE_ERROR', e.message)
    }
  },

  async getWeather({ commit, state, dispatch, getters }) {
    try {
      if (!state.weather) {
        commit('UPDATE_LOADING', true)
        await dispatch('getCurrentPosition')
      }

      const currentCityObj = getters['cities/getCityById'](state.currentCityId)

      const weather = await this.$axios.$get('/data/2.5/onecall', {
        params: {
          lat: currentCityObj.latitude,
          lon: currentCityObj.longitude,
          exclude: ['minutely', 'hourly', 'alerts'],
          units: 'metric',
          appid: this.$config.WEATHER_API_KEY,
        },
      })
      commit('UPDATE_WEATHER', weather)
    } catch (e) {
      commit('UPDATE_ERROR', e.message)
    } finally {
      commit('UPDATE_LOADING', false)
    }
  },

  async getCurrentPosition({ commit, getters }) {
    try {
      const currentPosition = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
      const locationCity = await this.$axios.$get('/geo/1.0/reverse', {
        params: {
          lat: currentPosition.coords.latitude,
          lon: currentPosition.coords.longitude,
          limit: 1,
          appid: this.$config.WEATHER_API_KEY,
        },
      })
      const newCity = {
        id: new Date().getTime(),
        name: locationCity[0].name,
        latitude: locationCity[0].lat,
        longitude: locationCity[0].lon,
        country: 'Russia',
      }
      const newCityId = newCity.id
      if (!getters['cities/getCityById'](newCity.id)) {
        commit('ADD_INIT_CITY', { newCity, getters })
      }
      commit('CHANGE_CITY', { newCityId })
    } catch (e) {
      throw new Error(`Can't get your position`)
    }
  },

  changeCity({ commit, getters }, newCityId) {
    const selectedCity = getters['cities/getCityById'](newCityId)
    if (!selectedCity) commit('UPDATE_ERROR')
    commit('CHANGE_CITY', { newCityId })
  },
}
