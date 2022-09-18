<template>
    <div class="popup--layer">
        <div class="popup">
            <p>Are you sure you want to finish the game?</p>
            <div class="popup--buttons-container">
                <button class="popup--button"><span class="popup--icon yes-icon"></span>Yes</button>
                <button class="popup--button"><span class="popup--icon no-icon"></span>No</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup--layer {
    display: none;
    place-content: center;
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    position: absolute;
    left: 0;
    top: 0;
    transition: all 800ms;
    z-index: 3;
    opacity: 1;
    transform: scale(0);
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
.popup--layer .popup .popup--icon {
    display: inline-block;
    width: 12px;
    height: 12px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
.popup--layer .popup .yes-icon {
    background-image: url("../assets/icons/yes.svg");
}
.popup--layer .popup .no-icon {
    background-image: url("../assets/icons/no.svg");
}

</style>