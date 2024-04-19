const locations = [
    { name: 'Urban Neighborhood Initiatives', lat: 42.3142, lng: -83.1186 },
    { name: 'Humaine Society of Huron Valley', lat: 42.3006, lng: -83.7291 },
    { name: 'Angels of Hope', lat: 42.6759, lng: -83.0042 }
  ];

  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 42.6759, lng: -83.0042 }, 
      zoom: 10
    });

    locations.forEach((location, index) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map
      });

      document.getElementById(`button${index + 1}`).addEventListener('click', function() {
        map.setCenter({ lat: location.lat, lng: location.lng });
      });
    });
  }