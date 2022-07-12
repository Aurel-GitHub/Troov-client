<template>
  <div>
    <Header />
    <ReportForm mode="create" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import ReportForm from '~/components/layouts/ReportForm.vue';
export default {
  name: 'ReportPage',
  components: { Header, ReportForm },

  methods: {
    submit() {
      console.log('>', this.form);
      alert('form is submit', this.form);
    },
  },
};
</script>

<style></style>
