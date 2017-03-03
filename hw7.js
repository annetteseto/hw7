var locations = [
    [
        "Business and Economics Building: 48.465269, 123.313234",
        48.465269, 
        -123.313234
    ]
]
    var clearihue = [
    [
        "Clearihue Building: 48.464280, 123.31045.",
        48.464280, 
        -123.310455
    ]
]

var fel = [
    [
        "Felicita's Campus Pub: 48.464800, 123.307923",
        48.464800, 
       -123.307923
    ]
]


    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

   var infowindow = new google.maps.InfoWindow();

   var cnt = 0;

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
                    cnt++;
        alert("Coordinates:"  + locations + "/nThe amount of markers clicked/shown so far is: " + cnt);
      
        }
        

      })(marker, i));
    }
	for (d = 0; d < clearihue.length; d++) {  
      marke = new google.maps.Marker({
        position: new google.maps.LatLng(clearihue[d][1], clearihue[d][2]),
        map: map
      });

      google.maps.event.addListener(marke, 'click', (function(marke, d) {
        return function() {
          infowindow.setContent(clearihue[d][0]);
          infowindow.open(map, marke);
		  cnt ++;
		alert("Coordinates: " + clearihue + "\nThe amount of markers clicked/shown so far is: " + cnt);
        }
      })(marke, d));
    }
	
	for (j = 0; j < fel.length; j++) {  
      mark = new google.maps.Marker({
        position: new google.maps.LatLng(fel[j][1], fel[j][2]),
        map: map
      });

      google.maps.event.addListener(mark, 'click', (function(mark, j) {
        return function() {
          infowindow.setContent(fel[j][0]);
          infowindow.open(map, mark);
		  cnt ++;
		alert("Coordinates: " + fel + "\nThe amount of markers clicked/shown so far is: " + cnt);
        }
      })(mark, j));
    }
	
	google.maps.event.addListener(map, 'bounds_changed', function() {
  console.log(map.getMapTypeId());
  console.log(map.getZoom());
  console.log(map.getBounds());
});


