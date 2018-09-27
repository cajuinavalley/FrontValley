<template>
  <b-container fluid>
    <b-row  class="main">
      <b-col id="company-list" class="bg-info" cols="4" order="2">
        <div class="card" v-for="n in 30">
          <card></card>
        </div>
      </b-col>
      <b-col id="map" class="bg-warning" cols="8" order="2">
        Mapa
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style>
.main {
  height: 90vh;
}

#company-list {
  overflow: scroll;
}

.card {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
