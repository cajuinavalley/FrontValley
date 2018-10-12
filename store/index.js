/*
* @Author: caiovictormc
* @Date:   2018-09-29 10:03:45
* @Last Modified by:   caiovictormc
* @Last Modified time: 2018-09-30 17:16:03
*/

import Vuex from 'vuex'
import axios from '~/plugins/axios.js'
import createPersistedState from 'vuex-persistedstate'


const createStore = () => {
  return new Vuex.Store({
    state: {
      startups: [],
      actualStartup: {}
    },
    plugins: [createPersistedState()],
    mutations: {
      setStartups: (state, startups) => {
        state.startups = startups
      },
      setSelectedStartup: (state, startup) => {
      	state.actualStartup = {
      		name: startup.name,
      		opened: true,
      		position: {
      			lat: startup.lat,
      			lng: startup.lon
      		}
      	}
      }
    },
    actions: {
      async getStartups ({commit}) {
        let {data} = await axios.get('startups/', {"format": "json"})
        commit('setStartups', data)
      },
      async zoomStartup ({commit}, startupData) {
      	let data = {
      		text: name,
      		position: {
      			lat: startupData.lat,
				lng: startupData.lon
      		},
      	}
      	commit('setSelectedStartup', data)
      },
      async nuxtServerInit ({commit}, {store, route}) {
      	let {data} = await axios.get('startups/', {"format": "json"})
      	commit('setStartups', data)
      }
    }
  })
}

export default createStore