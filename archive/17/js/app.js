particlesJS('particles-js', 
	{
	  "particles": {
	    "number": {
	      "value": 80,
	      "density": {
	        "enable": true,
	        "value_area": 800
	      }
	    },
	    "color": {
	      "value": "#ffffff"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 0,
	        "color": "#000000"
	      },
	      "polygon": {
	        "nb_sides": 5
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.5,
	      "random": false,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 3,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": false,
	    },
	    "move": {
	      "enable": true,
	      "speed": 2,
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
	        "enable": false,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": true,
	        "mode": "push"
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
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
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

$(document).ready(function () {
	var map = L.map('map-box', {
		maxZoom: 24,
		minZoom: 1,
		crs: L.CRS.Simple,
		scrollWheelZoom: false
	}).setView([120, 170], 3);

	map.setMaxBounds(new L.LatLngBounds([0, 250], [250, 0]));

	var imageUrl = 'img/map.jpg';
	var imageBounds = [[250, 0], [0, 250]];

	L.imageOverlay(imageUrl, imageBounds).addTo(map);
	L.marker([140, 215]).bindPopup('Parking').addTo(map);
	L.marker([130, 225]).bindPopup('Parking').addTo(map);
	L.marker([150, 230]).bindPopup('Parking').addTo(map);
	L.marker([120, 175]).bindPopup('Main Venue').addTo(map);
});