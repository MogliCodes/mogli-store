export const state = () => ({
    deliveryAddress: {
        firstname: null,
        lastname: null,
        address: null,
        city: null,
        zip: null
    }
})

export const mutations = {
    SET_DELIVERY_ADDRESS(state, deliveryAddress) {
        const { firstname, lastname, address, city, zip } = deliveryAddress
        state.deliveryAddress.firstname = firstname;
        state.deliveryAddress.lastname = lastname;
        state.deliveryAddress.address = address;
        state.deliveryAddress.city = city;
        state.deliveryAddress.zip = zip;
    }
}