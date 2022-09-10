<template>
    <transition name="menu">
        <nav>
            <div class="menu-items-container">
                <FigureEyes />
                <ul>
                    <li><button @click="$emit('closeMenu')" id="homeButton"><span class="menu-item-icon home-icon"></span> HOME</button></li>
                    <li><button id="rulesButton"><span class="menu-item-icon rules-icon"></span> RULES</button></li>
                    <li><button id="settingsButton"><span class="menu-item-icon settings-icon"></span> SETTINGS</button></li>
                    <li><button id="shareButton"><span class="menu-item-icon share-icon"></span> SHARE</button></li>
                </ul>
            </div>
        </nav>
    </transition>
</template>

<script>
import FigureEyes from './figures/FigureEyes.vue';

export default {
    components: {
        FigureEyes
    },
}
</script>

<style scoped>
nav {
    display: grid;
    background-color: var(--white-color);
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    place-content: center;
    position: absolute;
    left: 0;
    /* top: calc(-100vh + 90px); */
    top: 90px;
    z-index: 1;
    /* transform: translateY(100vh); */
}
nav .menu-items-container {
    min-width: 80%;
    width: 300px;
    height: 300px;
    display: grid;
    place-items: center;
}
nav .menu-items-container ul {
    list-style: none;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}
nav .menu-items-container ul li {
    margin: 6px 0;
    display: flex;
    justify-content: center;
}
nav .menu-items-container ul li:nth-child(2) {
    margin-bottom: 68px;
}
nav .menu-items-container ul li button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 1.8rem;
    line-height: 2.6rem;
    color: var(--dark-gray);
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu-item-icon {
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.home-icon {
    background-image: url("../assets/icons/home.svg");
}
.rules-icon {
    background-image: url("../assets/icons/rules.svg");
}
.settings-icon {
    background-image: url("../assets/icons/settings.svg");
}
.share-icon {
    background-image: url("../assets/icons/share.svg");
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