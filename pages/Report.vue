<template>
  <div>
    <Header />
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

        <b-form-group
          id="input-group-4"
          label="Description:"
          label-for="input-4"
        >
          <b-form-input
            id="input-1"
            v-model="form.description"
            type="text"
            placeholder="Entrez le lieux"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-button type="submit" @click="submit()">Connexion </b-button>
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
export default {
  name: 'ReportPage',
  components: { Header },
  data() {
    return {
      mode: '',
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
  methods: {
    submit() {
      console.log('>', this.form);
      alert('form is submit', this.form);
    },
    isConnected() {
      if (this.$store.state.users) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
