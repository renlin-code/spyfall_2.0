<template>
    <section class="settings-section">
        <!-- <router-link class="close-button" to="/">Back</router-link> -->
        <h1 class="primary-title settings-title"><span class="menu-item-icon settings-icon"></span> SETTINGS</h1>
        <div class="settings-section--articles-container">
            <!-- <section class="languages-section">
                <h2 class="secondary-title">LANGUAGES</h2>
                <ul>
                    <li><input checked name="language" type="radio" id="enLangButton" style="display: none;"> <label for="enLangButton">English</label></li>
                    <li><input name="language" type="radio" id="esLangButton" style="display: none;"> <label for="esLangButton">Español</label></li>
                    <li><input name="language" type="radio" id="ruLangButton" style="display: none;"> <label for="ruLangButton">Русский</label></li>
                </ul>
            </section> -->
            <section class="themes-section">
                <h2 class="secondary-title">THEMES</h2>
                <ul>
                    <li><input checked name="theme" type="radio" id="greenThemeButton" style="display: none;"><label for="greenThemeButton"></label></li>
                    <li><input name="theme" type="radio" id="pinkThemeButton" style="display: none;"><label for="pinkThemeButton"></label></li>
                    <li><input name="theme" type="radio" id="blueThemeButton" style="display: none;"><label for="blueThemeButton"></label></li>
                </ul>
            </section>
        </div>
    </section>
</template>

<style scoped>
.settings-section {
    width: 100%;
    max-width: 450px;
    height: calc(100vh - 140px);
    background-color: var(--white-color);
    position: absolute;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    transition: all 800ms;
}
.settings-section .settings-section--articles-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin-top: 50px;
}
.settings-section .settings-section--articles-container .languages-section ul {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 10px;
}
.settings-section .settings-section--articles-container .languages-section ul li label {
    font-size: 1.6rem;
    padding: 0;
    background: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
}
.settings-section .settings-section--articles-container .languages-section ul li input:checked+label {
    border-bottom: 3px solid rgba(0, 0, 0, 0.5);
}
.settings-section .settings-section--articles-container .themes-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.settings-section .settings-section--articles-container .themes-section ul {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 14px;
}
.settings-section .settings-section--articles-container .themes-section ul li label {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 800ms;
    cursor: pointer;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
}
.settings-section .settings-section--articles-container .themes-section ul li input:checked+label {
    box-shadow: 1px 2px 4px rgba(255, 255, 255, 0.7);
}
.settings-section .settings-section--articles-container .themes-section ul li:nth-child(1) label {
    background-color: #C6FF00;
}
.settings-section .settings-section--articles-container .themes-section ul li:nth-child(2) label {
    background-color: #FA00FF;
}
.settings-section .settings-section--articles-container .themes-section ul li:nth-child(3) label {
    background-color: #2D53DA;
}
</style>