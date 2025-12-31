<template>
  <LayoutDefault>
    <template #header>
      <HeaderComponent />
    </template>
    <template #main>
      <section class="settings-section">
        <!-- <router-link class="close-button" to="/">Back</router-link> -->
        <h1 class="primary-title settings-title">
          <span class="menu-item-icon settings-icon"></span> SETTINGS
        </h1>
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
            <h2 :style="`background-color: ${color}30`" class="secondary-title">
              THEMES
            </h2>
            <ul>
              <li @click="select(1)" :class="{ selected: selected === 1 }"></li>
              <li @click="select(2)" :class="{ selected: selected === 2 }"></li>
              <li @click="select(3)" :class="{ selected: selected === 3 }"></li>
            </ul>
          </section>
        </div>
      </section>
    </template>
  </LayoutDefault>
</template>

<script>
  import { getColor } from '../mixins/getColor'
  import LayoutDefault from '../components/layouts/LayoutDefault.vue'
  import HeaderComponent from '../components/headers/Header.vue'

  export default {
    mixins: [getColor()],
    components: { LayoutDefault, HeaderComponent },
    data: () => ({
      selected: null
    }),
    methods: {
      select(option) {
        this.selected = option

        if (option === 1) this.color = '#C6FF00'
        else if (option === 2) this.color = '#FA00FF'
        else this.color = '#2D53DA'

        location.reload()
      },
      watchHandler(option) {
        this.selected = option
        this.save()
      },
      save() {
        localStorage.setItem('color', JSON.stringify(this.color))
      }
    },
    watch: {
      color(value) {
        if (value === '#C6FF00') this.watchHandler(1)
        else if (value === '#FA00FF') this.watchHandler(2)
        else this.watchHandler(3)
      }
    },
    created() {
      this.save()
    }
  }
</script>

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
  .settings-section
    .settings-section--articles-container
    .themes-section
    ul
    li {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 800ms;
    cursor: pointer;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.7);
  }
  .settings-section
    .settings-section--articles-container
    .themes-section
    ul
    li.selected {
    box-shadow: 1px 2px 4px rgba(255, 255, 255, 0.7);
  }
  .settings-section
    .settings-section--articles-container
    .themes-section
    ul
    li:nth-child(1) {
    background-color: #c6ff00;
  }
  .settings-section
    .settings-section--articles-container
    .themes-section
    ul
    li:nth-child(2) {
    background-color: #fa00ff;
  }
  .settings-section
    .settings-section--articles-container
    .themes-section
    ul
    li:nth-child(3) {
    background-color: #2d53da;
  }
</style>
