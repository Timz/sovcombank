<template>
  <div>
    <div class="left-col">
      <input type="text" v-model="showText" v-debounce:1000ms="getItems">
    </div>
    <div class="right-col">
      <h2>Поиск значений</h2>
      <p v-if="showText.length===0">Введите значения в строке поиска</p>
      <div class="list-group">
        <div class="list-group-item" v-for="item in items" :key="item.id">
          <row :item="item" :show-add="true" @addFavorite="addFavorite"></row>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import favorites from "@/mixins/favorites";
import Row from "@/components/row";

export default {
  name: "pgSearch",
  components: {
    Row
  },
  mixins: [favorites],
  data: function () {
    return {
      showFav: false,
      showText: '',
      items: []
    }
  },
  methods: {
    getItems: function () {
      if (this.showText && this.showText.length > 2) {
        // проксируем запросы на od-api.oxforddictionaries.com в vue.config.js тк у них запрещен cors
        axios.get('http://localhost:8080/proxyapi/en?q=hel&prefix=true&limit=10').then((response) => {
          if (response.data.results) {
            const _self = this
            this.items = response.data.results.map((item) => ({
              id: item.id,
              label: item.label,
              isFav: _self.findInFavorite(item.id) ? 1 : 0
            }))
          } else {
            console.warn(response)
          }
        })
      }
    }
  }
}
</script>
