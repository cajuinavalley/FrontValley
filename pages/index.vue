<template>
  <b-container fluid>
    <b-row  class="main">
      <b-col id="company-list" class="bg-info" cols="4" order="2">
        <div class="card" v-for="n in 30">
          <b-card img-src="https://placekitten.com/1000/300"
                img-alt="Card image"
                img-top>
            <h6 slot="header"
                class="mb-0">CanionLabs</h6>
            <p class="card-text">
                Some quick example text to build on the card and make up the bulk of the card's content.
            </p>
          </b-card>
        </div>
      </b-col>
      <b-col id="map" class="bg-warning" cols="8" order="2">
        Mapa
      </b-col>
    </b-row>
  </b-container>
</template>

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
