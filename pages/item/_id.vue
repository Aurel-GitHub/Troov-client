<template>
  <div>
    <Header />
    <h1>{{ item }}</h1>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
export default {
  name: 'ItemDetail',
  components: { Header },
  props: {
    item: Object,
  },
};
</script>

<style></style>
