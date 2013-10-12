// acciones
$(function(){
	  document.addEventListener("deviceready",function(){	
	   navigator.geolocation.getCurrentPosition(function(pos){ //funcion pos
	     initialize(pos.coords.latitude,pos.coords.longitude);  
	   }, function(err){
		  alert('Error: '+err.code); 
	   });
	  }, false);
});


function initialize(lat, lon) { //lat, lon: parametros de latitud y longitud
				//Posición del mapa
				var latlng = new google.maps.LatLng(lat, lon);//latitud,longitud, a este obj le pasamos las coordenadas
				var myOptions = {
					zoom: 16,   //zoom
					center: latlng,  //centro: latitud y longitud
					mapTypeId: google.maps.MapTypeId.ROADMAP   // el mapa de google para que se vea 
				};
				var map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);//obj tipo mapa, crea el canvas
				//Marcador
				var marker = new google.maps.Marker({ //obj tipo marcador, atributo position, map y tittle "mi posicion
					position: latlng, 
					map: map, 
					title:"Mi posición" //tittle "mi posicion"
				});
			}