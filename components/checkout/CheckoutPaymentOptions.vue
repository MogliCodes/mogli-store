<template>
  <div
    @click.self="togglePaymentOption"
    class="payment-option"
  >
    <h2>{{ option.name }}</h2>
  </div>
</template>

<script>
export default {
  props: ['option'],
  methods: {
    togglePaymentOption($target) {
      $target.target.classList.toggle('isSelected')
      $nuxt.$emit('select-option', this.option.slug)
      //   console.log($target)
    },
  },
}
</script>


<style lang="scss" scoped>
.payment-option {
  background: #eee;
  padding: 2rem;
  margin-bottom: 1px;

  &:last-child {
    margin-bottom: 2rem !important;
  }

  h2 {
    display: inline-block;
  }

  &.isSelected {
    background: $fern;
    color: $white;
  }
}
</style>