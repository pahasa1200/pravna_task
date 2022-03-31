<template>
  <div class="home">
    <PulseLoader style="text-align: center; height: 100%" :loading="isLoading" size="50px" />
    <section v-if="!isLoading" class="main-block__container">
      <h1 class="main-block__title">HP Character Browser</h1>
      <h6 class="main-block__sub-title">Meet the characters the HP novel</h6>

      <div class="inputs-block">
        <input
            :class="{ red_focus: nameSearch.length < 3 && nameSearch.length > 0 }"
            name="filter"
            placeholder="Wyszukaj po imieniu i nazwisku" v-model="nameSearch"
            @change="saveInLocalStorage('nameSearch', nameSearch)"/>
        <select
            class="inputs-block__select-faculty"
            v-model="typesSelect"
            @change="saveInLocalStorage('typesSelect', typesSelect)">
          <option selected>Wszystkie postaci</option>
          <option v-for="item in 2" :key="item">{{ Object.values(characterTypes)[item - 1] }}</option>
        </select>
        <select
            v-model="housesSelect"
            class="inputs-block__select-houses"
            @change="saveInLocalStorage('housesSelect', housesSelect)">
          <option selected>Wszystkie domy</option>
          <option v-for="item in 4" :key="item">{{ Object.values(houses)[item - 1] }}</option>
        </select>
        <button class="inputs-block__search-button">
          <img src="./../assets/img/icon-search.svg"/>
        </button>
        <button class="inputs-block__clear-button" @click="resetFilters">
          <img src="./../assets/img/icon-clear.svg"/>
        </button>
      </div>

      <p class="main-block__result-text">Wyniki wyszukiwania ({{ actualArray?.length }})</p>
      <Tiles :actual-array="actualArray"/>
    </section>
  </div>
</template>

<script>
import {defineComponent, ref, watchEffect} from "vue";
import {API} from "@/api";
import Tiles from "@/components/Tiles";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default defineComponent({
  components: {Tiles, PulseLoader},
  setup() {
    const charactersArray = ref()
    const housesSelect = ref('Wszystkie domy')
    const typesSelect = ref('Wszystkie postaci')
    const nameSearch = ref('')
    const actualArray = ref()
    const isLoading = ref(false)

    const houses = ref({
      gryffindor: 'Gryffindor',
      hufflepuff: 'Hufflepuff',
      ravenclaw: 'Ravenclaw',
      slytherin: 'Slytherin',
    })

    const characterTypes = ref({
      students: 'Tylko uczniowie',
      stuff: 'Tylko kadra nauczycielska',
    })

    watchEffect(() => {
          actualArray.value = charactersArray.value
          if (housesSelect.value !== 'Wszystkie domy') {
            filterByHouseSelect(housesSelect)
          }
          if (typesSelect.value !== 'Wszystkie postaci') {
            filterByTypeSelect(typesSelect)
          }
          if (nameSearch.value !== '' && nameSearch.value.length > 2) {
            filterBySearchInput(nameSearch)
          }
        }
    )

    const filterBySearchInput = (nameSearch) => {
      actualArray.value = actualArray.value.filter((character) => {
        return character.name.includes(nameSearch.value)
      })
    }

    const filterByTypeSelect = (typesSelect) => {
      actualArray.value = actualArray.value.filter((character) => {
        if (typesSelect.value === 'Tylko kadra nauczycielska') {
          return character.hogwartsStaff
        } else if (typesSelect.value === 'Tylko uczniowie') {
          return character.hogwartsStudent
        }
      })
    }

    const filterByHouseSelect = (housesSelect) => {
      actualArray.value = actualArray.value.filter((character) => {
        return character.house.includes(housesSelect.value)
      })
    }

    const resetFilters = () => {
      housesSelect.value = 'Wszystkie domy'
      typesSelect.value = 'Wszystkie postaci'
      nameSearch.value = ''
    }

    const saveInLocalStorage = (name, value) => {
      localStorage.setItem(name, value)
    }

    const loadFromLocalStorage = () => {
      if (localStorage.housesSelect) {
        housesSelect.value = localStorage.housesSelect
      }
      if (localStorage.typesSelect) {
        typesSelect.value = localStorage.typesSelect
      }
      if (localStorage.nameSearch) {
        nameSearch.value = localStorage.nameSearch
      }
    }

    const load = async () => {
      isLoading.value = true
      charactersArray.value = await API.getAllCharacters()
      charactersArray.value = charactersArray.value.sort((prev, next) => {
        if (prev.name < next.name) return -1;
        if (prev.name < next.name) return 1;
      });
      loadFromLocalStorage()
      isLoading.value = false
    }

    load()
    return {
      charactersArray,
      houses,
      characterTypes,
      housesSelect,
      typesSelect,
      nameSearch,
      actualArray,
      PulseLoader,
      isLoading,

      filterBySearchInput,
      resetFilters,
      saveInLocalStorage
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
}
</style>
