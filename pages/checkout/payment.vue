<template>
  <main>
    <CheckoutBreadcrumbs />
    <section class="panel">
      <div class="container">
        <h1>Payment Information</h1>
      </div>
      <div class="container">
        <div class="payment-option">
          <h2>Invoice</h2>
        </div>
        <div class="payment-option">
          <h2>Paypal</h2>
        </div>
        <div class="payment-option">
          <h2>Credit Card</h2>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import CheckoutBreadcrumbs from '../../components/checkout/CheckoutBreadcrumbs.vue'
export default {
  components: { CheckoutBreadcrumbs },
}
</script>

<style lang="scss" scoped>
.payment-option {
  background: #eee;
  padding: 2rem;
  margin-bottom: 1px;
}
</style>