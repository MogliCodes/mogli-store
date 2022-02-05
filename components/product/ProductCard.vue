<template>
  <div class="card">
    <figure>
      <img
        :src="product.image"
        alt=""
      >
    </figure>
    <div class="card__inner">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <p>Stock: {{ product.stock }}</p>
      <p>{{ product.price }} €</p>
      <base-button @click.native="addToCart(product)">Add to cart</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from '../base/BaseButton.vue'
export default {
  props: ['product'],
  components: { BaseButton },
  methods: {
    addToCart(product) {
      if (product.stock === 0) return
      this.$store.commit('products/DECREMENT_STOCK', product.id)
      this.$store.dispatch('cart/addToCart', product)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.125);

  &__inner {
    padding: 2rem;
  }
}
</style>