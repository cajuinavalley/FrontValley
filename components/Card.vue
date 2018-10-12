<template>
	<b-card :img-src="data.logo"
	        img-alt="Card image"
	        img-left>

	    <h6 slot="header" class="mb-0">{{data.name}}</h6>
		<p slot="header" class="mb-0 sub-title">
			{{data.mission}}
		</p>
		<b-card-body>
			<p class="card-text">
		        {{data.summary}}
		    </p>
		    <b-badge pill variant="primary">{{sector}}</b-badge>
		</b-card-body>
		<b-card-footer>
			<b-row>
		        <b-col cols="8">
	        		<fa @click="$store.commit('setSelectedStartup', data)" v-b-popover.hover="data.phone" :title="data.city" :icon="fas.faMapMarkerAlt" style="color: #e31755; font-size: 25px"/>
		        </b-col>
		        <b-col align="right" cols="4">
	        		<b-link v-if="data.facebook"
	        				target="_blank" 
	        				:href="'https://www.facebook.com/' + data.facebook">
	        			<fa :icon="faFacebook" style="color: #209af2; font-size: 25px"/>
	        		</b-link>
	        		<b-link v-if="data.linkedin" 
	        				target="_blank" 
	        				:href="'https://www.linkedin.com/company/' + data.facebook">
	        			<fa :icon="faLinkedin" style="color: #209af2; font-size: 25px"/>
	        		</b-link>
		        </b-col>
    		</b-row>
		</b-card-footer>
	  </b-card>
</template>

<script>
	import { getSector } from '~/utils/api'
	import { fas } from '@fortawesome/free-solid-svg-icons'
	import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
	export default {
		data() {
			return {
				sector: null
			}
		},
	  	props: ['data'],
	  	name: 'card',
	    computed: {
			fas () {
	     		return fas
	  		},
	      	faFacebook () {
		 		return faFacebook
	      	},
	      	faLinkedin () {
	      		return faLinkedin
	      	}
	    },
	    mounted () {
	    	this.fillSector()
	    },
	    methods: {
	    	fillSector() {
	    		getSector(this.data.sector)
	    			.then(rsp => {
			            this.sector = rsp.name
			          })
	    	}
	    }
  }
</script>

<style>
.social-links {
	align-content: "center"
}

.card {
	border: none;
}

.card-img {
	width: 100px;
	max-height: 250px;
	margin: auto;
	margin-top: 10px;
	margin-bottom: 10px;
}

.card-body {
    padding: 0.5rem;
}

.sub-title {
	font-weight: 200;
	font-size: 13px;
	line-height: 14px;
}

.card-text {
	font-size: 15px;
	line-height: 16px;
}
</style>