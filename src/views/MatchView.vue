<template>
    <LayoutDefault>
        <template #header>
            <HeaderWithoutBurger />
        </template>
        <template #main>
            <div>Match</div>
        </template>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from '../components/layouts/LayoutDefault.vue';
import HeaderWithoutBurger from '../components/headers/HeaderWithoutBurger.vue';

export default {
    components: {LayoutDefault, HeaderWithoutBurger}
}
</script>

<style scoped>

</style>