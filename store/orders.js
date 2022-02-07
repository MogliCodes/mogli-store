export const state = () => ({
    orders: []
})

export const mutations = {
    ADD_ORDER(state, order) {
        state.orders.push(order)
    }
}