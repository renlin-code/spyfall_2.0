<template>
    <div>
        <h6 class="locations-title">Locations</h6>
        <div class="locations-wrapper">
            <div v-for="item in locations" class="location-card" :key="item.id">
                <figure class="location-card__figure">
                    <img :src="item.url" alt="location" class="location-card--image">
                    <div class="location-card__loading-layer"></div>
                </figure>
                <p class="location-card--name">{{ item.name.toUpperCase() }}</p>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data: () => ({
        locations: [
            {
                "id": 1,
                "name": "circus",
                "url": "https://imgur.com/k5aba5j.png"
            },
            {
                "id": 2,
                "name": "space station",
                "url": "https://imgur.com/fPaugYh.png"
            },
            {
                "id": 3,
                "name": "north pole",
                "url": "https://imgur.com/dNg3n7Y.png"
            },
            {
                "id": 4,
                "name": "police station",
                "url": "https://imgur.com/3nJaB4A.png"
            },
            {
                "id": 5,
                "name": "mountain peak",
                "url": "https://imgur.com/kTNvyNv.png"
            },
            {
                "id": 6,
                "name": "desert island",
                "url": "https://imgur.com/62aGvcI.png"
            },
            {
                "id": 7,
                "name": "conference",
                "url": "https://imgur.com/znwS4AU.png"
            },
            {
                "id": 8,
                "name": "spa salon",
                "url": "https://imgur.com/6Z8WsGr.png"
            },
            {
                "id": 9,
                "name": "swimming pool",
                "url": "https://imgur.com/lbOCxKU.png"
            },
            {
                "id": 10,
                "name": "submarine",
                "url": "https://imgur.com/n4lJwKS.png"
            },
            {
                "id": 11,
                "name": "casino",
                "url": "https://imgur.com/dnFqN91.png"
            },
            {
                "id": 12,
                "name": "aircraft",
                "url": "https://imgur.com/HG4ngaY.png"
            },
            {
                "id": 13,
                "name": "school",
                "url": "https://imgur.com/ItgeHwB.png"
            },                   
            {
                "id": 14,
                "name": "pirate ship",
                "url": "https://imgur.com/0qUlXv0.png"
            },
            {
                "id": 15,
                "name": "graveyard",
                "url": "https://imgur.com/XBzeArD.png"
            },
            {
                "id": 16,
                "name": "camping",
                "url": "https://imgur.com/EUySLwS.png"
            }        
        ]
    })
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
    background-color: var(--secondary-color);
    margin: 6px auto 6px;
    padding: 2px auto;
    border-radius: 4px;
}


</style>