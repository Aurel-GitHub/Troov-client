<template>
  <b-card
    :title="item.where"
    :img-src="item.photo"
    :img-alt="item.category"
    img-height="100%"
    img-width="100%"
    img-top
    tag="article"
    style="max-width: 20rem; padding-top: 1rem"
    class="col-md-5 my-3 mx-4"
  >
    <b-card-text style="max-width: 10rem; height: 8rem; max-height: 8rem">
      {{ item.description }}
    </b-card-text>

    <!-- <b-button variant="primary" @click="detail(item._id)">Détails</b-button> -->
  </b-card>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: Object,
  },
  data() {
    return {
      title: this.item.category,
      image: this.item.photo,
    };
  },
  methods: {
    detail(itemId) {
      this.$router.push(`/item/${itemId}`);
    },
  },
};
</script>

<style></style>
