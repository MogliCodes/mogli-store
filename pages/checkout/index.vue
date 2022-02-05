<template>
  <main>
    <section class="panel">
      <div class="container">
        <div class="grid grid--special">
          <div>
            <h1>Checkout</h1>
          </div>
          <div></div>
          <div class="text-right font-bold">Price</div>
          <div class="text-right font-bold">CTY</div>
          <div class="text-right font-bold">TOTAL</div>

        </div>
      </div>
      <div class="container">
        <div
          class="cart-product"
          v-for="product in getProducts"
          :key="product.id"
        >
          <div class="grid grid--2-2-2-2-2-2">
            <figure>
              <img
                :src="product.image"
                alt=""
              >
            </figure>
            <div>
              <h2>{{ product.name }}</h2>
            </div>

            <div class="text-right">{{ product.price }} €</div>
            <div class="text-right">{{ product.count }}</div>
            <div class="text-right">{{ product.price * product.count}} €</div>

          </div>
        </div>
      </div>
      <div class="container">
        <div class="text-right">
          <span class="cart-sum">{{ getSum }} €</span>
        </div>
      </div>
      <div class="container">
        <div class="text-right">
          <base-button link="/checkout/delivery">Continue</base-button>
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
  mounted() {
    $nuxt.$emit('toggle-cart-view')
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
</style>