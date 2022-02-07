<template>
  <div class="account-widget">
    <div
      @click="toggleAccountWidget"
      class="icon"
    >
      <img
        src="/001-account.png"
        alt=""
      >
    </div>
    <div
      ref="overview"
      class="account-widget__overview isVisible"
    >
      <div class="item">
        <nuxt-link to="/account/account">Account</nuxt-link>
      </div>
      <div class="item">
        <nuxt-link to="/account/orders">Orders</nuxt-link>
      </div>
      <div class="item">
        <nuxt-link to="/account/settings">Settings</nuxt-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleAccountWidget() {
      this.$refs.overview.classList.toggle('isVisible')
    },
  },
}
</script>

<style lang="scss" scoped>
.account-widget {
  margin-right: 10px;
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
  }
  &__overview {
    min-width: 150px;
    background: $yellowLight;
    position: absolute;
    top: 0;
    right: 0;
    border-top-right-radius: 30px;
    border-radius: 30px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.125);
    padding-bottom: 2rem;
    z-index: 2;
    opacity: 0;
    padding-top: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
    transform: scale(0);
    transform-origin: top right;
    transition: all 0.35s ease;
    pointer-events: none;

    &.isVisible {
      opacity: 1;
      pointer-events: all;
      transform: scale(1);
    }
  }
  .item {
    padding: 1rem 0;
    border-bottom: 1px solid lighten($yellowLight, 4%);
    text-align: center;

    a {
      color: inherit;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>