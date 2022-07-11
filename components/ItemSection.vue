<template>
  <b-container fluid="md">
    <b-row
      v-if="!isLoading && data?.length > 0"
      class="mt-2 mb-5 justify-content-center"
    >
      <div v-for="item in data" :key="item._id">
        <ItemCard :item="item" />
      </div>
    </b-row>
    <b-row v-else class="mt-2 mb-5 justify-content-center">
      <b-spinner
        style="width: 5rem; height: 5rem"
        label="Large Spinner"
      ></b-spinner
    ></b-row>
  </b-container>
</template>

<script>
import ItemCard from './layouts/ItemCard.vue';
export default {
  name: 'ItemSection',
  components: { ItemCard },
  data() {
    return {
      data: [],
      isLoading: false,
    };
  },
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.isLoading = true;
      this.$store
        .dispatch('getItems')
        .then((response) => {
          this.data = response;
          this.$store.commit('setItems', response);
          this.isLoading = false;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('error', error);
          this.$store.commit('setItems', ['error loading']);
        });
    },
  },

  // mounted() {
  //   this.$store
  //     .dispatch('getItems')
  //     .then((response) => {
  //       this.$store.commit('setItems', response);
  //     })
  //     .catch((error) => {
  //       // eslint-disable-next-line no-console
  //       console.log('error', error);
  //       this.$store.commit('setItems', ['error loading']);
  //     });
  // },
};
</script>

<style></style>
