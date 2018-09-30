<template>
  <b-container fluid>
    <b-row  class="main">
      <b-col id="company-list" class="bg-info" cols="4" order="2">
        <div class="card" v-for="startup in Startups">
          <card :data=startup></card>
        </div>
      </b-col>
      <b-col id="map" class="bg-warning" cols="8" order="2">
        <maps></maps>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Card from '~/components/Card.vue'
import Maps from '~/components/Maps.vue'

export default {
  components: {
    Card,
    Maps
  },
  fetch ({store}) {
    store.dispatch('getStartups')
  },
  computed: {
    Startups () {
      return this.$store.state.startups
    }
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

#map {
  padding: 0;
}

.card {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
