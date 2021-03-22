<template>
  <div id="app">
    <div class="header">
      <div class="logo">Word Keeper</div>
      <div class="menu"><a href="#" v-on:click="showFav=!showFav">{{ showFav ? 'Поиск' : 'В избранное' }}</a></div>
    </div>
    <div class="container">
      <pg-search v-if="showFav===false"></pg-search>
      <pg-favorites v-if="showFav===true"></pg-favorites>
    </div>

  </div>
</template>

<script>
import PgFavorites from "@/components/pgFavorites";
import PgSearch from "@/components/pgSearch";
import "/assets/main.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

export default {
  name: 'App',
  components: {
    PgSearch,
    PgFavorites
  },
  data: function () {
    return {
      showFav: false
    }
  },
}
</script>
