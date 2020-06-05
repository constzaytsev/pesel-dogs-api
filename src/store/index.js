import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dog.ceo/api'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dogs: [],
    dogsByBreed: [],
    breeds: [],
    activeBreed: '',
    sort: false
  },
  mutations: {
    SET_DOGS (state, dogs) {
      state.dogs = [...state.dogs, ...dogs]
    },
    SET_SORTED (state, dogs) {
      state.dogsByBreed = dogs
    },
    SET_BREEDS (state, breeds) {
      state.breeds = Object.keys(breeds)
    },
    SET_ACTIVE_BREED (state, breed) {
      state.activeBreed = breed
    },
    TOGGLE_SORT (state) {
      state.sort = !state.sort
    }
  },
  actions: {
    fetchAllDogs ({ commit }) {
      api.get('/breeds/image/random/20')
        .then(({ data }) => {
          commit('SET_DOGS', data.message)
        })
        .catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    sortDogs ({ commit }, breed) {
      api.get(`/breed/${breed}/images`)
        .then(({ data }) => {
          commit('SET_ACTIVE_BREED', breed)
          commit('SET_SORTED', data.message)
        })
        .catch(error => {
          throw new Error(`API ${error}`)
        })
    },
    fetchBreedList ({ commit }) {
      api.get('/breeds/list/all')
        .then(({ data }) => {
          commit('SET_BREEDS', data.message)
        })
        .catch(error => {
          throw new Error(`API ${error}`)
        })
    }
  }
})
