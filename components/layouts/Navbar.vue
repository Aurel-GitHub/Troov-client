<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <NuxtLink to="/">
          <img
            to="/"
            src="../../assets/logo-dark.png"
            class="d-inline-block align-top"
            alt="Logo Troov"
          />
        </NuxtLink>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="mr-2">
            <NuxtLink to="/report">Déclarer</NuxtLink>
          </b-nav-item>
          <b-nav-item v-if="!$store.state.user">
            <NuxtLink to="/login">S'inscrire / Se connecter</NuxtLink>
          </b-nav-item>
          <b-nav-item v-else>
            <NuxtLink to="/signout">Se déconnecter</NuxtLink>
          </b-nav-item>
          <b-navbar-brand v-if="$store.state.user" class="navbar-brand"
            >Bonjour, {{ $store.state.user.firstname }}</b-navbar-brand
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarLayout',
  mounted() {},
};
</script>

<style>
a,
a:visited {
  text-decoration: none;
  color: inherit;
}
.navbar-brand {
  font-size: 1rem;
  font-weight: 400;
  align-self: center;
}
</style>
