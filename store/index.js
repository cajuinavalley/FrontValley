/*
* @Author: caiovictormc
* @Date:   2018-09-29 10:03:45
* @Last Modified by:   caiovictormc
* @Last Modified time: 2018-09-29 22:38:00
*/

import Vuex from 'vuex'
import axios from '~/plugins/axios.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      Startups: []
    },
    mutations: {
      setStartups: (state, startups) => {
        state.startups = startups
      },
    },
    actions: {
      async getStartups ({commit}) {
        let {data} = await axios.get('startups/', {"format": "json"})
        commit('setStartups', data)
      },
      async nuxtServerInit ({commit}, {store, route}) {
      	let {data} = await axios.get('startups/', {"format": "json"})
      	commit('setStartups', data)
      }
    }
  })
}

export default createStore