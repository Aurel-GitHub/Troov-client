<template>
  <div>
    <Header />
    <Jumbotron />
    <ItemSection :item="$store.state.items" />
    <Footer />
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue';
import Footer from '~/components/Footer.vue';
export default {
  name: 'IndexPage',
  components: { Jumbotron, Footer },
};
</script>
