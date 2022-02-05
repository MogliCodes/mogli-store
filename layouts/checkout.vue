<template>
  <div>
    <TheHeader />
    <CheckoutBreadcrumbs />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue'
import CheckoutBreadcrumbs from '../components/checkout/CheckoutBreadcrumbs.vue'
export default {
  components: { TheHeader, CheckoutBreadcrumbs },
}
</script>

<style>
</style>