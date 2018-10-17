<template>
	<GmapMap
    :center.sync="mapPosition"
    :zoom.sync="infoMap.zoom"
    map-type-id="hybrid"
    style="width: 100%; height: 100%"
  >
    <GmapMarker
      :key="index"
      v-for="(startup, index) in data"
      :position="getPosition(startup)"
      @click="$store.commit('setSelectedStartup', startup)"
      icon="http://maps.google.com/mapfiles/kml/paddle/grn-stars-lv.png">
    </GmapMarker>
    <GmapInfoWindow
      :opened="infoBox" 
      @closeclick="closeInfo()"
      :position="$store.state.actualStartup ? $store.state.actualStartup.position: infoWindow.position">
      {{infoText}}
    </GmapInfoWindow>
  </GmapMap>
</template>

<script>
	import { getSector } from '~/utils/api'
	import { mapState } from 'vuex'

	export default {
		name: 'maps',
		props: ['data'],
		computed: {
			infoText() {
				return this.$store.state.actualStartup.name === undefined ? '' : this.$store.state.actualStartup.name
			},
			infoBox() {
				if (this.$store.state.actualStartup.opened === undefined) {
					return false
				}
				return this.$store.state.actualStartup.opened

			},
			mapPosition() {
				if (this.$store.state.actualStartup.position === undefined) {
					return this.infoMap.position
				}
				return this.$store.state.actualStartup.position
			},
			selectedStartup(){
			    return this.$store.state.selectedStartup
			  }
		},
		data() {
			return {
				infoWindow: {
					text: '',
					position: {lat: 0, lng:0},
					opened: false
				},

				infoMap: {
					position: {lat: -5.092, lng: -42.8138},
					zoom: 13,
					markerIcon: ""
				},
			}
		},
		methods: {
			getPosition(startup) {
				return {
					lat: startup.lat,
					lng: startup.lon
				}
			},
			closeInfo() {
				this.infoWindow.opened = false
				this.$store.state.actualStartup.opened = false
				this.infoMap.markerIcon = ""
			},
			showInfo(data, index) {
				this.$store.state.actualStartup.name = data.name
				this.$store.state.actualStartup.position = this.getPosition(data)
				this.$store.state.actualStartup.opened = true
				this.infoMap.markerIcon = "http://maps.google.com/mapfiles/kml/paddle/red-circle-lv.png"
				console.info(this.$store.state.actualStartup)
			}
		}
  	}
</script>

<style></style>