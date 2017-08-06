
$(".slick").slick({
  fade: true,
  autoplay: true,
  autoplayspeed: 2000,
  arrows: false,
  dots: true
});

$("img").css({
  "display": "none"
}).fadeIn(2000);

// dropdown menu

var $select = $("<select></select>");
$("header").append($select);


$("nav a").each(function(){
   var $anchor = $(this);
 
   var $option = $("<option></option>");

 
   if($anchor.parent().hasClass("active")) {
    $option.prop("selected", true);
    }
 
   $option.val($anchor.attr("href"));

   $option.text($anchor.text());
  
   $select.append($option);
});


$select.change(function(){
  
  window.location = $select.val();
});



// google map

var mapOptions = {
    center: new google.maps.LatLng(-29.8588,31.0064),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(-29.8588, 31.0064)
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);
var infoWindowOptions = {
    content: 'Berea is here'
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
google.maps.event.addListener(marker,'click',function(e){
  
  infoWindow.open(map, marker);
  
});