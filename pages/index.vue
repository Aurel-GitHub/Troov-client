<template>
  <div>
    <Header />
    <Jumbotron />
    <ItemSection />
    <Footer />
  </div>
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue';
import Footer from '~/components/Footer.vue';
export default {
  name: 'IndexPage',
  components: { Jumbotron, Footer },
  mounted() {
    this.$store
      .dispatch('getItems')
      .then((response) => {
        this.$store.commit('setItems', response);
        console.log('test >>>>', this.$store.state.items);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('error', error);
        this.$store.commit('setItems', ['error loading']);
        this.$bvToast.toast(
          'Les objets sont momentanément indisponibles, veuillez nous en excuser.',
          {
            title: 'Erreur !',
            variant: 'danger',
            autoHideDelay: 8000,
            solid: true,
          }
        );
      });
  },
};
</script>
