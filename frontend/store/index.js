import { ENDPOINTS } from '~/store/api'

export const state = () => ({
  orders: []
})

export const mutations = {
  setOrders(state, payload) {
    state.orders = payload.orders
  }
}

export const actions = {
  async getOrders({ commit }) {
    const response = await this.$axios.$get(ENDPOINTS.ORDERS)

    if (!response.data) {
      throw new Error()
    }

    commit('setOrders', { orders: response.data })
  }
}
