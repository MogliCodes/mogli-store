<template>
  <div class="cart-widget">

    <div
      @click="toggleCartOverview"
      class="icon"
    >
      <img
        class=""
        src="/icon_cart.png"
        alt=""
      >
      <div v-if="getProductCount > 0">{{ getProductCount }}</div>
    </div>

    <div
      ref="overview"
      class="cart-widget__overview"
    >
      <div
        class="cart-empty-notice"
        v-if="getProductCount === 0"
      >
        <p>Your cart is empty</p>
      </div>
      <cart-widget-product-preview
        v-for="product in getProducts"
        :key="product.id"
        :product="product"
      ></cart-widget-product-preview>
      <p
        v-show="getSum != 0"
        class="product-sum"
      >{{ getSum }} €</p>
      <div v-if="getProductCount > 0">
        <base-button
          class="btn--wide"
          link="/checkout"
        >Checkout</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseButton from '../base/BaseButton.vue'
import CartWidgetProductPreview from './CartWidgetProductPreview.vue'

export default {
  components: { CartWidgetProductPreview, BaseButton },
  computed: {
    ...mapGetters('cart', ['getProducts']),
    ...mapGetters('cart', ['getProductCount']),
    ...mapGetters('cart', ['getSum']),
  },
  methods: {
    toggleCartOverview() {
      this.$refs.overview.classList.toggle('isVisible')
    },
  },
  mounted() {
    $nuxt.$on('toggle-cart-overview', this.toggleCartOverview)
  },
}
</script>

<style lang="scss" scoped>
.cart-widget {
  display: flex;
  align-items: center;
  position: relative;

  .icon {
    background: #eee;
    border-radius: 30px;
    padding: 12px;
    max-width: 50px;
    position: relative;
    cursor: pointer;
    z-index: 3;
    img {
      display: block;
    }
    div {
      background: $geraldine;
      border-radius: 20px;
      color: #fff;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 8px;
      height: 20px;
      width: 20px;
      position: absolute;
      top: -5px;
      right: -5px;
    }
  }
  &__overview {
    min-width: 280px;
    background: $yellowLight;
    position: absolute;
    top: 0;
    left: 0;
    border-top-right-radius: 30px;
    border-radius: 30px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.125);
    padding-bottom: 2rem;
    z-index: 2;
    opacity: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    transform: scale(0);
    transform-origin: top left;
    transition: all 0.35s ease;
    pointer-events: none;

    &.isVisible {
      opacity: 1;
      pointer-events: all;
      transform: scale(1);
    }

    .product-sum {
      font-size: 2rem;
      font-weight: bold;
      text-align: right;
      padding: 2rem 0;
    }
  }
}

.cart-sum {
  position: absolute;
  right: 60px;
  width: 100%;
  display: block;
  min-width: 100px;
  text-align: right;
}

.cart-empty-notice {
  font-weight: bold;
  text-align: center;
  padding: 4rem 4rem 0 4rem;
}
</style>