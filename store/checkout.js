export const state = () => ({
    deliveryAddress: {
        firstname: null,
        lastname: null,
        address: null,
        city: null,
        zip: null
    },
    selectedPaymentOption: null,
    paymentOptions: [{
            id: 1,
            slug: 'invoice',
            name: 'Invoice',
        },
        {
            id: 2,
            slug: 'paypal',
            name: 'Paypal',
        },
        {
            id: 3,
            slug: 'credit-card',
            name: 'Credit Card'
        }
    ]
})

export const getters = {
    getDeliveryAddress: (state) => {
        return state.deliveryAddress
    },
    getPaymentOptions: (state) => {
        return state.paymentOptions
    },
    getSelectedPaymentOption: (state) => {
        return state.paymentOptions.filter(item => item.slug === state.selectedPaymentOption)
    }
}

export const mutations = {
    SET_DELIVERY_ADDRESS(state, deliveryAddress) {
        const { firstname, lastname, address, city, zip } = deliveryAddress
        state.deliveryAddress.firstname = firstname;
        state.deliveryAddress.lastname = lastname;
        state.deliveryAddress.address = address;
        state.deliveryAddress.city = city;
        state.deliveryAddress.zip = zip;
    },
    SET_PAYMENT_OPTION(state, paymentOption) {
        state.selectedPaymentOption = paymentOption
    },
    RESET_CHECKOUT(state) {
        state.deliveryAddress.firstname = null;
        state.deliveryAddress.lastname = null;
        state.deliveryAddress.address = null;
        state.deliveryAddress.city = null;
        state.deliveryAddress.zip = null;
        state.selectedPaymentOption = null;
    }
}