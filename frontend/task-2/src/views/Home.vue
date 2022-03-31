<template>
  <div class="home">
    <section class="main-block__container">
      <h1 class="main-block__title">HP Character Browser</h1>
      <h6 class="main-block__sub-title">Meet the characters the HP novel</h6>
      <div class="inputs-block">
        <input name="filter" placeholder="Wyszukaj po imieniu i nazwisku"/>
        <select class="inputs-block__select-faculty">
          <option disabled style="display: none;" selected>Wszystkie postaci</option>
          <option>Test</option>
        </select>
        <select class="inputs-block__select-houses">
          <option disabled style="display: none;" selected>Wszystkie domy</option>
          <option>Test</option>
        </select>
        <button class="inputs-block__search-button"><img src="./../assets/img/icon-search.svg"/></button>
        <button class="inputs-block__clear-button"><img src="./../assets/img/icon-clear.svg"/></button>
      </div>
      <p class="main-block__result-text">Wyniki wyszukiwania (32)</p>
      <div id="tiles-block" class="tiles-block">
        <div class="tiles-block__container">
          <div v-for="item in 12" :key="item" class='tiles-block__card'>
            <div class='tiles-block__img'></div>
            <h3 class='tiles-block__name'>Hermiona Granger</h3>
            <div class='tiles-block__faculty-container'>
              <div class='tiles-block__faculty-container__red-square'></div>
              <h4 class='tiles-block__faculty-container__faculty'>Gryffindor</h4>
            </div>
            <div class='tiles-block__birthday-container'>
              <img class='tiles-block__birthday-container__birthday-cake-img'
                   src='./../assets/img/icon-birthday-cake.svg'/>
              <h4 class='tiles-block__birthday-container__birthday'>27.05.1992</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
