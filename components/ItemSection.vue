<template>
  <b-container fluid="md">
    <b-row class="my-2 justify-content-center">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </b-row>
  </b-container>
</template>

<script>
import ItemCard from './layouts/ItemCard.vue'
export default {
  name: 'ItemSection',
  components: { ItemCard },
}
</script>

<style></style>
