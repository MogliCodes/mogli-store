export const state = () => ({
    cart: {
        products: [],
        count: 0,
        sum: 0,
    }
})

export const getters = {
    getProducts: (state) => {
        return state.cart.products;
    },
    getProductCount: (state) => {
        return state.cart.count;
    },
    getSum: (state) => {
        return state.cart.sum;
    },
    getCountById: (state) => (id) => {
        return state.card.products.filter(item => item.id === id).map(item => item.count)
    }
}

export const mutations = {
    ADD_TO_CART(state, product) {
        $nuxt.$set(product, 'count', 1)
        state.cart.products.push(product);
        state.cart.count++;
    },
    INCREMENT_PRODUCT_IN_CART(state, product) {
        state.cart.products.filter(item => item.id === product.id).map(item => {
            item.count++;

        })
        state.cart.count++;
    },
    DECREMENT_PRODUCT_IN_CART(state, product) {
        state.cart.products.filter((item, index) => item.id === product.id).map((item, index) => {
            item.count--;
            state.cart.sum = state.cart.sum - item.price;
            state.cart.sum = parseFloat(state.cart.sum.toFixed(2))
            if (item.count === 0) {
                const i = state.cart.products.findIndex(product => product.id === item.id)
                state.cart.products.splice(i, 1)
            }
        })
        state.cart.count--;
    },
    ADD_TO_SUM(state, product) {
        state.cart.sum = state.cart.sum + product.price;
        state.cart.sum = parseFloat(state.cart.sum.toFixed(2))

    }
}

export const actions = {
    addToCart({ commit, state }, product) {
        if (!state.cart.products) return;
        const temp = state.cart.products.find(item => item.id === product.id)
        if (!temp) {
            commit("ADD_TO_CART", product);
            commit("ADD_TO_SUM", product)
        } else {
            commit("INCREMENT_PRODUCT_IN_CART", product)
            commit("ADD_TO_SUM", product)
        }
    }
}