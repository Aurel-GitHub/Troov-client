<template>
  <b-card
    :title="item.where"
    :img-src="item.photo"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="col-md-7 my-3 mx-3"
  >
    <b-card-text>
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
