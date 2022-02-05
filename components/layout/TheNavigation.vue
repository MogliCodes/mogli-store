<template>
  <nav class="nav nav--primary">
    <ul>
      <li>
        <nuxt-link to="/">Shop</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav--primary {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    color: $black;
    font-weight: bold;
    text-decoration: none;
    padding: 0.25em 0.5em;
  }
}
</style>