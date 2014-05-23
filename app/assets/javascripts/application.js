// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
  var markers = [];

  function initialize() {
    //just a variable storing a location
    var mapOptions = {
      center: new google.maps.LatLng(34.397, 150.644),
      zoom: 2
    };

    var loadPins = function() {    
      var url = "/pins.json";    
      $.ajax(url, {
        type: 'get'
      }).success(function(data) {      
        for (var i in data) {        
          addPin(data[i].latitude, data[i].longitude);      
        }    
      });  
    }
    loadPins();

    var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

    

    function addPin(latitude, longitude) {
      var loc = new google.maps.LatLng(latitude, longitude);
      console.log(loc);
      var newMarker = new google.maps.Marker({
        position: loc,
        map: map
      });
    };


    google.maps.event.addListener(map, "click", function(event) {
      addPin(event.latLng.A, event.latLng.k);

      var latitude = event.latLng.A;
      var longitude = event.latLng.k;
      var email = $('.taco').val('#current_user.email');
      $.ajax({
        url: '/pins.json', // action: "/contacts",
        type: 'post',
        data: {
          "pin":
          {
            "latitude": latitude,
            "longitude": longitude,
          }
        },
        dataType: "json",
        success: function(data) {
          console.log(data);      
        }
      })

    });
    // google.maps.event.addListener(map, "click", function(event) {
    //   addPin(event.latLng.A, event.latLng.k);
    // });
  };
  //code loads the map
  google.maps.event.addDomListener(window, 'load', initialize);

});