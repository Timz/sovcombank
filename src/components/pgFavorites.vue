<template>
  <div>
    <div class="left-col">
      <input type="text" v-model="showText">
    </div>
    <div class="right-col">
      <h2>Избранное</h2>
      <draggable handle=".handle" :list="favItemsFiltered" class="list-group" ghost-class="ghost">
        <div class="list-group-item" v-for="item in favItemsFiltered" :key="item.id">
          <row :item="item" :show-remove="true" @removeFavorite="removeFavorite"></row>
        </div>
      </draggable>
    </div>

  </div>
</template>

<script>

import draggable from "vuedraggable";
import favorites from "@/mixins/favorites";
import Row from "@/components/row";

export default {
  name: "pgFavorites",
  components: {
    Row,
    draggable
  },
  mixins: [favorites],
  data: function () {
    return {
      showText: '',
      expandRowIndex: -1
    }
  },
  computed: {
    favItemsFiltered: {
      get: function () {
        const _self = this
        if (this.showText) {
          return this.favItems.filter(item => {
            return item.label.indexOf(_self.showText) !== -1
          })
        } else {
          return this.favItems
        }

      }
    }
  }

}
</script>
