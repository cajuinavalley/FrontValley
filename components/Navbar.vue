<template>
  <b-navbar toggleable="md" type="info" variant="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      Cajuína Valley
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
    </b-collapse>

  </b-navbar>  
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
      'selectedStartup'
    ]),
  }
</script>

<style>
.navbar {
  height: 10vh;
}
</style>