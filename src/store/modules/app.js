
const state = {
  count: 0
}

const mutations = {
  SET_COUNT: (state, data) => {
    state.count = data
  }
}

const actions = {
  setCount({ commit }, data) {
    commit('SET_COUNT', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

