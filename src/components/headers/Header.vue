<template>
  <div class="header-container">
    <div class="menu-icon-container">
      <button @click="showMenu = !showMenu" class="burger-menu">
        <IconMenu />
      </button>
    </div>
    <div class="logo">
      <Logo />
    </div>
    <transition name="menu">
      <MenuComponent @closeMenu="showMenu = false" v-show="showMenu" />
    </transition>
  </div>
</template>

<script>
  import IconMenu from '../icons/IconMenu.vue'
  import Logo from '../icons/Logo.vue'
  import MenuComponent from '../Menu.vue'

  export default {
    components: { IconMenu, Logo, MenuComponent },

    data: () => ({
      showMenu: false
    })
  }
</script>

<style scoped>
  .header-container {
    width: 100%;
    height: 90px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
  .header-container .menu-icon-container {
    height: 16px;
    width: auto;
  }
  .header-container .menu-icon-container .burger-menu {
    height: 100%;
    width: 100%;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: all 850ms;
  }
  .header-container .logo {
    width: 230px;
    height: 70px;
    margin: 10px auto;
  }

  .menu-enter-active,
  .menu-leave-active {
    transition: all 400ms ease;
  }

  .menu-enter-from,
  .menu-leave-to {
    transform: translateY(-5vh);
    opacity: 0;
  }
</style>
