<template>
  <div>
    <Header />
    <LoginForm />
    <Footer />
  </div>
</template>

<script>
import LoginForm from '~/components/layouts/LoginForm.vue'

export default {
  name: 'SignUpPage',
  components: { LoginForm },
}
</script>

<style>
</style>
