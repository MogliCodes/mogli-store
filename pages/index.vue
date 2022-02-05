<template>
  <main>
    <section class="panel">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>Products</h1>
          </div>
        </div>
        <div class="row">
          <div class="grid grid--4-4-4">
            <product-card
              v-for="product in getProducts"
              :key="product.id"
              :product="product"
              class="card"
            >
            </product-card>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('products', ['getProducts']),
  },
}
</script>

<style lang="scss">
// main {
//   min-height: 100vh;
//   display: flex;

//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 8rem 0;
// }

// section {
//   flex-grow: 1;
// }

.grid {
  display: grid;
  grid-gap: 4rem;

  &--4-4-4 {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>