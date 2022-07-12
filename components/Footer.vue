<template>
  <footer>
    <p class="ml-4">© 2022 Troov Test</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
footer {
  display: flex;
  position: fixed;
  justify-content: center;
  height: 30px;
  bottom: 0;
  left: 0;
  background-color: #17a2b8;
  color: #fff;
  width: 100%;
}
</style>
