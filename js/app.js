//particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"bottom-left","random":false,"straight":true,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":100,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":300,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

particlesJS('particles-js', 
	{
	  "particles": {
	    "number": {
	      "value": 30,
	      "density": {
	        "enable": true,
	        "value_area": 750
	      }
	    },
	    "color": {
	      "value": ["8f2e3e","#ef626c"]
	    },
	    "shape": {
	      "type": ["polygon","triangle","circle","edge"],
	      "stroke": {
	        "width": 0,
	        "color": "#000000"
	      },
	      "polygon": {
	        "nb_sides": 6
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.075,
	      "random": false,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 100,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 20,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": false,
	    },
	    "move": {
	      "enable": true,
	      "speed": 1.5,
	      "direction": "none",
	      "random": false,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": true,
	        "mode": "bubble"
	      },
	      "onclick": {
	        "enable": false,
	        "mode": "remove"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 200,
	        "line_linked": {
	          "opacity": 0.2
	        }
	      },
	      "bubble": {
	        "distance": 100,
	        "size": 0,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 5
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	}

);

/*
$(document).ready(function () {
	var map = L.map('map-box', {
		maxZoom: 24,
		minZoom: 1,
		crs: L.CRS.Simple,
		scrollWheelZoom: false
	}).setView([105, 197], 3);

	map.setMaxBounds(new L.LatLngBounds([0, 250], [250, 0]));

	var imageUrl = 'img/map.jpg';
	var imageBounds = [[250, 0], [0, 250]];

	L.imageOverlay(imageUrl, imageBounds).addTo(map);
	L.marker([140, 215]).bindPopup('Parking').addTo(map);
	L.marker([130, 225]).bindPopup('Parking').addTo(map);
	L.marker([150, 230]).bindPopup('Parking').addTo(map);
	L.marker([105, 197]).bindPopup('Main Venue').addTo(map);
});
*/