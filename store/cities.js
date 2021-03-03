export const state = () => ({
  cities: [],
})

export const getters = {
  cityList: (state) => {
    return state.cities
  },

  getCityById: (state) => (id) => {
    return state.cities.find((item) => item.id === id)
  },
}

export const mutations = {
  UPDATE_CITIES(state, { listCities }) {
    state.cities = listCities.data
  },
}

export const actions = {
  async getlistCities({ commit }) {
    try {
      const listCities = await this.$axios.$get(
        'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        {
          params: { countryIds: 'RU' },
          headers: {
            'x-rapidapi-key': this.$config.X_RAPIDAPI_KEY,
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
          },
        }
      )
      commit('UPDATE_CITIES', { listCities })
    } catch (e) {
      throw new Error(`Can't get cities`)
    }
  },
}
