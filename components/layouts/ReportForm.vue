<template>
  <b-container fluid="xl">
    <div class="my-5">
      <b-alert v-if="$store.state.status !== 'loggedIn'" show variant="danger"
        >Veuillez vous connecter pour déclarer un objet perdu</b-alert
      >
      <h3 class="mb-4">Déclarer un objet perdu</h3>

      <b-form-group id="input-group-1" label="Lieu:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.where"
          type="text"
          placeholder="Entrez le lieux"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Catégorie:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.category"
          type="text"
          placeholder="Entrez une catégorie"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Photo:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.photo"
          type="text"
          placeholder="Entrez une url pour la photo"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Description:" label-for="input-4">
        <b-form-input
          id="input-1"
          v-model="form.description"
          type="text"
          placeholder="Entrez le lieux"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        :disabled="!formValidator || $store.state.status !== 'loggedIn'"
        @click="submit()"
        >Connexion
      </b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'ReportForm',
  data() {
    return {
      form: {
        where: '',
        isLost: true,
        category: '',
        photo: '',
        description: '',
      },
      show: true,
    };
  },
  computed: {
    formValidator() {
      if (this.$store.state.status !== 'loggedIn') {
        console.log('step0');
        return false;
      } else if (
        this.form.where.length === 0 ||
        this.form.category.length === 0 ||
        this.form.description.length === 0 ||
        this.form.photo.length === 0
      ) {
        console.log('step1');
        return false;
      } else {
        console.log('step2');
        return true;
      }
    },
  },
};
</script>

<style></style>
