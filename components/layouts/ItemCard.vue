<template>
  <div>
    <b-card :title="item.where" :img-src="item.photo" :img-alt="item.category" img-height="100%" img-width="100%"
      img-top tag="article" style="max-width: 16rem; width: 16rem; padding-top: 1rem" class="col-md-5 my-3 mx-5">
      <b-card-text style="max-width: 10rem; height: 8rem; max-height: 8rem">
        {{ item.description }}
      </b-card-text>
      <b-button v-if="isUserAccess()" variant="outline-primary" :to="`/item/${item._id}`">Editer</b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      title: this.item.category,
      image: this.item.photo,
    };
  },
  methods: {
    redirectToForm(itemId) {
      this.$router.push(`/item/${itemId}`);
    },
    isUserAccess() {
      if (this.$store.state.user && this.$store.state.status === 'loggedIn') {
        return this.$store.state.user.userId === this.item.userId;
      } else {
        return false;
      }
    },
  }
};
</script>

<style>
</style>
