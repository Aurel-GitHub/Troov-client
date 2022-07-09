<template>
  <b-container fluid="lg" class="my-2">
    <div class="justify-content-center">
      <b-jumbotron
        header="Un objet perdu se transforme souvent en objet trouvé !"
      >
        <p>
          Vous avez perdu ou trouvé un objet ? Déclarez-le et la communauté se
          mobilise pour vous aider à le retrouver.
        </p>
        <b-button variant="outline-primary" to="/report">Déclarer</b-button>
      </b-jumbotron>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'JumbotronComponent',
}
</script>

<style></style>
