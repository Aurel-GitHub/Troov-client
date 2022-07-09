<template>
  <b-container fluid="xl">
    <div class="my-5">
      <b-form @submit="onSubmit">
        <h3 v-if="mode === 'login'" class="mb-4">Login form</h3>
        <h3 v-else class="mb-4">Register form</h3>

        <b-form-group
          v-if="mode === 'register'"
          id="input-group-1"
          label="Prénom:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.firstname"
            type="text"
            placeholder="Entrez votre prénom"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          v-if="mode === 'register'"
          id="input-group-2"
          label="Nom:"
          label-for="input-2"
        >
          <b-form-input
            id="input-1"
            v-model="form.lastname"
            type="text"
            placeholder="Entrez votre nom"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Adresse email:"
          label-for="input-1"
          valid-feedback="email incorrect"
          :invalid-feedback="invalidFeedbackEmail"
          :state="stateEmail"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Entrez votre adresse email"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Password:"
          label-for="input-2"
          valid-feedback="mot de passe incorrect"
          :invalid-feedback="invalidFeedbackPassword"
          :state="statePassword"
        >
          <b-form-input
            id="input-1"
            v-model="form.password"
            type="password"
            placeholder="Entrez votre mot de passe"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-button
          v-if="mode === 'login'"
          type="submit"
          :disabled="!stateEmail || !statePassword"
          >Connexion</b-button
        >
        <b-button
          v-else
          type="submit"
          :disabled="!stateEmail || !statePassword || !createAccountFieldsValid"
          @click="createAccount"
          >Créer un compte</b-button
        >

        <small v-if="mode === 'login'" class="ml-3" @click="switchToRegister()">
          Vous n'avez pas encore de compte ?
          <span role="button" class="underline">
            Cliquer ici pour vous inscrire.
          </span>
        </small>
        <small v-else class="ml-3" role="button" @click="switchToLogin()">
          Vous avez déjà un compte ?
          <span role="button" class="underline">
            Cliquer ici pour vous connecter.
          </span>
        </small>
      </b-form>
    </div>
    <!-- <h1>{{ $store.state.users }}</h1> -->
  </b-container>
</template>

<script>
export default {
  name: 'LoginForm',

  data() {
    return {
      mode: 'login',
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      },
      show: true,
    };
  },
  computed: {
    stateEmail() {
      return this.form.email.includes('@');
    },
    invalidFeedbackEmail() {
      if (!this.form.email.includes('@') && this.form.email) {
        return 'Email incorrect';
      } else {
        return '';
      }
    },
    createAccountFieldsValid() {
      if (this.mode === 'register') {
        if (
          this.form.firstname.length === 0 ||
          this.form.lastname.length === 0
        ) {
          return false;
        }
        return true;
      } else {
        return true;
      }
    },
    statePassword() {
      return this.form.password.length >= 4;
    },
    invalidFeedbackPassword() {
      if (this.form.password.length > 0) {
        return 'Entrez un mot de passe contenant plus de 4 caractères.';
      } else {
        return '';
      }
    },
  },
  methods: {
    switchToRegister() {
      this.mode = 'register';
    },
    switchToLogin() {
      this.mode = 'login';
    },
    createAccount() {
      if (this.form) {
        // this.$store.commit('ADD_USER', this.form);
        this.$store.dispatch('createUser', this.form);
      }
      console.log('this.store', this.$store.state.users);
    },
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
    },
  },
};
</script>

<style>
small .underline {
  text-decoration: underline;
  color: blue;
}
</style>
