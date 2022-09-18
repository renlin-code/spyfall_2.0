<template>
    <div class="header-container">
        <div class="menu-icon-container">
            <transition name="burger">
                <button 
                    @click="showMenu=!showMenu" 
                    v-if="showIconMenu" class="burger-menu">
                    <IconMenu />
                </button>
            </transition>
        </div>
        <div class="logo">
            <Logo />
        </div>
        <Menu 
            @closeMenu="showMenu=false" 
            v-show="showMenu" />
    </div>
</template>

<script>
import IconMenu from '../icons/IconMenu.vue';
import Logo from '../icons/Logo.vue';
import Menu from '../Menu.vue';

export default {
    components: {IconMenu, Logo, Menu},

    data: () => ({
        showMenu: false,
        showIconMenu: true
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

.burger-enter-active,
.burger-leave-active {
  transition: opacity 400ms ease;
}

.burger-enter-from,
.burger-leave-to {
    opacity: 0;
}
</style>