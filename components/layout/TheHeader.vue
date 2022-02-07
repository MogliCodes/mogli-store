<template>
  <header>
    <div class="container">
      <div class="header__inner">
        <div class="site-title">
          <nuxt-link to="/">MogliStore</nuxt-link>
        </div>
        <div>
          <TheNavigation />
        </div>
        <div class="flex">
          <AccountWidget />
          <CartWidget />
        </div>
      </div>
    </div>
  </header>
</template>


<script>
import { mapGetters } from 'vuex'
import AccountWidget from '../account/AccountWidget.vue'
import CartWidget from '../cart/CartWidget.vue'
import TheNavigation from './TheNavigation.vue'
export default {
  components: { TheNavigation, CartWidget, AccountWidget },
  computed: {
    ...mapGetters('cart', ['getProductCount']),
  },
}
</script>


<style lang="scss">
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  p {
    margin: 0;
  }

  .site-title a {
    color: #000;
    font-family: $secondaryFont;
    font-size: 1.6rem;
    text-decoration: none;
  }
}
</style>