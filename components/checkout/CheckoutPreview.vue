<template>
  <div class="payment-option">
    <h3>{{ headline }}</h3>
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: ['headline'],
}
</script>

<style lang="scss" scoped>
.payment-option {
  background: #eee;
  padding: 4rem 2rem;
  margin-bottom: 1px;

  h3 {
    margin-top: 0;
  }
}
</style>