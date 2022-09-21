<template>
    <div class="popup--layer">
        <div class="popup">
            <p>Are you sure you want to finish the game?</p>
            <div class="popup--buttons-container">
                <button @click="resetMatch()" class="popup--button">
                    <span class="popup--icon">
                        <svg width="100%" height="100%" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7L7 13L17 1" stroke="#C6FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    Yes
                </button>
                <button @click="$emit('closePopUp')" class="popup--button">
                    <span class="popup--icon">
                        <svg width="100%" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 13L1 1M13 1L1 13" stroke="#EF5B5B" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </span>
                    No
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        resetMatch() {
            sessionStorage.setItem("stage", JSON.stringify(1));
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.popup--layer {
    display: grid;
    place-content: center;
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    position: absolute;
    left: 0;
    top: 0;
    transition: all 800ms;
    z-index: 1;
    /* transform: scale(0); */
    transition: all 300ms;
}
.popup--layer .popup {
    display: grid;
    place-content: center;
    width: 260px;
    height: 200px;
    border-radius: 10px;
    background: #f7f7f7;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.popup--layer .popup p {
    font-size: 1.6rem;
    text-align: center;
}
.popup--layer .popup .popup--buttons-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin: 30px auto 0;
}
.popup--layer .popup .popup--button {
    color: var(--black-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    width: auto;
    font-size: 1.6rem;
    text-align: center;
    border: none;
    cursor: pointer;
    background: rgba(0, 0, 0, 0);
}
.popup--layer .popup .popup--button a {
    color: var(--black-color);
    font-size: 1.6rem;
}
.popup--layer .popup .popup--icon {
    display: inline-block;
    width: 12px;
    height: 12px;
}

</style>