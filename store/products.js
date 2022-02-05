export const state = () => ({
    products: [{
            id: 1,
            name: 'Product One',
            description: 'This is the description for product one',
            price: 9.99,
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            stock: 4,
            isOnSale: false
        },
        {
            id: 2,
            name: 'Product Two',
            description: 'This is the description for product one',
            price: 9.99,
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            stock: 80,
            isOnSale: false
        },
        {
            id: 3,
            name: 'Product Three',
            description: 'This is the description for product one',
            price: 9.99,
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            stock: 80,
            isOnSale: false
        },
        {
            id: 4,
            name: 'Product Four',
            description: 'This is the description for product one',
            price: 9.99,
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            stock: 80,
            isOnSale: false
        },
        {
            id: 5,
            name: 'Product Five',
            description: 'This is the description for product one',
            price: 9.99,
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            stock: 80,
            isOnSale: false
        },
        {
            id: 6,
            name: 'Product Six',
            description: 'This is the description for product one',
            price: 9.99,
            image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            stock: 80,
            isOnSale: false
        }
    ]
})

export const getters = {
    getProducts: (state) => {
        return state.products;
    }
}

export const mutations = {
    DECREMENT_STOCK(state, id) {
        state.products.filter(item => id == item.id).map(item => {
            item.stock--
        })
    },
    INCREMENT_STOCK(state, id) {
        state.products.filter(item => id == item.id).map(item => {
            item.stock++
        })
    }
}

export const actions = {

}