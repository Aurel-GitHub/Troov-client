<template>
  <div>
    <Header />
    <ItemSection :item="$store.state.items" />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
export default {
  name: 'IndexPage',
  components: { Footer },
};
</script>
