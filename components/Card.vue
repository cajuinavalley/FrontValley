<template>
	<b-card img-src="/images/monar-logo.png"
	        img-alt="Card image"
	        img-left>

	    <h6 slot="header" class="mb-0">MONAR</h6>
		<p slot="header" class="mb-0 sub-title">
			Plataforma de monitoramento para produtos sensíveis a temperatura
		</p>
		<b-card-body>
			<p class="card-text">
		        A proposta do MONAR é reduzir perdas, aumentar vida útil e melhorar qualidade de produtos sensíveis a temperatura através de um sistema de monitoramento baseado em IoT diminuindo custos e simplificando logística.
		    </p>
		    <b-badge pill variant="primary">IoT</b-badge>
		    <b-badge pill variant="primary">Health</b-badge>
		</b-card-body>
		<b-card-footer>
			<b-row>
		        <b-col cols="8">
	        		<fa v-b-popover.hover="'(86) 3233-4699'" title="Teresina - PI" :icon="fas.faMapMarkerAlt" style="color: #e31755; font-size: 25px"/>
		        </b-col>
		        <b-col align="right" cols="4">
	        		<fa :icon="faFacebook" style="color: #209af2; font-size: 25px"/>
	        		<fa :icon="faLinkedin" style="color: #209af2; font-size: 25px"/>
		        </b-col>
    		</b-row>
		</b-card-footer>
	  </b-card>
</template>

<script>
	import { fas } from '@fortawesome/free-solid-svg-icons'
	import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
	export default {
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
	width: 50%;
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