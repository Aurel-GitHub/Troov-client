
<template>
  <b-container fluid="xl">
    <div class="my-5">
      <b-form @submit="onSubmit">

        <h3 class="mb-4">Login form</h3>

        <b-form-group id="input-group-1" label="Email address:" label-for="input-1" valid-feedback="email correct"
          :invalid-feedback="invalidFeedbackEmail" :state="stateEmail">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required>
          </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2" valid-feedback="password Correct"
          :invalid-feedback="invalidFeedbackPassword" :state="statePassword">
          <b-form-input id="input-1" v-model="form.password" type="password" placeholder="Enter password" required>
          </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" :disabled="!stateEmail && !statePassword">Submit</b-button>
        <small class="ml-3">
          <NuxtLink to="/register">No account register you here !</NuxtLink>
        </small>
      </b-form>


    </div>
  </b-container>
</template>

<script>
export default {
  name: 'LoginForm',

  data() {
    return {
      form: {
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
    // eslint-disable-next-line vue/return-in-computed-property
    invalidFeedbackEmail() {
      if (!this.form.email.includes('@') && this.form.email) {
        return 'Email invalid';
      }
    },
    statePassword() {
      return this.form.password.length >= 4;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    invalidFeedbackPassword() {
      if (this.form.password.length > 0) {
        return 'Enter a password of more than 4 characters'
      }
    }
  },
  methods: {
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
small {
  text-decoration: underline;
  color: blue;
}
</style>
