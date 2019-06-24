<template>
  <div class="map">
    <div id='map'></div>
  </div>
</template>

<style>
  #map { 
    top:0; 
    bottom:0; 
    width:100%;
    height: 700px;
  }

  #marker {
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  }
   
  .mapboxgl-popup {
  max-width: 200px;
  }

</style>

<script>

export default {
  data: function() {
    return {
      locations: [
        { 
          // city: 'Denver',
          longitude:-104.991531,
          latitude: 39.742043,
          description: 'One of the most important economic and cultural centers of the Central US, Denver is a large city with the population close to 650,000 people located in Colorado.'
        },
        { 
          // city: 'Las Vegas',
          longitude:-115.172813,
          latitude: 36.114647,
          description: 'Las Vegas is a famous resort city in Nevada, USA. It is one of the richest cities of the United States known for its casinos, gambling facilities and various entertainment option.'
        },
        { 
          // city: 'New York, NY',
          longitude:-73.935242,
          latitude: 40.730610,
          description: 'New York City is one of the most known cities-symbols of the USA. It is known as a global power city and one of the most populous cities of the world, with the population approaching to 8.5 million people.'
        },
      ]
    };
  },
  mounted: function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmNoaW5uMzEwIiwiYSI6ImNqeGFtMGduYzAwYmQzb29weXVqb2c5cTAifQ.yte-sy3FBpOupEv6_BanuQ';

    var pier = [-118.3926, 33.8397];

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-118.38, 33.84], // starting position [lng, lat]
        zoom: 3 // starting zoom
    });


    var popup = new mapboxgl.Popup({ offset: 25 })
    .setText('The Redondo Beach Pier is an above average Southern California pier. Not only does it connect to the shore in two places making a pleasant loop walking.');

    new mapboxgl.Marker()
    .setLngLat(pier)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

    this.locations.forEach(function(location) {
      var popup = new mapboxgl.Popup({ offset: 25 })
      .setText(location.description);
      let marker = new mapboxgl.Marker()
      .setLngLat([location.longitude, location.latitude])
      .setPopup(popup) // sets a popup on this marker
      .addTo(map);
      console.log(location)
    });
  },
};
</script>