<template>
  <div class="product-preview">
    <figure>
      <img
        :src="product.image"
        alt=""
      >
    </figure>
    <div class="product-preview__info">
      <p class="product-preview__name">{{ product.name }}</p>
      <div class="product-preview__controls">
        <button @click="decrementProductInCart">-</button>
        <span>
          {{ product.count }}
        </span>
        <button @click="incrementProductInCart">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['product'],
  computed: {
    count() {
      return this.$store.getters.getCountById(product.id)
    },
  },
  methods: {
    decrementProductInCart() {
      if (this.product.count === 0) return
      this.$store.commit('products/INCREMENT_STOCK', this.product.id)
      this.$store.commit('cart/DECREMENT_PRODUCT_IN_CART', this.product)
    },
    incrementProductInCart() {
      if (this.product.stock === 0) return
      this.$store.commit('products/DECREMENT_STOCK', this.product.id)
      this.$store.dispatch('cart/addToCart', this.product)
    },
  },
}
</script>

<style lang="scss" scoped>
.product-preview {
  padding: 1rem 0;
  color: $brownDark;
  border-bottom: 1px solid lighten($yellowLight, 4%);
  display: flex;
  align-items: center;
  &:first-of-type {
    margin-top: 60px;
  }

  &__name {
    font-weight: bold;
  }

  &__info {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  }

  &__controls span {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: #eee;
  }

  figure {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    height: 40px;
    width: 40px;
    margin-right: 1rem;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  p,
  span {
    font-size: 1.2rem;
    text-align: center;
  }
  button {
    background: $brown;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    display: inline-block;
    border: none;
    width: 20px;
    height: 20px;
  }
}
</style>