<template>
  <div id="tiles-block" class="tiles-block">
    <div class="tiles-block__container">
      <div v-for="item in actualArray" :key="item" class='tiles-block__card'>
        <Tile :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import Tile from "@/components/Tile";

export default defineComponent({
  components: {Tile},
  props: {
    actualArray: {
      type: Object,
      default: () => {}
    },
  },
})
</script>

<style scoped lang="scss">
</style>
