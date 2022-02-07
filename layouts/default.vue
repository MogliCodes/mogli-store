<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '../components/layout/TheHeader.vue'
export default {
  name: 'default',
  components: { TheHeader },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

body {
  margin: 0;
}

body {
  font-size: 1.4rem;
  font-family: $primaryFont;
}

img {
  max-width: 100%;
  height: auto;
}

figure {
  margin: 0;
}

h1 {
  font-size: 3.6rem;
  margin-top: 0;
}

main {
  min-height: 100vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.panel {
  padding: 8rem 0;
}

.grid {
  display: grid;
  &--6-6 {
    grid-template-columns: 1fr 1fr;
  }
  &--3-3-3-3 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &--2-2-2-2-2-2 {
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  }
  &--special {
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  }
}

.flex {
  display: flex;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.font-bold {
  font-weight: bold;
}

.shadow {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>