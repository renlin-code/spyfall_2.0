<template>
    <div>
        <h6 class="locations-title">Locations</h6>
        <div class="locations-wrapper">
            <div v-for="item in locations" class="location-card" :key="item.id">
                <figure class="location-card__figure">
                    <img :src="item.url" alt="location" class="location-card--image">
                    <div class="location-card__loading-layer"></div>
                </figure>
                <p :style="`background-color: ${color}30`" class="location-card--name">{{ item.name.toUpperCase() }}</p>
            </div>
        </div>    
    </div>
</template>

<script>
import { getColor } from "../mixins/getColor";
import { fetchLocations } from "../mixins/fetchLocations";

export default {
    mixins: [fetchLocations(), getColor()]
}
</script>

<style scoped>
.locations-title {
    position: absolute;
    top: 10px;
    left: 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    position: absolute;
}
.locations-wrapper {
    width: 100%;
    height: calc(100vh - 160px);
    overflow-y: scroll;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 10px; 
}
.locations-wrapper .location-card {
    width: 135px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.locations-wrapper .location-card .location-card__figure {
    width: 135px;
    height: 135px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    z-index: 0;
}
.locations-wrapper .location-card .location-card--image {
    width: 100%;
    height: 100%;
}
.location-card__loading-layer {
    z-index: -1;
    position: absolute;
    width: 270px;
    height: 270px;
    background: linear-gradient(to bottom right, rgba(90,90,90,1) 25%, rgba(207,207,207,1) 50%, rgba(90,90,90,1) 75%);
    animation-name: loading;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
}
    @keyframes loading {
        0%, 100% {
            top: 0;
            left: 0;
        }

        50% {
            top: -135px;
            left: -135px;
        }
    }
.locations-wrapper .location-card .location-card--name {
    display: inline-block;
    width: 80%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: semi-bold;
    margin: 6px auto 6px;
    padding: 2px auto;
    border-radius: 4px;
}


</style>