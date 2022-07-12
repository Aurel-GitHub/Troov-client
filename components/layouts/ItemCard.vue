<template>
  <div>
    <b-card
      :title="item.where"
      :img-src="item.photo"
      :img-alt="item.category"
      img-height="100%"
      img-width="100%"
      img-top
      tag="article"
      style="max-width: 16rem; width: 16rem; padding-top: 1rem"
      class="col-md-5 my-3 mx-5"
    >
      <b-card-text style="max-width: 10rem; height: 8rem; max-height: 8rem">
        {{ item.description }}
      </b-card-text>
      <div
        v-if="isUserAccess()"
        class="d-flex flex-col justify-content-between"
      >
        <b-button size="sm" variant="outline-primary" :to="`/item/${item._id}`"
          >Modifier</b-button
        >
        <b-button
          size="sm"
          variant="danger"
          @click="deleteItem(item._id, item.userId)"
          >Supprimer</b-button
        >
      </div>
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
    deleteItem(itemId, userId) {
      if (this.$store.state.user.userId === userId) {
        this.$store
          .dispatch('deleteItem', {
            itemId,
            token: this.$store.state.user.token,
          })
          .then((res) => {
            console.log('res', res);
            this.$store.commit('deleteOneItem', itemId);
          })
          .catch((error) => console.log(error));
      }
    },
    updateItem(itemId) {
      this.$router.push(`/item/${itemId}`);
    },
    isUserAccess() {
      if (this.$store.state.user) {
        return this.$store.state.user.userId === this.item.userId;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
