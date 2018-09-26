<template>
  <b-navbar toggleable="md" type="info" variant="light">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      Cajuína Valley
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template slot="button-content">
            <span>Caio Víctor</span>
          </template>
          <b-dropdown-item href="#">Editar Dados</b-dropdown-item>
          <b-dropdown-item href="#">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>  
</template>

<style>
.navbar {
  height: 10vh;
}
</style>