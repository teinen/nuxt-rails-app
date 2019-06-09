import { ENDPOINTS } from '~/store/api.ts'
import Order from '~/models/Order'

interface State {
  orders: Array<Order>
}

export const state: State = {
  orders: []
}

export const mutations = {
  setOrders(state: State, payload): void {
    state.orders = payload.orders
  }
}

export const actions = {
  async getOrders({ commit, app }) {
    const response = await app.$axios.$get(ENDPOINTS.ORDERS)

    if (!response.data) {
      throw new Error()
    }

    commit('setOrders', { orders: response.data })
  }
}
