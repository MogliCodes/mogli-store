<template>
  <main>
    <section class="panel">
      <div class="container">
        <h1>Delivery</h1>
        <div class="form-container">
          <form @submit.prevent>
            <div>
              <label for="">Firstname</label>
              <input
                v-model="deliveryAddress.firstname"
                type="text"
              >
            </div>
            <div>
              <label for="">Last Name</label>
              <input
                v-model="deliveryAddress.lastname"
                type="text"
              >
            </div>
            <div>
              <label for="">Address</label>
              <input
                v-model="deliveryAddress.address"
                type="text"
              >
            </div>
            <div>
              <label for="">ZIP</label>
              <input
                v-model="deliveryAddress.zip"
                type="text"
              >
            </div>
            <div>
              <label for="">City</label>
              <input
                v-model="deliveryAddress.city"
                type="text"
              >
            </div>
          </form>
          <div class="text-right">
            <base-button
              @click.native="submitDeliveryAddress"
              link="/checkout/payment"
            >Continue</base-button>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseButton from '../../components/base/BaseButton.vue'
import CheckoutBreadcrumbs from '../../components/checkout/CheckoutBreadcrumbs.vue'
export default {
  layout: 'checkout',
  components: { BaseButton, CheckoutBreadcrumbs },
  computed: {
    ...mapGetters('cart', ['getProducts']),
    ...mapGetters('cart', ['getSum']),
  },
  data() {
    return {
      deliveryAddress: {
        firstname: null,
        lastname: null,
        address: null,
        zip: null,
        city: null,
      },
    }
  },
  methods: {
    submitDeliveryAddress() {
      this.$store.commit('checkout/SET_DELIVERY_ADDRESS', this.deliveryAddress)
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-product {
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid #eee;

  figure {
    max-width: 250px;
    margin-right: 4rem;
  }
}

.cart-sum {
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem 0;
  display: block;
}

.grid--price {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.form-container {
  width: 50%;
}

input {
  display: block;
  font-family: inherit;
  font-size: inherit;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.5em;
  margin-bottom: 2em;
  width: 100%;
}
</style>