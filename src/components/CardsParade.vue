<template>
    <section class="showing-cards-section">
        <h1 class="primary-title player-numb">PLAYER {{ currentPlayer }}</h1>
        <div @click="revealCard" :class="{'card-container--rotated': rotateCard}" class="card-container">
            <div class="card-side card-back"
            :style="{'backgroundImage': `url(${currentCardJSON.url})`}"
            >
            </div>
            <div class="card-side card-front"
            :style="`
                background: -moz-linear-gradient(45deg, rgba(56,55,55,1) 25%, ${color} 75%);
                background: -webkit-linear-gradient(45deg, rgba(56,55,55,1) 25%, ${color} 75%);
                background: linear-gradient(45deg, rgba(56,55,55,1) 25%, ${color} 75%);
            `">
                REVEAL
            </div>
        </div>
        <p v-if="locations.length !== 0" :class="{'subject-name--visible' : showRole}" class="primary-text subject-name">{{ currentCardJSON.name.toUpperCase() }}</p>
        <transition name="view">
            <button v-if="showRole" @click="nextCard" class="primary-button">GOT IT</button>    
        </transition>
    </section>
</template>

<script>
import { getColor } from "../mixins/getColor";
import { fetchLocations } from '../mixins/fetchLocations';

export default {
    mixins: [getColor(), fetchLocations()],
    data: () => ({
        spyJSON: {
            "id": "-",
            "name": "you are spy!",
            "url": "https://imgur.com/R8Po6Yw.png"
        },

        currentCardJSON: {
            type: Object,
            default: {
                "id": "",
                "name": "",
                "url": ""
            }
        },

        currentPlayer: "1",

        rotateCard: false,
        showRole: false
    }),
    methods: {
        revealCard() {
            this.rotateCard = true;
            setTimeout(() => {
                this.showRole = true;
            }, 800)
        },
        nextCard() {
            if (this.currentPlayer < this.matchRoles.length) {
                this.showRole = false;
                this.rotateCard = false;
                setTimeout(() => {
                    this.currentCardJSON = this.matchRoles[this.currentPlayer]
                    this.currentPlayer++;
                }, 800)
            } else {
                this.$emit("closeParade");
            }
        }
    },
    watch: {
        locations(value) {
            if(value.length !== 0) {
                this.currentCardJSON = this.matchRoles[0];
            }
        }
    },
    computed: {
        matchLocation() {
            const locationIndex = Math.floor(Math.random()*this.locations.length);
            return this.locations[locationIndex];
        },
        matchRoles() {
            let roles = [];
            let noSpies = JSON.parse(sessionStorage.getItem("playersNoSpiesAmount"));
            let spies = JSON.parse(sessionStorage.getItem("spiesAmount"));
            let total = noSpies + spies;

            for (let i = 0; i < total; i++) {

                switch (true) {
                    case spies > 0 && noSpies > 0:
                        const role = Math.floor(Math.random()*2);
                        if (role === 0) {
                            roles.push(this.spyJSON);
                            spies--;
                        } else {
                            roles.push(this.matchLocation);
                            noSpies--;
                        }
                        break;

                    case spies === 0 && noSpies > 0:
                            roles.push(this.matchLocation);
                            noSpies--;
                        break;

                    case noSpies === 0 && spies > 0:
                            roles.push(this.spyJSON);
                            spies--;
                        break;
                }
            }
            return roles;
        }
    },

}
</script>
<style scoped>
.showing-cards-section {
    display: flex;
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: var(--white-color);
    position: absolute;
    left: 0;
    top: 0;
}
.showing-cards-section .player-numb {
    margin-top: 80px;
    transition: all 800ms;
}
.showing-cards-section .card-container {
    position: relative;
    width: 240px;
    height: 240px;
    border-radius: 5px;
    transform-style: preserve-3d;
    transition: all 1000ms;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.showing-cards-section .card-container--rotated {
    transform: rotateY(180deg) !important;
}

.showing-cards-section .card-container .card-side {
    position: absolute;
    width: 240px;
    height: 240px;
    border-radius: 5px;
}
.showing-cards-section .card-container .card-front {
    display: grid;
    place-content: center;
    color: var(--white-color);
    font-size: 18px;
    font-weight: bold;
}
.showing-cards-section .card-container .card-back {
    background-color: var(--dark-gray);
    transform: rotateY(180deg);
    transition: all 1000ms;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

}
.showing-cards-section .subject-name {
    margin-top: 20px;
    transition: all 800ms;
    opacity: 0;
}
.showing-cards-section .subject-name--visible {
    opacity: 1 !important;
}
.showing-cards-section .primary-button {
    width: 40%;
    transition: all 800ms;
}
</style>