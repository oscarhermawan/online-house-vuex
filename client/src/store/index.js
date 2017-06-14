import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    center: {lat: -6.2, lng: 106.85},
    // markers:{position: {lat: -6.2, lng: 106.85s}},
    houses:[]
  },
  actions:{
    LOAD_HOUSE_LIST({ commit }) {
      axios.get('http://localhost:3000/houses')
      .then((response) => {
          commit('SET_HOUSE_LIST', { list: response.data })
        },(err) => {
          console.log(err)
      })
    },
    ADD_HOUSE({ commit }, { newHouse }) {
      axios.post('http://localhost:3000/houses', newHouse)
      .then((response) =>{
        commit('ADD_NEW_HOUSE', { result : response.data })
      }, (err) => {
        console.log(err)
      })
    },
    UPDATE_HOUSE({ commit }, { updateHouse } ){
      console.log('upd', updateHouse);
      axios.put(`http://localhost:3000/houses/${updateHouse.params}`, updateHouse)
      .then((response) =>{
        commit('UPDATE_HOUSE', { result : response.data })
      }, (err) => {
        console.log(err)
      })
    },
    DELETE_HOUSE({ commit }, { deleteHouse }){
      axios.delete(`http://localhost:3000/houses/${deleteHouse._id}`)
      .then((response) =>{
        commit('DELETE_HOUSE', { result : response.data })
      }, (err) => {
        console.log(err)
      })
    }
  },

  mutations:{
    SET_HOUSE_LIST(state, { list }) {
      state.houses = list
    },
    ADD_NEW_HOUSE (state, { result }) {
      state.houses.push(result)
    },
    UPDATE_HOUSE: (state, { result }) => {
      let idx = state.houses.map(p => p._id).indexOf(result._id)
      console.log('indeksnya',idx);
      state.houses.splice(idx, 1, result)
    },
    DELETE_HOUSE(state, { result }){
      let idx = state.houses.map(p => p._id).indexOf(result._id)
      state.houses.splice(idx, 1)
    }
  },
  getters:{
    getHouses:state => {
      return state.houses.filter(houses => !houses.completed)
    },
    getLocation:state =>{
      return state.center
    }
  }
})

export default store
