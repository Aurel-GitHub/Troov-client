<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        <NuxtLink to="/">
          <img to="/" src="../../assets/logo-dark.png" class="d-inline-block align-top" alt="Logo Troov" />
        </NuxtLink>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="mr-2">
            <NuxtLink to="/report">Report</NuxtLink>
          </b-nav-item>
          <b-nav-item>
            <NuxtLink to="/login">Sign Up</NuxtLink>
          </b-nav-item>
          <b-nav-item>
            <NuxtLink to="/register">Register</NuxtLink>
          </b-nav-item>
          <b-nav-item>
            <NuxtLink to="/signout">Sign Out</NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavbarLayout',
}
</script>

<style>
a,
a:visited {
  text-decoration: none;
  color: inherit;
}
</style>
