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
        stage: 1,
        showPopUp: false,
    }),
    methods: {
        save() {
            sessionStorage.setItem("stage", JSON.stringify(this.stage));
        }
    },
    watch: {
        stage() {
            this.save();
        }
    },
    created() {
        const stageFromLS = JSON.parse(sessionStorage.getItem("stage"));
        this.stage = stageFromLS ? stageFromLS : 1;
    },
    beforeUnmount() {
        this.stage = 1;
        this.save();
    }
}
</script>

<style scoped>
    div :deep() .locations-title {
        top: -32px;
    }
    div :deep() .locations-wrapper {
        height: 70vh;
    }
</style>