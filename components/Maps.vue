<template>
	<GmapMap
          :center.sync="infoMap.position"
          :zoom="infoMap.zoom"
          map-type-id="hybrid"
          style="width: 100%; height: 100%"
        >
		<GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="showInfo(m, index)"
            :icon="infoMap.markerIcon"
		>
		</GmapMarker>
		<GmapInfoWindow
			:opened="infoWindow.opened" 
			@closeclick="closeInfo()"
			:position="infoWindow.position"
		>
			{{infoWindow.text}}
		</GmapInfoWindow>
    </GmapMap>
</template>

<script>
	import { getSector } from '~/utils/api'
	export default {
		name: 'maps',
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

				markers: [{
	          		position: {lat: -5.092, lng: -42.8138}
	        	}, {
	        		position: {lat: -5.092, lng: -42.8228}
	        	}]
			}
		},
		methods: {
			closeInfo() {
				this.infoWindow.opened = false
				this.infoMap.markerIcon = ""
			},
			showInfo(data) {
				this.infoWindow.text = data.position
				this.infoWindow.position = data.position
				this.infoWindow.opened = true
				this.infoMap.markerIcon = "http://maps.google.com/mapfiles/kml/paddle/red-circle-lv.png"
			}
		}
  	}
</script>

<style></style>