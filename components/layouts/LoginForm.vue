<template>
  <b-container fluid="xl">
    <div class="my-5">
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
        valid-feedback="email correct"
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
        valid-feedback="mot de passe correct"
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

      <h5 v-if="mode === 'login' && $store.state.status === 'error_login'">
        Adresse mail et/ou mot de passe invalide
      </h5>

      <b-button
        v-if="mode === 'login'"
        type="submit"
        :disabled="!stateEmail || !statePassword"
        @click="login()"
        >Connexion

        <span v-if="$store.state.status === 'loading'">
          <b-spinner small type="grow"></b-spinner>
        </span>
      </b-button>
      <b-button
        v-else
        type="submit"
        :disabled="!stateEmail || !statePassword || !createAccountFieldsValid"
        @click="createAccount"
        >Créer un compte
        <span v-if="$store.state.status == 'loading'">
          <b-spinner small type="grow"></b-spinner>
        </span>
      </b-button>
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
    </div>
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
    login() {
      if (this.form) {
        this.$store
          .dispatch('loginUser', this.form)
          .then((response) => {
            this.$store.commit('setStatus', 'loading');

            this.$store.commit('logUser', {
              userId: response.userId,
              firstname: response.firstname,
              token: response.token,
            });

            this.$store.commit('setStatus', 'loggedIn');

            this.$router.push('/');
          })
          .catch((error) => {
            this.$store.commit('setStatus', 'error_login');
            this.$bvToast.toast(
              'Veuillez ressaisir vos données dans le formulaire.',
              {
                title: 'Erreur !',
                variant: 'danger',
                autoHideDelay: 8000,
                solid: true,
              }
            );
            // eslint-disable-next-line no-console
            console.log('error', error);
          });
      }
    },
    createAccount() {
      if (this.form) {
        this.$store.commit('setStatus', 'loading');
        this.$store
          .dispatch('createUser', this.form)
          .then((response) => {
            this.$store.commit('logUser', {
              userId: response.userId,
              firstname: response.firstname,
              token: response.token,
            });
            this.login();
            this.$store.commit('setStatus', 'loggedIn');
            this.$router.push('/');
          })
          .catch((error) => {
            this.$store.commit('setStatus', 'error create account');
            // eslint-disable-next-line no-console
            console.log('error', error);
          });
      }
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
