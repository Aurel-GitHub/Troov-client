<template>
  <div>
    <Header />
    <ReportForm mode="update" />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import ReportForm from '~/components/layouts/ReportForm.vue';

export default {
  components: { Header, ReportForm },
};
</script>

<style>
</style>
