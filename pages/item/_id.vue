<template>
  <div>
    <Header />
    <ReportForm :mode="update" :item="item" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import ReportForm from '~/components/layouts/ReportForm.vue';
export default {
  components: { Header, ReportForm },
  data() {
    return {
      item: {},
    };
  },
  mounted() {
    if (!this.$store.state.items) {
      this.$router.push('/');
    } else {
      const items = this.$store.state.items;
      const itemId = this.$route.params.id;
      this.item = items.find((item) => item._id === itemId);
    }
  },
};
</script>

<style></style>
