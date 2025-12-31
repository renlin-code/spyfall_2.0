<template>
  <div class="header-container">
    <div class="logo">
      <Logo />
    </div>
  </div>
</template>

<script>
  import Logo from '../icons/Logo.vue'

  export default {
    components: { Logo }
  }
</script>

<style scoped>
  .header-container {
    width: 100%;
    height: 90px;
  }
  .header-container .logo {
    width: 230px;
    height: 70px;
    margin: 10px auto;
  }
</style>
