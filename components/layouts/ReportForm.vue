<template>
  <b-container fluid="xl">
    <div class="my-5">
      <b-alert v-if="$store.state.status !== 'loggedIn'" show variant="danger">
        Veuillez vous connecter pour déclarer un objet perdu
      </b-alert>
      <h3 class="mb-4">Déclarer un objet perdu</h3>

      <b-form-group id="input-group-1" label="Lieu:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.where" type="text" placeholder="Entrez le lieux" required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Catégorie:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.category" type="text" placeholder="Entrez une catégorie" required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Photo:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.photo" type="text" placeholder="Entrez une url pour la photo" required>
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Description:" label-for="input-4">
        <b-form-input id="input-1" v-model="form.description" type="text" placeholder="Entrez le lieux" required>
        </b-form-input>
      </b-form-group>

      <b-button v-if="mode === 'create'" type="submit" :disabled="!formValidator || $store.state.status !== 'loggedIn'"
        @click="createItem()">Enregistrer
      </b-button>
      <b-button v-if="mode === 'update'" variant="outline-primary"
        :disabled="!formValidator || $store.state.status !== 'loggedIn'" @click="updateItem(item._id)">Modifier
      </b-button>
      <b-button v-if="mode === 'update'" variant="danger" @click="deleteItem(item._id, item.userId)">Supprimer
      </b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'ReportForm',
  props: {
    mode: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      form: {
        where: '',
        isLost: true,
        category: '',
        photo: 'https://picsum.photos/200/300',
        description: '',
        userId: '',
      },
      show: true,
      isSubmit: false,
      item: {},
    };
  },
  computed: {
    formValidator() {
      if (this.$store.state.status !== 'loggedIn') {
        return false;
      } else if (
        this.form.where.length === 0 ||
        this.form.category.length === 0 ||
        this.form.description.length === 0 ||
        this.form.photo.length === 0
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    if (this.$store.state.items && this.mode === 'update') {
      const items = this.$store.state.items;
      const itemId = this.$route.params.id;
      this.item = items.find((item) => item._id === itemId);
      this.form = this.item;
    }
  },

  methods: {
    createItem() {
      if (this.form && this.$store.state.user) {
        this.isSubmit = true;
        this.$store
          .dispatch('createItem', {
            userId: this.$store.state.user.userId,
            form: this.form,
            token: this.$store.state.user.token,
          })
          .then((response) => {
            this.$store.commit('setOneItem', response);
            this.isSubmit = false;
            this.$router.push('/');
          })
          .catch((error) => {
            this.isSubmit = false;
            console.log('error', error, this.form);
          });
      }
    },
    updateItem(itemId) {
      if (this.form && this.$store.state.user) {
        this.isSubmit = true;
        this.$store
          .dispatch('updateItem', {
            itemId,
            form: this.form,
            token: this.$store.state.user.token,
          })
          .then((response) => {
            this.$store.commit('updateOneItem', response);
            this.isSubmit = false;
            this.$router.push('/');
          })
          .catch((error) => {
            this.isSubmit = false;
            console.log(error);
          });
      }
    },
    deleteItem(itemId, userId) {
      if (this.$store.state.user.userId === userId) {
        this.$store
          .dispatch('deleteItem', {
            itemId,
            token: this.$store.state.user.token,
          })
          .then(() => {
            this.$store.commit('deleteOneItem', itemId);
            this.$router.push('/');
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>

<style>
</style>
