<template>
  <div>
    <div class="title-item" v-on:click="isExpand=!isExpand">
      <i class="fa fa-align-justify handle"></i>
      <strong>{{ item.label }}</strong>
    </div>
    <div :class="isExpand===true ? 'descr-item' : 'descr-item hide-full'">
      {{ item.label }} {{ item.label }} {{ item.label }} {{ item.label }} {{ item.label }} {{ item.label }}
    </div>
    <div class="action-item">
      <i v-if="showRemove===true" class="far fa-trash-alt" v-on:click="$emit('removeFavorite', item.id)"></i>
      <i v-if="showAdd===true&& item.isFav!==1" class="far fa-star" v-on:click="$emit('addFavorite', item)"></i>
      <i v-if="showAdd===true&& item.isFav!==0" class="fa fa-star"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "row",
  props: {
    item: Object,
    showRemove: Boolean,
    showAdd: Boolean
  },
  data: function () {
    return {
      isExpand: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
