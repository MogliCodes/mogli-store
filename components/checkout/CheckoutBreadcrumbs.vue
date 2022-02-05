<template>
  <section class="panel">
    <div class="container">
      <div class="grid grid--3-3-3-3">
        <div
          class="icon text-center"
          :class="{ 'active text-center' : routeName === 'checkout'}"
        >
          <nuxt-link to="/checkout">
            <img
              src="/icon_cart.png"
              alt=""
            >
            Shopping Cart
          </nuxt-link>
        </div>
        <div
          class="icon text-center"
          :class="{ 'active text-center' : routeName === 'checkout-delivery'}"
        >
          <nuxt-link to="/checkout/delivery">
            <img
              src="/008-address.png"
              alt=""
            >
            Delivery Address
          </nuxt-link>
        </div>
        <div
          class="icon text-center"
          :class="{ 'active text-center' : routeName === 'checkout-payment'}"
        >
          <nuxt-link to="/checkout/payment">
            <img
              src="/003-wallet.png"
              alt=""
            >
            Payment Method
          </nuxt-link>
        </div>
        <div
          class="icon text-center"
          :class="{ 'active text-center' : routeName === 'checkout-preview'}"
        >
          <nuxt-link to="/checkout/preview">
            <img
              src="/009-google-docs.png"
              alt=""
            >
            Preview Order
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    routeName() {
      return this.$route.name
    },
  },
  mounted() {
    console.log(this.$route.name)
  },
}
</script>

<style lang="scss" scoped>
.icon {
  opacity: 0.3;

  &.active {
    opacity: 1;
  }
  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100px;
    max-height: 60px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
}
</style>