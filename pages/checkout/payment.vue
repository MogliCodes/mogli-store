<template>
  <main>
    <CheckoutBreadcrumbs />
    <section class="panel">
      <div class="container">
        <h1>Payment Information</h1>
      </div>
      <div class="container">
        <CheckoutPaymentOptions
          v-for="option in getPaymentOptions"
          :key="option.id"
          :option="option"
        />
        <base-button
          @click.native="setPaymentOption"
          link="/checkout/preview"
        >Continue</base-button>
      </div>
    </section>
  </main>
</template>

<script>
import BaseButton from '../../components/base/BaseButton.vue'
import CheckoutBreadcrumbs from '../../components/checkout/CheckoutBreadcrumbs.vue'
import CheckoutPaymentOptions from '../../components/checkout/CheckoutPaymentOptions.vue'

import { mapGetters } from 'vuex'

export default {
  components: { BaseButton, CheckoutBreadcrumbs, CheckoutPaymentOptions },
  computed: {
    ...mapGetters('checkout', ['getPaymentOptions']),
  },
  data() {
    return {
      selected: null,
    }
  },
  methods: {
    setPaymentOption() {
      this.$store.commit('checkout/SET_PAYMENT_OPTION', this.selected)
    },
  },
  mounted() {
    $nuxt.$on('select-option', (payload) => {
      console.log(payload)
      this.selected = payload
    })
  },
}
</script>
