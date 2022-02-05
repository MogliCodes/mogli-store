<template>
  <nuxt-link
    v-if="link"
    :to="link"
    class="btn"
  >
    <slot></slot>
  </nuxt-link>
  <button
    v-else
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['text', 'link'],
}
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  box-shadow: none;
  border-radius: 20px;
  background: $blue;
  cursor: pointer;
  color: $white;
  display: inline-block;
  font-size: inherit;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5em 1em;
}

.btn--wide {
  border-radius: 30px;
  display: block;
  padding: 1em;
  text-align: center;
}
</style>