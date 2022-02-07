<template>
  <main>
    <section class="panel">
      <div class="container">
        <h1 class="text-center">Thank you for your order!</h1>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('cart', ['getProducts']),
    ...mapGetters('checkout', ['getDeliveryAddress']),
  },
  mounted() {
    const order = {
      userInformation: this.getDeliveryAddress,
      products: this.getProducts,
      orderDate: new Date(),
    }
    this.$store.commit('cart/RESET_CART')
    this.$store.commit('checkout/RESET_CHECKOUT')
    this.$store.commit('orders/ADD_ORDER', order)
  },
}
</script>
