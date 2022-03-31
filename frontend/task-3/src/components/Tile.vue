<template>
  <img class='tiles-block__img' :src="item.image && item.image || defaultAvatar"/>
  <h3 class='tiles-block__name'>{{ item.name }}</h3>
  <div v-if="item.house" class='tiles-block__faculty-container'>
    <div class='tiles-block__faculty-container__red-square'></div>
    <h4 class='tiles-block__faculty-container__faculty'>{{ item.house }}</h4>
  </div>
  <div v-if="item.dateOfBirth" class='tiles-block__birthday-container'>
    <img class='tiles-block__birthday-container__birthday-cake-img'
         src='./../assets/img/icon-birthday-cake.svg'/>
    <h4 class='tiles-block__birthday-container__birthday'>{{ item.dateOfBirth }}</h4>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import defaultAvatar from './../assets/img/defaultAvatar.webp';

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => {
      }
    },
  },

  setup() {
    return { defaultAvatar }
  }
})
</script>

<style scoped lang="scss">
</style>
