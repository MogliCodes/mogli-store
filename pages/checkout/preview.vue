<template>
  <main>
    <section class="panel">
      <div class="container">
        <h1>Preview</h1>
        <checkout-preview headline="Delivery Address">
          {{ getDeliveryAddress.firstname }} {{ getDeliveryAddress.lastname }} <br>
          {{ getDeliveryAddress.address }} <br>
          {{ getDeliveryAddress.zip }} {{ getDeliveryAddress.city }} <br>

        </checkout-preview>
        <checkout-preview
          v-if="getSelectedPaymentOption"
          headline="Payment Option"
        >
          {{ getSelectedPaymentOption[0].name }}
        </checkout-preview>
        <checkout-preview>
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
        </checkout-preview>
        <base-button link="/checkout/complete">Buy now</base-button>
      </div>
    </section>
  </main>
</template>

<script>
import CheckoutBreadcrumbs from '../../components/checkout/CheckoutBreadcrumbs.vue'
import CheckoutPreview from '../../components/checkout/CheckoutPreview.vue'

import { mapGetters } from 'vuex'
import BaseButton from '../../components/base/BaseButton.vue'

export default {
  layout: 'checkout',
  components: { CheckoutBreadcrumbs, CheckoutPreview, BaseButton },
  computed: {
    ...mapGetters('cart', ['getProducts']),
    ...mapGetters('cart', ['getSum']),
    ...mapGetters('checkout', ['getDeliveryAddress']),
    ...mapGetters('checkout', ['getSelectedPaymentOption']),
  },
}
</script>
