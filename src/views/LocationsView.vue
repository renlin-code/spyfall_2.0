<template>
    <LayoutDefault>
        <template #header>
            <Header />
        </template>
        <template #main>
            <section class="locations-section">
                <router-link class="close-button" to="/params">Back</router-link>
                    <Locations />
            </section>
        </template>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '../components/layouts/LayoutDefault.vue'
import Header from '../components/headers/Header.vue'
import Locations from '../components/Locations.vue'
import Countdown from '../components/Countdown.vue'

export default {
    components: {LayoutDefault, Header, Locations, Countdown}
}
</script>

<style scoped>
.locations-section {
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    flex-direction: column;
    justify-content: start;
    background-color: var(--white-color);
    position: absolute;
    left: 0;
    top: 0;
    transition: all 800ms;
}

</style>