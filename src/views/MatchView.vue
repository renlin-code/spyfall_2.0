<template>
    <LayoutDefault>
        <template #header>
            <HeaderWithoutBurger />
        </template>
        <template #main>
            <transition name="view">
                <CardsParade @closeParade="this.stage = 2" v-if="stage===1" />
            </transition>
            <transition name="view">
                <div v-if="stage===2">
                    <Locations />
                    <Timer @openPopUp="showPopUp = true" />
                    <PopUp @closePopUp="showPopUp = false" v-if="showPopUp" />
                </div>
            </transition>
        </template>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '../components/layouts/LayoutDefault.vue';
import HeaderWithoutBurger from '../components/headers/HeaderWithoutBurger.vue';
import CardsParade from '../components/CardsParade.vue';
import Locations from '../components/Locations.vue';
import Timer from '../components/Timer.vue';
import PopUp from '../components/PopUp.vue';

export default {
    components: {LayoutDefault, HeaderWithoutBurger, CardsParade, Locations, Timer, PopUp},
    data: () => ({
        stage: 2,
        showPopUp: false,

    })
}
</script>

<style scoped>
    div >>> .locations-title {
        top: -32px;
    }
    div >>> .locations-wrapper {
        height: 70vh;
    }
</style>